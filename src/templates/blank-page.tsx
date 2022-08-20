import React from "react";
import { graphql } from "gatsby";

import LayoutBlank from "../layout/layout-blank";

import Seo from "../components/global/seo";
import BlocksRenderer from "../components/global/block-renderer";

const BlankPage = ({ data }: any) => {
  const page = data.strapiPage;

  const seo = {
    metaTitle: page.pageTitle,
    metaDescription: page.pageDescription,
    shareImage: page.coverImage,
  };

  return (
    <LayoutBlank>
      <Seo seo={seo} />
      <div className="mt-0 mb-0">
        <BlocksRenderer blocks={page.blocks || []} />
      </div>
    </LayoutBlank>
  );
};

export const pageQuery = graphql`
  query ($slug: String) {
    strapiPage(slug: { eq: $slug }) {
      id
      slug
      pageTitle
      pageDescription
      coverImage {
        alternativeText
        file {
          url
          childImageSharp {
            gatsbyImageData
          }
        }
      }
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
`;

export default BlankPage;
