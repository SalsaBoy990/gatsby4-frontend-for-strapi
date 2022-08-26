import path from "path";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: `/${process.env.PATH_PREFIX}`,
  // assetPrefix: `https://custom.domain`,
  siteMetadata: {
    title: process.env.PROJECT_NAME,
    siteUrl: process.env.SITE_URL,
    mode: process.env.SITE_MODE,
    titleTemplate: `%s · ${process.env.PROJECT_NAME}`,
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
/*    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },*/
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
          'Page',
        ],
        singleTypes: [
          'Home',
          'Contact',
          'Footer',
          'Global',
          'Navigation',
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
  ],
};
