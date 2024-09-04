import React from 'react'
import {graphql, Link, PageProps} from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";
import {H3, H6, Span, P, H4} from "../components/typography";
import {FaArrowRight} from "react-icons/fa6";
import LinkButton from "../components/link-button";

const LectureItem = ({code, title, division, description, showMore, sitePath}: {
    code?: string | number,
    title?: string,
    division?: string | number,
    description?: string | null,
    showMore?: boolean | null
    sitePath: string
}) => {

    const maxWords = 50
    const descArray = description?.trim()?.split(' ') ?? []
    const ellipsis = descArray.length > maxWords ? ' \u00B7\u00B7\u00B7' : ''
    const truncateDesc = descArray.splice(0, maxWords).join(' ') + ellipsis
    return (
        <div className="flex flex-col text-sm items-start font-serif space-y-1">
            {code && <Span className='leading-none text-gray-400 dark:text-gray-500'>{code}</Span> }
                <H6 className='capitalize font-sans'>
                    {title} {division && ` (${division})`}
                </H6>
                <P className='hidden md:flex'>{truncateDesc}</P>
            {
                showMore &&
                <LinkButton to={sitePath}>
                    Learn More
                    <FaArrowRight className='ml-2 h-3 w-3'/>
                </LinkButton>
            }
        </div>
    )
}

const SEMESTERS = ['spring', 'summer', 'fall', 'winter', 'precollege']

const Lectures = ({data}: PageProps<Queries.LecturePageQuery>) => {
    const {lectures} = data
    const years = Array.from(
        new Set(lectures.nodes.map(node => node.frontmatter?.year || 0))
    ).sort((a, b) => b - a)

    return (
        <Layout activeLink='lectures'>
            <div className='flex flex-col space-y-8'>
            {
                years.map(year =>
                    <div>
                        <H3 className='dark:text-primary-100'>{year}</H3>
                        {
                            SEMESTERS.map(semester =>
                                lectures.nodes.filter(
                                    node => node.frontmatter?.year === year && node.frontmatter?.semester === semester
                                ).length > 0 &&
                                <div className='flex flex-col'>
                                    <H4 className='dark:text-primary-100 capitalize'>{semester}</H4>
                                    <ul className='space-y-2 pt-2 pb-4'>
                                        {
                                            lectures.nodes.filter(
                                                node => node.frontmatter?.year === year && node.frontmatter?.semester === semester
                                            ).sort(
                                                (a, b) =>
                                                    a.frontmatter?.code?.localeCompare(b.frontmatter?.code || '') || -1).map(node =>
                                                <li>
                                                    <LectureItem
                                                        title={node.frontmatter?.title || ''}
                                                        code={node.frontmatter?.code || ''}
                                                        division={node.frontmatter?.division || ''}
                                                        description={node.frontmatter?.description || ''}
                                                        sitePath={node.fields?.sitePath || ''}
                                                        showMore={(node.fields?.timeToRead?.words || 0) > 0}
                                                    />
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                )
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
                    timeToRead {
                        words
                    }
                }
                frontmatter {
                    code
                    title
                    year
                    semester
                    division
                    description
                }
            }
        }
    }
`

export default Lectures