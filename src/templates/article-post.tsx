import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import LayoutBlog from "../layout/layout-blog";

import Seo from "../components/global/seo";
import BlocksRenderer from "../components/global/block-renderer";
import BreadcrumbBar from "../components/global/breadcrumb-bar";

const ArticlePost = ({ data }: any) => {
  const article = data.strapiArticle;
  console.log(article);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.cover,
  };

  const breadcrumbData = {
    pageName: article.title,
    parentPageName: "Blog",
    previousPath: "blog",
  };

  return (
    <LayoutBlog as="article">
      <Seo seo={seo} />
      <header className="container py-4">
        <BreadcrumbBar data={breadcrumbData}></BreadcrumbBar>
        <h1 className="">{article.title}</h1>
        <p className="mt-4">{article.description}</p>
        <GatsbyImage
          image={getImage(article?.cover?.file.childImageSharp.gatsbyImageData) as IGatsbyImageData}
          alt={article?.cover?.alternativeText}
          className="mt-6"
        />
      </header>

      <div className="mt-8 mb-0">
        <BlocksRenderer blocks={article.blocks || []} />
      </div>
    </LayoutBlog>
  );
};

export const pageQuery = graphql`
  query ($slug: String) {
    strapiArticle(slug: { eq: $slug }) {
      id
      slug
      title
      description
      cover {
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

export default ArticlePost;
