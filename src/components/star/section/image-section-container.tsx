import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ImageBlock, { IImageBlock } from "../block/image-block";
import BlocksContainer from "../block/blocks-container";

export interface IImageSectionContainer {
  data: {
    heading: string;
    description: string;
    background?: {
      file: {
        url: string;
      };
    };
    customClass?: string;
    imageBlocks: IImageBlock[];
  };
}

const ImageSectionContainer = (props: IImageSectionContainer) => {
  const { heading, description, background, customClass, imageBlocks } = props.data;
  const containerClass = (): string => (customClass ? (customClass as string) : "image-bg-container");

  return (
    <Container fluid className={containerClass()}>
      <Row>
        <Col md={12} lg={6} className="left-block pl-0">
          <h2>{heading}</h2>
          <div>
            <ReactMarkdown children={description}></ReactMarkdown>
          </div>
        </Col>
        <Col md={12} lg={6} className="right-block p-0">
          <BlocksContainer>{imageBlocks && imageBlocks.map((item: IImageBlock) => <ImageBlock key={item.id} data={item}></ImageBlock>)}</BlocksContainer>
        </Col>
      </Row>
      {background && (
        <div className="img-overlay">
          <Image fluid src={background.file.url} className="bg-image"></Image>
        </div>
      )}
    </Container>
  );
};

export default ImageSectionContainer;
