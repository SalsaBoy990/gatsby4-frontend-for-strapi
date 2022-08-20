import path from "path";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: `/${process.env.PATH_PREFIX}`,
  // assetPrefix: `https://work.drb.services`,
  siteMetadata: {
    title: process.env.PROJECT_NAME,
    siteUrl: process.env.SITE_URL,
    mode: process.env.SITE_MODE,
    titleTemplate: `%s · ${process.env.PROJECT_NAME}`,
    description: "description comes here...",
    seoImage: "/urben_design_group.png",
    image: "/favicon.png", // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true, //default is false
          },
        },
      },
    },
    "gatsby-plugin-postcss",
    /*
    // if you don't want to have big sourcemaps for JS files
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },*/
    // add folders here to source file system to be able to query assets / files in graphql
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`src/images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`src/data`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Convert imgage src paths in markdown/frontmatter to be relative to their node’s parent directory.
          // `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
            },
          },
          {
            resolve: "gatsby-remark-normalize-paths",
            options: {
              pathFields: ["coin_image"],
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.PROJECT_NAME,
        short_name: process.env.PROJECT_SHORT_NAME,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FFC920`,
        display: `standalone`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0,
        duration: 600,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        collectionTypes: [
          'Article',
          'Author',
          'Category',
          'Project group',
          'Project',
          'Page'
        ],
        singleTypes: [
          'Home',
          'Contact',
          'Footer',
          'Global',
          'Navigation',
          'Partner',
          'Reference slider'
        ],
        // Extract images from markdown / richtext fields.

        // Only include specific locales.
        locale: ['all'], // defaults to 'all'
        // Include drafts in build.
        preview: false, // defaults to false
        // Use application token.
        token: process.env.STRAPI_TOKEN,
        // Add additional headers.
        headers: {},
        // Enable/disable cache.
        cache: false,
      },
    },
    /*{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "article",
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
              populate: {
                cover: "*",
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "author",
          },
          {
            singularName: "box",
            queryParams: {
              populate: {
                background: "*",
                logo: "*",
                boxGroup: "*",
              },
            },
          },
          {
            singularName: "box-group",
            queryParams: {
              populate: {
                background: "*",
              },
            },
          },
          {
            singularName: "category",
          },
          {
            singularName: "project",
            queryParams: {
              populate: {
                topLeftImage: "*",
                topRightImage: "*",
                sideTopImage: "*",
                sideBottomImage: "*",
                logo: "*",
                projectGroup: "*",
              },
            },
          },
          {
            singularName: "project-group",
            queryParams: {
              populate: {
                background: "*",
              },
            },
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "contact",
            queryParams: {
              populate: {
                mapViews: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "footer",
            queryParams: {
              populate: {
                logo: "*",
                flag: "*",
                developer: "*",
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                defaultSeo: {
                  populate: "*",
                },
                video: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "navigation",
            queryParams: {
              populate: {
                navigationItems: {
                  populate: '*'
                },
                logo: '*'
              },
            },
          },
          {
            singularName: "partner",
            queryParams: {
              populate: {
                slides: {
                  populate: {
                    image: '*',
                    logo: '*'
                  }
                },
              },
            },
          },
          {
            singularName: "reference-slider",
            queryParams: {
              populate: {
                imageBlocks: {
                  populate: {
                    background: '*',
                    logo: '*'
                  }
                },
                titleBar: {
                  populate: '*'
                }
              },
            },
          },
        ],
      },
    },*/
  ],
};
