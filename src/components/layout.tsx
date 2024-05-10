import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";
import {
    Flowbite, DarkThemeToggle, Banner
} from "flowbite-react";
import {FaGithub, FaCalendarDays, FaBars} from "react-icons/fa6";
import {MdAnnouncement, MdOutlineAlternateEmail} from "react-icons/md";
import {SiResearchgate, SiGooglescholar} from "react-icons/si";
import {StaticImage} from "gatsby-plugin-image";
import {H4, H6, InnerLink, P, Span,} from "./typography";
import {initFlowbite } from 'flowbite'
import {useEffect} from "react";
import {HiX} from "react-icons/hi";

const MENU = {
    'People': '/people',
    'Projects': '/projects',
    'Publications': '/publications',
    'Lectures': '/lectures',
    'News': '/news',
}

const Layout = ({activeLink, children}: { activeLink?: string, children: React.ReactNode }) => {
    useEffect(() => {
        initFlowbite();
    }, []);

    const {mdx, site} = useStaticQuery(graphql`
        query {
            mdx(
                fields: {
                    postType: {
                        eq: "notice"
                    }
                }
            ) {
                frontmatter {
                    title
                    activate
                }
                fields {
                    sitePath
                }
            }
            site {
                siteMetadata {
                    title
                    address
                    email
                    github
                    researchGate
                    googleScholar
                }
            }
        }
    `)

    return (
        <Flowbite>
            <div className='bg-white dark:bg-gray-900'>
                <nav
                    className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
                >
                    {/** Notice **/}
                    {mdx.frontmatter.activate &&
                        <Banner>
                            <div
                                className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-2 dark:border-gray-600 dark:bg-gray-700">
                                <div className="mx-auto flex items-center">
                                    <P className="flex items-center text-sm">
                                        <MdAnnouncement className="mr-4 h-4 w-4"/>
                                        <Span>{mdx.frontmatter.title}&nbsp; </Span>
                                        <InnerLink href={mdx.fields.sitePath}>Read More</InnerLink>
                                    </P>
                                </div>
                                <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
                                    <HiX className="h-4 w-4"/>
                                </Banner.CollapseButton>
                            </div>
                        </Banner>
                    }
                    {/** Menu **/}
                    <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link to='/'>
                            <div className="flex items-center space-x-3">
                                <StaticImage src={'../images/p4c-logo.png'} alt={'logo'} className='h-10 w-10'/>
                            </div>
                        </Link>
                        <div className="flex md:order-2 space-x-3">
                            <button type="button"
                                    className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="navbar"
                                    data-collapse-toggle="navbar"
                                    aria-expanded="false"
                            >
                                <FaBars className='w-6 h-6' aria-hidden='true'/>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar" aria-label='navbar'>
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                {
                                    Object.entries(MENU).map(entry =>
                                        <li>
                                            <Link className={
                                                entry[0].toLowerCase() == (activeLink?.toLowerCase() || 'home') ?
                                                'block py-2 px-3 text-white bg-cyan-600 dark:bg-primary-100 dark:text-gray-900 rounded md:dark:bg-transparent md:bg-transparent md:text-cyan-600 md:p-0 md:dark:text-primary-100' :
                                                'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-600 md:p-0 md:dark:hover:text-primary-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                            }
                                               to={entry[1]}
                                            >{entry[0]}</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </nav>

                {/** Body **/}
                <div className='max-w-4xl mx-auto px-6 pb-24 pt-48 flex flex-col space-y-24'>
                    {children}
                </div>

                {/** Footer **/}
                <footer className='bg-gray-100 dark:bg-gray-800'>
                    <div className='max-w-screen-xl mx-auto px-6 py-6'>
                        <div className='md:flex md:justify-between space-y-6 md:space-y-0'>
                            <div>
                                <H6 className='text-sm pb-2'>OUR BUNKER</H6>
                                <P className='text-sm whitespace-pre-wrap tracking-tight'>
                                    {site.siteMetadata.address.join('\n')}
                                </P>
                            </div>
                            <a href='https://cse.kangwon.ac.kr/' target='_blank'
                               className='flex flex-col -space-y-0.5'>
                                <div className='flex items-end'>
                                    <StaticImage className='w-24' src='../images/knu-logo.png'
                                                 alt={'Kangwon National University'}/>
                                    <H4 className='pl-2'>컴퓨터공학과</H4>
                                </div>
                                <Span className='text-black text-xs pl-3.5 uppercase tracking-tighter'>Dept.
                                    of
                                    Computer
                                    Science and Engineering</Span>
                            </a>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <Span className='text-sm'>© 2023 {site.siteMetadata.title}</Span>
                            <div className="flex space-x-6 sm:justify-center">
                                <a href={`mailto:${site.siteMetadata.email}`}
                                   className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                                    <MdOutlineAlternateEmail className='h-5 w-5'/>
                                </a>
                                <a href={`${site.siteMetadata.github}`} target='_blank'
                                   className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                                    <FaGithub className='h-5 w-5'/>
                                </a>
                                <a href={`${site.siteMetadata.researchGate}`} target='_blank'
                                   className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                                    <SiResearchgate className='h-5 w-5'/>
                                </a>
                                <a href={`${site.siteMetadata.googleScholar}`} target='_blank'
                                   className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                                    <SiGooglescholar className='h-5 w-5'/>
                                </a>
                                <Link to='/calendar'
                                   className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                                    <FaCalendarDays className='h-5 w-5'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Flowbite>
    )
}

export default Layout
