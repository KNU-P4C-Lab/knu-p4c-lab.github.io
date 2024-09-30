import React from 'react'
import {graphql, Link, PageProps} from "gatsby";
import Seo from "../components/seo";
import {GatsbyImage, IGatsbyImageData, StaticImage} from "gatsby-plugin-image";
import Layout from "../components/layout";
import {A, H3, H6, Span} from "../components/typography";
import {MdHome, MdOutlineAlternateEmail} from "react-icons/md";


const PeopleItem = ({name, position, email, homepage, sitePath, picture}: {name: string, position: string, email: string, homepage?: string, sitePath?: string, picture?: IGatsbyImageData}) => {
    return (
        <div className="p-4 bg-white space-y-4 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div>
                {
                    picture ? <GatsbyImage
                        alt={name}
                        image={picture}
                        className='rounded-lg'
                    /> : <StaticImage src='../images/placeholder.jpg' alt={name} className='rounded-lg'/>
                }
            </div>

            <div>
                <H6>{name}</H6>
                <Span>{position}</Span>
            </div>

            <div className='flex items-start text-gray-500 space-x-3'>
                <a href={`mailto:${email}`}
                   className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                    <MdOutlineAlternateEmail className='h-5 w-5'/>
                </a>
                {
                    homepage ?
                        <a target='_blank'
                           href={homepage}
                           className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                            <MdHome className='h-5 w-5'/>
                        </a> :
                        <Link to={sitePath!!}
                           className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                            <MdHome className='h-5 w-5'/>
                        </Link>
                }
            </div>
        </div>
    )
}

const People = ({data}: PageProps<Queries.PeoplePageQuery>) => {
    const {people} = data
    const peopleActive = people.nodes.filter(node => node.frontmatter?.endDate === undefined || node.frontmatter?.endDate === null)
    const alumni = people.nodes.filter(node => node.frontmatter?.endDate)

    const director = peopleActive.filter(node => node.frontmatter?.type === 'director')
    const postdoc = peopleActive.filter(node => node.frontmatter?.type === 'postdoc')
    const graduate = peopleActive.filter(node => node.frontmatter?.type === 'graduate')
    const undergraduate = peopleActive.filter(node => node.frontmatter?.type === 'undergraduate')

    const faculty = director.concat(postdoc)

    return (
        <Layout activeLink='people'>
            {
                /** Faculty and Postdocs **/
            }
            {
                faculty.length &&
                <div>
                    <H3 className='dark:text-primary-100'>Faculty and Postdocs</H3>
                    <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            faculty.map(p =>
                                <PeopleItem
                                    name={p.frontmatter?.name || ''}
                                    position={p.frontmatter?.position || ''}
                                    email={p.frontmatter?.email || ''}
                                    homepage={p.frontmatter?.homepage || ''}
                                    sitePath={p.fields?.sitePath || ''}
                                    picture={p.frontmatter?.picture?.image?.data}
                                />
                            )
                        }
                    </div>
                </div>
            }
            {
                /** Graduates **/
            }
            {
                graduate.length > 0 &&
                <div>
                    <H3 className='dark:text-primary-100'>Graduate Students</H3>
                    <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            graduate.map(p =>
                                <PeopleItem
                                    name={p.frontmatter?.name || ''}
                                    position={p.frontmatter?.position || ''}
                                    email={p.frontmatter?.email || ''}
                                    homepage={p.frontmatter?.homepage || ''}
                                    sitePath={p.fields?.sitePath || ''}
                                    picture={p.frontmatter?.picture?.image?.data}
                                />
                            )
                        }
                    </div>
                </div>
            }

            {
                /** Undergraduates **/
            }
            {
                undergraduate.length > 0 &&
                <div>
                    <H3 className='dark:text-primary-100'>Undergraduate Students</H3>
                    <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            undergraduate.map(p =>
                                <PeopleItem
                                    name={p.frontmatter?.name || ''}
                                    position={p.frontmatter?.position || ''}
                                    email={p.frontmatter?.email || ''}
                                    homepage={p.frontmatter?.homepage || ''}
                                    sitePath={p.fields?.sitePath || ''}
                                    picture={p.frontmatter?.picture?.image?.data}
                                />
                            )
                        }
                    </div>
                </div>
            }

            {
                alumni.length > 0 &&
                <div>
                    <H3 className='dark:text-primary-100'>Alumni</H3>
                    <ul className='mt-6 text-sm space-y-1 list-disc list-inside dark:text-gray-400'>
                        {
                            alumni.map(p =>
                                <li className='pb-3 space-x-3 text-base'>
                                    {
                                        (p.frontmatter?.homepage || p.fields?.sitePath) ?
                                            <A href={p.frontmatter?.homepage || p.fields?.sitePath || ''}>
                                                {p.frontmatter?.name || ''}
                                            </A> :
                                            <Span>{p.frontmatter?.name || ''}</Span>
                                    }
                                    <Span>{p.frontmatter?.position}</Span>
                                    <Span className='text-gray-400 dark:text-gray-500'>{p.frontmatter?.startDate} - {p.frontmatter?.endDate}</Span>
                                </li>
                            )
                        }
                    </ul>
                </div>
            }
        </Layout>
    )
}

export const Head = () => <Seo title='People'/>

export const pageQuery = graphql`
    query PeoplePage {
        people: allMdx(
            filter: {
                fields: {
                    postType: {
                        eq: "people"
                    }
                }
            }
            sort: {
                frontmatter: {
                    startDate: ASC
                }
            }
        ) {
            nodes {
                fields {
                    sitePath
                }
                frontmatter {
                    name
                    type
                    position
                    homepage
                    email
                    picture {
                        image: childImageSharp {
                            data: gatsbyImageData
                        }
                    }
                    startDate
                    endDate
                }
            }
        }
    }`

export default People
