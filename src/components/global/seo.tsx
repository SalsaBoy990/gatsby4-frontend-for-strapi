import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export interface ISeo {
  siteName: string;
  favicon: {
    file: {
      publicURL: string;
    };
  };
  defaultSeo: IDefaultSeo;
}

export interface IDefaultSeo {
  metaTitle: string;
  metaDescription: string;
  article?: boolean;
  shareImage: {
    file: {
      publicURL: string;
    };
  };
}

const Seo = ({ seo = {} }) => {
  const data = useStaticQuery(graphql`
    query {
      strapiGlobal {
        siteName
        siteDescription
        favicon {
          file {
            publicURL
          }
        }
        defaultSeo {
          metaTitle
          metaDescription
          shareImage {
            file {
              publicURL
            }
          }
        }
      }
    }
  `);

  const strapiGlobal: ISeo = data.strapiGlobal;

  const { siteName, defaultSeo, favicon } = strapiGlobal;

  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo, ...seo };

  // Add site name to title
  fullSeo.metaTitle = `${fullSeo.metaTitle} · ${siteName}`;

  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.metaTitle,
        }
      );
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        },
        {
          name: "twitter:description",
          content: fullSeo.metaDescription,
        }
      );
    }
    if (fullSeo.shareImage) {
      const imageUrl = fullSeo.shareImage.file.publicURL;
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        }
      );
    }
    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      });
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" });

    return tags;
  };

  const metaTags = getMetaTags();

  return (
    <Helmet
      title={fullSeo.metaTitle}
      link={[
        {
          rel: "icon",
          href: favicon.file.publicURL,
        },
      ]}
      meta={metaTags}
    />
  );
};

export default Seo;

{
  /*
  seo.url && <meta property="og:url" content={seo.url} />;
*/
}
