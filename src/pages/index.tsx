import * as React from "react"
import Seo from "../components/seo";
import {graphql, PageProps} from "gatsby";
import Layout from "../components/layout";
import {
    Card,
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle
} from "flowbite-react";
import { FaArrowRight, FaCalendar} from "react-icons/fa6";
import {IoPerson, IoPhonePortraitSharp, IoSync, IoThumbsUpOutline} from "react-icons/io5";
import {H1, H2, H4, H6, P, Span} from "../components/typography";
import LinkButton from "../components/link-button";

const Index = ({ data }: PageProps<Queries.IndexPageQuery>) => {
    const {site, projects, news} = data

    return (
        <Layout>
            {
                /** About **/
            }
            <div className='pt-12'>
                <div className='mx-auto max-w-3xl md:text-center'>
                    <H1 className='tracking-tight text-gray-900 dark:text-primary-100'>
                        {site?.siteMetadata?.slogan}
                    </H1>
                    <P className='mt-6 leading-8 text-gray-700 dark:text-gray-100 font-serif'>
                        {site?.siteMetadata?.description}
                    </P>
                </div>
                <div className='mt-24 grid grid-cols-1 gap-12 md:grid-cols-2'>
                    <div className='relative'>
                        <div className='absolute flex h-10 w-10 rounded-lg items-center justify-center bg-cyan-400 dark:bg-primary-100 '>
                            <IoPhonePortraitSharp className='mx-auto text-white w-6 h-6 stroke-1 dark:text-gray-900'/>
                        </div>
                        <div className='pl-16'>
                            <H4 className='first-letter:text-4xl first-letter:dark:text-primary-100'>Pervasive</H4>
                            <P className='mt-2 leading-7'>Our research artifact is implemented
                                on mobile and ubiquitous devices to allow anyone to access it anywhere.</P>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='absolute flex h-10 w-10 rounded-lg items-center justify-center bg-cyan-400 dark:bg-primary-100 '>
                            <IoSync className='mx-auto my-auto text-white w-6 h-6 stroke-1 dark:text-gray-900'/>
                        </div>
                        <div className='pl-16'>
                            <H4 className='first-letter:text-4xl first-letter:dark:text-primary-100'>Persuasive</H4>
                            <P className='mt-2 leading-7'>We primarily aims to bring about a
                                change in the behavior and attitude of people.</P>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='absolute flex h-10 w-10 rounded-lg items-center justify-center bg-cyan-400 dark:bg-primary-100 '>
                            <IoPerson className='mx-auto my-auto text-white w-6 h-6 stroke-1 dark:text-gray-900'/>
                        </div>
                        <div className='pl-16'>
                            <H4 className='first-letter:text-4xl first-letter:dark:text-primary-100'>Personalized</H4>
                            <P className='mt-2 leading-7'>There is no "one-size-fits-all"; we
                                want to convince people in a personalized way, tailored to their individual needs and
                                preferences.</P>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='absolute flex h-10 w-10 rounded-lg items-center justify-center bg-cyan-400 dark:bg-primary-100'>
                            <IoThumbsUpOutline className='mx-auto my-auto text-white w-6 h-6 stroke-1 dark:text-gray-900'/>
                        </div>
                        <div className='pl-16'>
                            <H4 className='first-letter:text-4xl first-letter:dark:text-primary-100'>Positive</H4>
                            <P className='mt-2 leading-7'>Last but not least, we try to ensure
                                that we guide people towards positive outcomes.</P>
                        </div>
                    </div>
                </div>
            </div>
            {
                /** Recent Projects **/
            }
            <div className=''>
                <H2 className='text-center dark:text-primary-100'>Recent Projects</H2>
                <Card className='mt-12'>
                    <div className='flow-root'>
                        <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
                            {projects.nodes.map(node =>
                                <li className='py-6'>
                                    <Span className='text-sm mb-1 leading-none text-gray-400 dark:text-gray-500'>{node.frontmatter?.startDate} - {node.frontmatter?.endDate || "Ongoing"}</Span>
                                    <H6>{node.frontmatter?.title}</H6>
                                    <P className='text-md mb-4'>{node.frontmatter?.description}</P>
                                    {
                                        (node.fields?.timeToRead?.words || 0) > 0 &&
                                        <LinkButton to={node.fields?.sitePath!!}>
                                            Learn More
                                            <FaArrowRight className='ml-2 h-3 w-3'/>
                                        </LinkButton>
                                    }
                                </li>
                            )}
                        </ul>
                    </div>
                </Card>
            </div>
            {
                /** Latest News **/
            }
            <div className=''>
                <H2 className='text-center dark:text-primary-100'>Latest News</H2>
                <Timeline className='mt-12'>
                    {news.nodes.map(node =>
                        <TimelineItem>
                            <TimelinePoint icon={FaCalendar}/>
                            <TimelineContent className="font-serif">
                                <TimelineTime>{node.frontmatter?.dateTime}</TimelineTime>
                                <TimelineTitle className="font-sans">{node.frontmatter?.title}</TimelineTitle>
                                <TimelineBody>{node.excerpt}</TimelineBody>
                            </TimelineContent>
                            { (node.fields?.timeToRead?.words || 0) > 150 &&
                                <LinkButton to={node.fields?.sitePath!!}>
                                    Read More
                                    <FaArrowRight className='ml-2 h-3 w-3'/>
                                </LinkButton>
                            }

                        </TimelineItem>
                    )}
                </Timeline>
            </div>
        </Layout>
    )
}

export const Head = () => <
    Seo title='Main'
/>

export const pageQuery = graphql`
    query IndexPage {
        site {
            siteMetadata {
                slogan
                description
            }
        }
        projects: allMdx(
            filter: {
                fields: {
                    postType: {
                        eq: "projects"
                    }
                }
            }
            sort: {
                frontmatter: {
                    startDate: DESC
                }
            }
            limit: 3
        ) {
            nodes {
                fields {
                    sitePath
                    timeToRead {
                        words
                    }
                }
                frontmatter {
                    title
                    startDate(formatString: "MMMM, YYYY")
                    endDate(formatString: "MMMM, YYYY")
                    description
                }
            }
        }
        news: allMdx(
            filter: {
                fields: {
                    postType: {
                        eq: "news"
                    }
                }
            }
            sort: {
                frontmatter: {
                    dateTime: DESC
                }
            }
            limit: 6
        ) {
            nodes {
                frontmatter {
                    title
                    dateTime(formatString: "hh:mm A, MMM Do, YYYY")
                }
                excerpt(pruneLength: 150)
                fields {
                    sitePath
                    timeToRead {
                        words
                    }
                }
                
            }
        }
    }`

export default Index


