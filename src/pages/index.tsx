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
          ... on StrapiComponentSharedImageSectionContainer {
            id
            heading
            description
            customClass
            background {
              file {
                url
              }
            }
            imageBlocks {
              textColor
              linkTo
              id
              heading
              hasOverlay
              hasBackArrow
              boxHeight
              background {
                file {
                  url
                }
              }
              logo {
                file {
                  url
                }
              }
            }
          }
          ... on StrapiComponentStarSimpleSectionContainer {
            id
            customClass
            description
            heading
            simpleBlocks {
              textColor
              id
              heading
              blockSize
              backgroundColor
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
          ... on StrapiComponentSharedTitleBar {
            id
            titleBarTitle
          }
          ... on StrapiComponentStarImageSlider {
            id
            slides {
              image {
                file {
                  url
                }
              }
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
              hasBackArrow
              boxHeight
              logo {
                file {
                  url
                }
              }
              background {
                file {
                  url
                }
              }
            }
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
        }
      }
    }
  `);
  const { pageTitle, blocks } = strapiHome;

  const seo = {
    metaTitle: pageTitle,
    metaDescription: pageTitle,
  };

  return (
    <LayoutBlank>
      <Seo seo={seo} />
      <BlocksRenderer blocks={blocks} />
    </LayoutBlank>
  );
};

export default HomePage;
