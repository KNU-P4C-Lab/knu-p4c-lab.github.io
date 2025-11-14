import React from 'react'
import {PageProps, graphql} from 'gatsby'
import Layout from "./layout";
import Seo from "./seo";
import {H4, A, Span} from "./typography";
import {GatsbyImage, StaticImage} from "gatsby-plugin-image";
import MdxTemplate from "./mdx-template";

const PeopleTemplate = ({data, children}: PageProps<Queries.PeopleTemplateQuery>) => {
    const { people } = data

    return (
        <Layout activeLink='people'>
            <div>
                <div className='flex flex-col md:flex-row md:items-start '>
                    {
                        people?.frontmatter?.picture?.image?.data ? <GatsbyImage
                            alt={people.frontmatter.name || ''}
                            image={people.frontmatter.picture.image.data}
                            className='rounded-lg md:max-w-xs'
                        /> : <StaticImage src='../images/placeholder.jpg' alt={people?.frontmatter?.name || ''}
                                          className='rounded-lg md:max-w-xs'/>
                    }

                    <div className="flex flex-col space-y-2 pt-2 md:pl-4 md:pt-0 font-serif">
                        <Span>{people?.frontmatter?.position || ''}</Span>
                        <H4 className='font-sans'>{people?.frontmatter?.name || ''}</H4>
                        <Span>{people?.frontmatter?.startDate} - {people?.frontmatter?.endDate || 'Present'}</Span>
                        <A href={`mailto:${people?.frontmatter?.email || ''}`}>{people?.frontmatter?.email}</A>
                    </div>
                </div>

                { (people?.fields?.timeToRead?.words || 0) > 0 &&
                    <div>
                        <hr className='my-6'/>
                        <MdxTemplate>
                            {children}
                        </MdxTemplate>
                    </div>
                }
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query PeopleTemplate($id: String) {
        people: mdx(id: { eq: $id }) {
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
                startDate(formatString: "MMMM, YYYY")
                endDate(formatString: "MMMM, YYYY")
            }
            fields {
                timeToRead {
                    words
                }
            }
        }
    }
`

export const Head = ({data}: PageProps<Queries.PeopleTemplateQuery>) => <Seo
    title={`People - ${data.people?.frontmatter?.name}`}/>

export default PeopleTemplate
