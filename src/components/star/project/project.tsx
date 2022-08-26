import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import ImageBlock from "../block/image-block";
import BlocksRenderer from "../../global/block-renderer";

export interface IProject {
  id?: string;
  index: number;
  title: string;
  groupTitle: string;
  description: string;
  coverImage: {
    file: {
      url: string;
    };
  };
  blocks: any;
}

const Project = (props: any) => {
  const { title, description, coverImage, blocks, groupTitle, index } = props;

    console.log(props);

  return (
    <div>
      <Container fluid className="project-container" style={{ marginTop: index === 0 ? "60px" : "-68px" }}>
        <Row>
          <Col md={12} lg={12} className="px-0">
            <ImageBlock
              data={{
                heading: groupTitle,
                hasBackArrow: true,
                hasOverlay: true,
                textColor: "white",
                background: coverImage,
                boxHeight: "'400px'",
              }}></ImageBlock>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={12} className="">
            <div className="content">
              <div className="decoration">
                <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="100" height="6" fill="#FFE48F" />
                  <circle cx="50" cy="10" r="10" fill="#FFE48F" />
                </svg>
              </div>
              <h1 className="serif">{title}</h1>
              <div className="description">{<ReactMarkdown children={description} />}</div>
              <BlocksRenderer blocks={blocks || []}></BlocksRenderer>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
