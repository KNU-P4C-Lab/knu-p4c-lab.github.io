import React from 'react'
import {graphql, PageProps} from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";
import {H3, Span, P, H5, InnerLink} from "../components/typography";

const Lectures = ({data}: PageProps<Queries.LecturePageQuery>) => {
    const { lectures } = data
    const majorArtCodes = Array.from(
        new Set(
            lectures.nodes.filter(
                node => node.frontmatter?.types == "major"
            ).map(
                node => node.frontmatter?.code
            )
        )
    )
    const liberalArtCodes = Array.from(
        new Set(
            lectures.nodes.filter(
                node => node.frontmatter?.types == "liberal"
            ).map(
                node => node.frontmatter?.code
            )
        )
    )

    return (
        <Layout activeLink='lectures'>
            <div className='flex flex-col space-y-8'>
                {
                    majorArtCodes.length > 0 &&
                    <div>
                        <H3 className='dark:text-primary-100 mb-6'>Major Arts (Computer Science &amp; Engineering)</H3>
                        <div className='flex flex-col space-y-6'>
                            {
                                majorArtCodes.map(code => {
                                    const curLectures = lectures.nodes.filter(node => node.frontmatter?.code === code)
                                    const lastLecture = curLectures.at(0)

                                    return (
                                        <div className="flex flex-col border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                                            {
                                                code && <Span className='text-sm font-sans text-gray-400 dark:text-gray-500'>{code}</Span>
                                            }
                                            {
                                                lastLecture?.frontmatter?.title && <H5 className='capitalize font-sans mb-2'>{lastLecture?.frontmatter?.title}</H5>

                                            }
                                            {
                                                lastLecture?.frontmatter?.description && <P className='hidden md:flex'>{lastLecture?.frontmatter?.description}</P>
                                            }
                                            <ul className='md:grid md:grid-cols-3 md:space-x-6 list-disc list-inside '>
                                                {
                                                    curLectures.map(node =>
                                                        <li className='text-gray-500 dark:text-gray-400'>
                                                            <InnerLink href={node.fields?.sitePath || ""} className='capitalize'>{node.frontmatter?.semester || ""} {node.frontmatter?.year || ""}</InnerLink>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    liberalArtCodes.length > 0 &&
                    <div>
                        <H3 className='dark:text-primary-100 mb-6'>Liberal Arts</H3>
                        <div className='flex flex-col space-y-6'>
                            {
                                liberalArtCodes.map(code => {
                                    const curLectures = lectures.nodes.filter(node => node.frontmatter?.code === code)
                                    const lastLecture = curLectures.at(0)

                                    return (
                                        <div className="flex flex-col border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                                            {
                                                code && <Span className='text-sm font-sans text-gray-400 dark:text-gray-500'>{code}</Span>
                                            }
                                            {
                                                lastLecture?.frontmatter?.title && <H5 className='capitalize font-sans mb-2'>{lastLecture?.frontmatter?.title}</H5>

                                            }
                                            {
                                                lastLecture?.frontmatter?.description && <P className='hidden md:flex'>{lastLecture?.frontmatter?.description}</P>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>


        </Layout>
    )

}

export const Head = () =>
    <Seo title='Lectures'/>

export const pageQuery = graphql`
    query LecturePage {
        lectures: allMdx(
            filter: {
                fields: {
                    postType: {
                        eq: "lectures"
                    }
                }
            }
            sort: {
                frontmatter: {
                    year: DESC
                }
            }
        ) {
            nodes {
                fields {
                    sitePath
                }
                frontmatter {
                    code
                    year
                    semester
                    division
                    title
                    types
                    description
                }
            }
        }
    }
`

export default Lectures