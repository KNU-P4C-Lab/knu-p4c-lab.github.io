import React from 'react'
import {P} from './typography'

const PhotoItem = ({title, src}: {title?: string, src: string}) => (
    <div className="bg-white space-y-4 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        {
            <img src={src} alt={title || ''} className='rounded-lg w-full mt-0 mb-0'/>
        }
        { title && <P className='text-center pb-4'>{title}</P>  }

    </div>
)

export {PhotoItem}