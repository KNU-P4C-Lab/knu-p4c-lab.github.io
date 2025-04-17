import React, {useState} from 'react'
import {graphql, PageProps} from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";
import {Modal, ModalBody} from "flowbite-react";
import {H6, Span, P, TextLink, A} from "../components/typography";
import {FaArrowRight} from "react-icons/fa6";
import LinkButton from "../components/link-button";

const PUB_TYPES = ['all', 'journal', 'conference', 'poster', 'patent']

const PublicationItem = ({
                             type,
                             title,
                             date,
                             authors,
                             words,
                             sitePath,
                             publisher,
                             abbrev,
                             volume,
                             issue,
                             pages,
                             doi,
                             year
                         }: {
    type: string,
    title: string,
    date: string,
    words: number,
    sitePath: string,
    authors?: readonly (string | null)[] | null
    publisher?: string | null,
    abbrev?: string | null,
    volume?: number | string | null,
    issue?: number | string | null,
    pages?: string | null,
    doi?: string | null,
    year?: string | number | null

}) => {
    const pubAbbrev = publisher && abbrev ? `${publisher} (${abbrev})` : publisher
    const volIssue = volume && issue ? `${volume} (${issue})` : volume
    const pubLine = [pubAbbrev, volIssue, pages].filter(p => p !== undefined && p !== null).join(', ')
    const [openModal, setOpenModal] = useState(false)

    const bibKey = `${authors ? (authors[0]?.replaceAll(/\s/g, '') || '') : ''}${year || ''}${title.split(' ')[0]}`.toLowerCase().replaceAll(
        /[^\w\s]/g, ''
    )
    let bibType = ''
    const bibItems: Record<string, any> = {
        author: authors?.join(' AND '),
        title: title,
        volume: volume,
        number: issue,
        series: abbrev,
        pages: pages,
        doi: doi,
        year: year,
    }
    switch (type) {
        case 'journal':
            bibItems['journal'] = publisher
            bibType = 'article'
            break
        case 'conference':
        case 'poster':
            bibItems['booktitle'] = publisher
            bibType = 'inproceedings'
            break
        case 'book':
            bibType = 'book'
            break
        case 'patent':
        case 'misc':
            bibItems['note'] = publisher
            bibType = 'misc'
            break
    }
    const bibItemsString = Object.entries(bibItems).filter(
        (entry) => entry[1] !== null && entry[1] !== undefined
    ).map(
        (entry) => `\t${entry[0]} = \{${entry[1]}\}`
    ).join(',\n')

    const bibTex = `@${bibType}\{${bibKey},\n${bibItemsString}\n\}`

    return (
        <>
            <Modal popup show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header/>
                <ModalBody>
                    <P className='whitespace-pre-wrap text-sm font-mono text-gray-900'>{bibTex}</P>
                </ModalBody>
            </Modal>

            <div className="flex flex-col items-start text-sm font-serif space-y-2">
                <Span className='font-serif leading-none text-gray-400 dark:text-gray-500'>{date}</Span>
                <H6 className='capitalize items-center font-sans'>
                    {title}
                    <button onClick={() => setOpenModal(true)}><TextLink className='text-sm ml-1'>[BIB]</TextLink>
                    </button>
                </H6>
                {authors &&
                    <Span className='leading-1'>{authors.join(', ')} </Span>
                }
                {
                    publisher &&
                    <Span className='italic'>
                        {pubLine}
                    </Span>
                }
                {doi &&
                    <A href={`https://doi.org/${doi}`} className='font-serif'>DOI: {doi}</A>
                }
                {words > 0 &&
                    <LinkButton to={sitePath}>
                        Read More
                        <FaArrowRight className='ml-2 h-3 w-3'/>
                    </LinkButton>
                }
            </div>
        </>
    )
}

const Publications = ({data}: PageProps<Queries.PublicationPageQuery>) => {
    const {publications} = data
    const [tab, setTab] = useState('all')

    return (
        <Layout activeLink='publications'>
            <div>
                <div className='sm:hidden'>
                    <select className='capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            onChange={(e) => setTab(e.target.value)}
                            defaultValue={'all'}
                            value={tab}
                    >
                        {
                            PUB_TYPES.map(p => <option className='capitalize'>{p}</option>)
                        }
                    </select>
                </div>
                <ul className="text-base font-medium text-center text-gray-500 hidden sm:flex border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    {
                        PUB_TYPES.map(p =>
                            <li className="w-full">
                                <button onClick={(e) => setTab(e.currentTarget.id)}
                                        id={p}
                                        className={
                                            tab === p ?
                                                'capitalize inline-block w-full p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-primary-100 dark:border-primary-100' :
                                                'capitalize inline-block w-full p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                        }
                                >{p}</button>
                            </li>
                        )
                    }
                </ul>
                <ul className='mt-12 space-y-8'>
                    {
                        publications.nodes.filter(node =>
                            tab === 'all' ? true : node.frontmatter?.type === tab
                        ).map(node =>
                            <li>
                                <PublicationItem
                                    type={node.frontmatter?.type || 'misc'}
                                    title={node.frontmatter?.title || ''}
                                    date={node.frontmatter?.date || ''}
                                    authors={node.frontmatter?.authors}
                                    words={node.fields?.timeToRead?.words || 0}
                                    sitePath={node.fields?.sitePath || ''}
                                    publisher={node.frontmatter?.publisher}
                                    abbrev={node.frontmatter?.abbrev}
                                    volume={node.frontmatter?.volume}
                                    issue={node.frontmatter?.issue}
                                    pages={node.frontmatter?.pages}
                                    doi={node.frontmatter?.doi}
                                    year={node.frontmatter?.year}
                                />
                            </li>
                        )
                    }
                </ul>
            </div>

        </Layout>
    )

}

export const Head = () => <Seo title='Publications'/>

export const pageQuery = graphql`
    query PublicationPage {
        publications: allMdx(
            filter: {
                fields: {
                    postType: {
                        eq: "publications"
                    }
                }
            }
            sort: {
                frontmatter: {
                    date: DESC
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
                    title
                    date(formatString: "MMMM Do, YYYY")
                    type
                    authors
                    publisher
                    abbrev
                    volume
                    issue
                    pages
                    doi
                    year: date(formatString: "YYYY")
                }
            }
        }
    }
`

export default Publications