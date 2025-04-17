import React from 'react'
import {MDXProvider} from "@mdx-js/react";
import {A, H4, H5, H6, P} from "./typography";

const MdxTemplate = ({children} : {children: React.ReactNode})  => {
    const component = {
        h1: (props: object) => <H4 className='mt-12 mb-1 first:mt-0' {...props}/>,
        h2: (props: object) => <H5 className='mt-4 mb-1' {...props}/>,
        h3: (props: object) => <H6 className='mt-2 mb-1' {...props}/>,
        p: (props: object) => <P className='mt-0 mb-2' {...props}/>,
        ul: (props: object) => <ul className='my-0 list-outside list-disc text-md text-gray-500 font-serif dark:text-gray-400' {...props}/>,
        ol: (props: object) => <ol className='my-0 list-outside list-decimal text-md text-gray-500 font-serif dark:text-gray-400' {...props}/>,
        li: (props: object) => <li className='my-0' {...props}/>,
        a: (props: object) => <A {...props}/>,
        pre: (props: object) => <pre className='p-0' {...props}/>,
        table: (props: object) => <table className='font-medium text-md font-serif' {...props}/>,
    }

    return (
        <article className='max-w-full dark:format-invert format'>
            <MDXProvider components={component}>{children}</MDXProvider>
        </article>
    )
}

export default MdxTemplate