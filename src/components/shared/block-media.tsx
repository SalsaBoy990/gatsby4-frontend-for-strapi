import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

export interface IBlockMedia {
  data: {
    file: {
      id: number;
      file: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
      alternativeText: string;
      mime: string;
    };
  };
}

const BlockMedia = ({ data }: IBlockMedia) => {
  const isVideo = data.file.mime.startsWith("video");

  return (
    <div className="pb-5">
      {isVideo ? (
        <p>TODO video</p>
      ) : (
        <GatsbyImage image={getImage(data.file.file.childImageSharp.gatsbyImageData) as IGatsbyImageData} alt={data.file.alternativeText} />
      )}
    </div>
  );
};

export default BlockMedia;
