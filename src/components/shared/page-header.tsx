import React from "react";

import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

export interface IPageHeader {
  pageHeroTitle: string;
  pageHeroDescription: string;
  pageHeroCoverImage: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const PageHeader = ({ data }: any) => {
  const { pageHeroTitle, pageHeroDescription, pageHeroCoverImage } = data;

  return (
    <header className="container-fluid py-4">
      <div className="row">
        <div className="col">
          <h1 className="">{pageHeroTitle}</h1>
          <p className="mt-3">{pageHeroDescription}</p>
          {pageHeroCoverImage && (
            <GatsbyImage
              image={getImage(pageHeroCoverImage?.file.childImageSharp.gatsbyImageData) as IGatsbyImageData}
              alt={pageHeroCoverImage?.alternativeText}
              className="mt-4"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
