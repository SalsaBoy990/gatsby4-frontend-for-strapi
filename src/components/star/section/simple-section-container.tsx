import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SimpleBlock, { ISimpleBlock } from "../block/simple-block";

export interface ISimpleSectionContainer {
  data: {
    heading: string;
    description: string;
    background?: {
      file: {
        url: string;
      };
    };
    customClass?: string;
    simpleBlocks: ISimpleBlock[];
  };
}

const SimpleSectionContainer = (props: ISimpleSectionContainer) => {
  const { heading, description, background, customClass, simpleBlocks } = props.data;
  const containerClass = (): string => (customClass ? (customClass as string) : "image-bg-container");

  const firstSimpleBlock = simpleBlocks[0];

  return (
    <Container fluid className={containerClass()}>
      <Row>
        <Col md={12} lg={6} className="left-block pl-0">
          <h2>{heading}</h2>
          <div>
            <ReactMarkdown children={description}></ReactMarkdown>
          </div>
        </Col>
        <Col md={12} lg={6} className="right-block p-0" style={{ marginBottom: "0px" }} >
          {firstSimpleBlock && <SimpleBlock key={firstSimpleBlock.id} data={firstSimpleBlock}></SimpleBlock>}
        </Col>
      </Row>
      <Row>
        <div style={{ display: "flex" }} className="px-0">
          {simpleBlocks && simpleBlocks.map((item: ISimpleBlock, index: number) => (index ? <SimpleBlock key={item.id} data={item}></SimpleBlock> : null))}
        </div>
      </Row>
      {background && (
        <div className="img-overlay">
          <Image fluid src={background.file.url} className="bg-image"></Image>
        </div>
      )}
    </Container>
  );
};

export default SimpleSectionContainer;
