import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";


const Seo = ({title, description, url, image} : {title?: string, description?: string, url?: string, image?: string}) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    keywords
                    description
                }
            }
        }
    `)
    return (
        <>
                <meta charSet='UTF-8'/>
                <meta property="og:site_name" content={site.siteMetadata.title}/>
                <meta property="og:type" content='website'/>
                <meta name='keywords' content={site.siteMetadata.keywords}/>
                <meta name='robots' content='index, follow'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>

                <title>{title ? `${title} | ${site.siteMetadata.title}` : `${site.siteMetadata.title}`}</title>
                <meta property='og:title' content={`${title} | ${site.siteMetadata.title}`}/>
                <meta property="og:locale" content="en_US"/>

                <meta name='description' content={description ? description : site.siteMetadata.title}/>
                <meta property='og:description' content={description ? description : site.siteMetadata.description}/>

                <link rel='canonical' href={url ? url : site.siteMetadata.siteUrl}/>
                <meta property='og:url' content={url ? url : site.siteMetadata.siteUrl}/>

                <meta name='image' content={image ? image : site.siteMetadata.icon}/>
                <meta property='og:image' content={image ? image : site.siteMetadata.icon}/>
        </>
    )
}
export default Seo;