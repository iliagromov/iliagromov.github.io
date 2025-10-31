import type { GatsbyConfig } from "gatsby";

type TResolvePages = { allSitePage: { nodes: any[] } };
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Ilia Gromov`,
    author: "Ilia Gromov",
    siteUrl: `https://i.gromov.digital/`,
    image: "/static/images/imgAbout.png",
    blog: "",
    twitterUsername: "Ilia Gromov | Fullstack developer",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    // `gatsby-plugin-no-index`,
    {
      resolve: "gatsby-plugin-htaccess",

      // options: {
      //   RewriteBase: "/custom/",
      //   https: true,
      //   www: true,
      //   SymLinksIfOwnerMatch: true,
      //   host: "www.mydomain.com", // if 'www' is set to 'false', be sure to also remove it here!
      //   ErrorDocument: `
      //     ErrorDocument 401 /error_pages/401.html
      //     ErrorDocument 404 /error_pages/404.html
      //     ErrorDocument 500 /error_pages/500.html
      //   `,
      //   redirect: [
      //     "RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]",
      //     {
      //       from: "my-domain.com",
      //       to: "mydomain.com",
      //     },
      //     {
      //       from: "my-other-domain.com",
      //       to: "mydomain.com",
      //     },
      //   ],
      //   custom: `
      //       # This is a custom rule!
      //       # This is a another custom rule!
      //   `,
      // },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => `https://i.gromov.digital/`,
        resolvePages: ({ allSitePage: { nodes: allPages } }: TResolvePages) => {
          return allPages.map((page) => {
            return { ...page };
          });
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          };
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        configFile: "robots-txt.config.js",
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        // The ID of yandex metrika.
        trackingId: 68013103,
        // Enabled a webvisor. The default value is `false`.
        webvisor: true,
        // Enables tracking a hash in URL. The default value is `false`.
        trackHash: true,
        // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
        // and `true` means after the body (faster loading, less hits). The default value is `false`.
        afterBody: true,
        // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
        // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
        defer: false,
      },
    },
    // BUG: есть проблемы с большим объёмом файлов и кешированием.
    // если домен ломается пропадает вся информация с сайта.
    //  пока проще сделать на md фалах
    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     // url:  "https://gromov-studio.site/graphql",
    //     url:  "http://fullstack.io/graphql",
    //     baseUrl: `fullstack.io`,
    //     // protocol: `https`,
    //     verbose: true,
    //     develop: {
    //       hardCacheMediaFiles: true,

    //       // server wp update  5min times
    //       nodeUpdateInterval: 1000,
    //     },
    //     debug: {
    //       graphql: {
    //         writeQueriesToDisk: true,
    //         showQueryVarsOnError: true,
    //         panicOnError: true,
    //       },
    //     },
    //     useACF: true,

    //     excludeFieldNames: ['comments', 'blocksJSON', 'previewBlocks', 'previewBlocksJSON'],
    //     // type: {
    //     //   MediaItem: {
    //     //     exclude: true,
    //     //   },
    //     // },
    //     // html: {
    //     //   useGatsbyImage: true,
    //     //   fallbackImageMaxWidth: 200,
    //     //   createStaticFiles: true,
    //     //   imageMaxWidth: 756,
    //     // },
    //     // schema: {
    //     //   timeout: 3000000,
    //     //   requestConcurrency: 1,
    //     //   previewRequestConcurrency: 1,
    //     //   perPage: 1,
    //     // },
    //     // production: {
    //     //   allow404Images: true,
    //     //   hardCacheMediaFiles: true,
    //     // },
    //   },
    // },

    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,

    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/icons/favicon.svg",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`],
          placeholder: `blurred`,
          quality: 100,
          backgroundColor: `transparent`,
        },
      },
    },

    "gatsby-transformer-sharp",

    "gatsby-plugin-sass",
    // "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: '/images\/.*\.svg/,',
    //       options: {
    //         tag: "symbol",
    //         name: "MyIcon",
    //         props: {
    //           className: "my-class",
    //           title: "example"
    //         },
    //         filters: [value => console.log(value)]
    //       }
    //     },

    //   },
    // },
    // {
    //     resolve: 'gatsby-plugin-svgr-loader',
    //     options: {
    //         rule: {
    //           include: /assets/
    //         }
    //     }
    // },

    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     "icon": "src/assets/images/icon.png"
    //   }
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-page-creator',
    //   options: {
    //     "name": "posts",
    //     "path": `${__dirname}/src/posts`
    //   },
    // }
  ],
};

export default config;
