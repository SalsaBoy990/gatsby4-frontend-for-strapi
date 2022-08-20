import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export interface ITitleBar {
  titleBarTitle: string;
}

const TitleBar = ({ data }: any) => {
  return (
    <section>
      <Container fluid className="title-bar">
        <Row>
          <Col md={12} lg={6} className="title-left">
            <h2>{data.titleBarTitle}</h2>
          </Col>
          <Col md={12} lg={6} className="decor-right"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default TitleBar;
