import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import ImageBlock from "../block/image-block";
import BlocksContainer from "../block/blocks-container";

export interface IProject {
  id?: string;
  title: string;
  description: string;
  navTitle: string;
  seoDescription: string;
  topLeftImage: {
    file: {
      url: string;
    };
  };
  topRightImage: {
    file: {
      url: string;
    };
  };
  sideTopImage: {
    file: {
      url: string;
    };
  };
  sideBottomImage: {
    file: {
      url: string;
    };
  };
  logo?: {
    file: {
      url: string;
    };
  };
}

const Project = (props: any) => {
  const { title, description, topLeftImage, topRightImage, logo, sideTopImage, sideBottomImage, navTitle } = props;

  const boxHeight: string = "650px";
  const boxHeightRectangle: string = "360px";
  return (
    <div>
      <Container fluid className="project-container">
        <Row>
          <Col md={12} lg={6} className="px-0">
            <ImageBlock
              data={{
                heading: navTitle,
                hasBackArrow: true,
                hasOverlay: true,
                textColor: "white",
                background: topLeftImage,
                boxHeight: boxHeight,
              }}></ImageBlock>
          </Col>
          <Col md={12} lg={6} className="px-0">
            <ImageBlock
              data={{
                background: topRightImage,
                boxHeight: boxHeight,
                hasOverlay: false,
                logo: logo,
              }}></ImageBlock>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={2}>
            <ul className="no-list-style pt-4">
              <li>
                <Link to="/energy">ENERGIA</Link>
              </li>
              <li>
                <Link to="/smart-city">VÁROSFEJLESZTÉS</Link>
              </li>
              <li>
                <Link to="/smart-city">DIGITÁLIS TERMÉKEK</Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={12} lg={4} className="left-block pl-0">
            <div className="content">
              <h2>{title}</h2>
              <div>{<ReactMarkdown children={description} />}</div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6} className="right-block p-0">
            <BlocksContainer>
              <ImageBlock
                data={{
                  background: sideTopImage,
                  textColor: "white",
                  boxHeight: boxHeightRectangle,
                  hasOverlay: false,
                }}></ImageBlock>
              <ImageBlock
                data={{
                  background: sideBottomImage,
                  textColor: "white",
                  boxHeight: boxHeightRectangle,
                  hasOverlay: false,
                }}></ImageBlock>
            </BlocksContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
