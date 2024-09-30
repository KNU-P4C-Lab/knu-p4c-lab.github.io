import { dirname } from "path"
import { fileURLToPath } from "url"
import remarkGfm from 'remark-gfm'
import remarkExternalLinks from "remark-external-links"
import remarkMath from "remark-math"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import remarkEmoji from 'remark-emoji'
import remarkFrontmatter from "remark-frontmatter";

const __dirname = dirname(fileURLToPath(import.meta.url))

const SITE_METADATA = {
    title: 'P4C Lab',
    startUrl: '/',
    siteUrl: `https://knu-p4c-lab.github.io`,
    slogan: 'Better Behavior with Computing',
    fullTitle: 'Pervasive, Persuasive, Personalized, Positive Computing (P4C) Lab',
    description: `Pervasive, Persuasive, Personalized, Positive Computing Laboratory (P4C Lab)
         is a human-computer interaction research group at the Kangwon National University, Republic of Korea. 
         Our research aims to lead everyone to stay in good shape and have healthy mental 
         by designing enjoyable and interactive services that leverage mobile/ubiquitous 
         technologies, machine learning/artificial intelligence, and behavioral psychology/economics.`,
    keywords: 'pervasive computing, persuasive computing, personalization, positive computing, human-computer interaction, human-ai interaction',
    address: [
        'Kangwon National University (Chuncheon Campus)',
        'College of Engineering #6, Room 417',
        '1 Gangwondaehakgil, Chuncheon-si, Gangwon-do (24341)',
        'Republic of Korea'
    ],
    email: 'woohyeok.choi@kangwon.ac.kr',
    github: 'https://github.com/KNU-P4C-Lab',
    researchGate: 'https://www.researchgate.net/profile/Woohyeok-Choi-2',
    googleScholar: 'https://scholar.google.com/citations?user=PaIwvKYAAAAJ',
    icon: 'src/images/p4c-logo.png',
    display: `standalone`,
    calendar: 'https://calendar.google.com/calendar/embed?height=600&mode=WEEK&wkst=1&bgcolor=%239CA3AF&ctz=Asia%2FSeoul&showCalendars=0&showPrint=0&src=NTE4MmExOGI1ZmQ4NzAwY2Q0NGZlNzFiNDlmMGE4Yzg4NWI5NDdmYmIwYTQ2Zjc3ODY1N2UzZGQ0YjZkNDNhMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NDU2MGY2NTQ2NGU2N2MxZjQyNWVjMTczMDY3YTBiNWE0YTY4MjU0Yjg0MTU2OWM1Y2U1MmQwMGVhNWNmNDAwOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=cW85amRwb2RnMnJ1aWQ2MjAzYmVzNjR1am9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%233F51B5&color=%23009688&color=%23D50000'
}

const config = {
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    siteMetadata : {...SITE_METADATA},
    graphqlTypegen: true,
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": `${__dirname}/src/images/`
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": `${__dirname}/src/pages/`
            },
            __key: "pages"
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "posts",
                "path": `${__dirname}/posts/`
            },
            __key: "posts"
        },
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Ubuntu Mono', 'Inter', 'Source Serif 4', 'Noto Sans', 'Noto Sans KR', 'Noto Serif', 'Noto Serif KR']
                }
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: SITE_METADATA.title,
                description: SITE_METADATA.description,
                start_url: SITE_METADATA.startUrl,
                icon: SITE_METADATA.icon,
                display: SITE_METADATA.display
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [
                    '.mdx', '.md'
                ],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 590,
                        },
                    },
                    `gatsby-remark-copy-linked-files`,
                ],
                mdxOptions: {
                    remarkPlugins: [
                        remarkGfm,
                        remarkMath,
                        remarkEmoji,
                        [remarkExternalLinks, {target: '_blank'}],
                        remarkFrontmatter
                    ],
                    rehypePlugins: [
                        rehypeSlug,
                        rehypeHighlight,
                        rehypeKatex,
                        rehypeAutolinkHeadings,
                    ]
                }
            },
        },
    ]
};
export default config;
