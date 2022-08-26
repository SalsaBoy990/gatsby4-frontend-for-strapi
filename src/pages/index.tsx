import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import LayoutBlank from "../layout/layout-blank";

import Seo from "../components/global/seo";
import BlocksRenderer from "../components/global/block-renderer";

const HomePage = () => {
  const { strapiHome } = useStaticQuery(graphql`
    query {
      strapiHome {
        pageTitle
        blocks {
          __typename
          ... on StrapiComponentSharedMedia {
            id
            file {
              mime
              file {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          ... on StrapiComponentSharedQuote {
            id
            quoteBody
            quoteTitle
          }
          ... on StrapiComponentSharedRichText {
            id
            richTextBody: body
          }
          ... on StrapiComponentSharedSlider {
            id
            files {
              id
              mime
              file {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          ... on StrapiComponentSharedVideo {
            id
            videoTitle
            videoSource {
              file {
                url
              }
            }
          }
          ... on StrapiComponentGlobalArticleGrid {
            id
            articleGridTitle
          }
          ... on StrapiComponentGlobalContact {
            id
          }
          ... on StrapiComponentGlobalHeader {
            id
          }
          ... on StrapiComponentGlobalFooter {
            id
          }
          ... on StrapiComponentGlobalHero {
            id
            pageTitle
            subTitle
            heroBackground {
              file {
                url
              }
            }
            heroVideo {
              file {
                url
              }
            }
            heroButtonText
            heroButtonLink
          }
          ... on StrapiComponentSharedTitleBar {
            id
            titleBarTitle
            titleBarImage {
              file {
                url
              }
            }
            titleBarDescription
          }
          ... on StrapiComponentStarImageSlider {
            id
            slides {
              title
              image {
                file {
                  url
                }
              }
            }
          }
          ... on StrapiComponentStarServiceSlider {
            services {
              icon
              serviceName
              serviceDescription
            }
          }
          ... on StrapiComponentSharedBreadcrumbBar {
            id
            pageName
            parentPageName
            previousPath
          }
          ... on StrapiComponentSharedHighlightedSlider {
            id
            highlightedImageBlocks {
              textColor
              linkTo
              id
              heading
              hasOverlay
              background {
                file {
                  url
                }
              }
            }
            highlightsTitle
            highlightsDescription
          }
          ... on StrapiComponentSharedPageHeader {
            pageHeroTitle
            pageHeroDescription
            pageHeroCoverImage {
              file {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          ... on StrapiComponentStarExperience {
            experienceTitle
            experienceDescription
            experienceItems {
              id
              itemTitle
              percentage
            }
            slides {
              title
              linkTo
              image {
                file {
                  url
                }
              }
              id
            }
          }
        }
      }
    }
  `);
  const { pageTitle, blocks } = strapiHome;

  const seo = {
    metaTitle: pageTitle,
  };

  return (
    <LayoutBlank>
      <Seo seo={seo} />
      <BlocksRenderer blocks={blocks} />
    </LayoutBlank>
  );
};

export default HomePage;
