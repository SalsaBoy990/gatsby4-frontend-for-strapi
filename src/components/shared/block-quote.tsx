import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export interface IBlockquote {
  data: {
    quoteBody: string;
    quoteTitle: string;
  };
}

const BlockQuote = (props: IBlockquote) => {
  return (
    <div className="container pb-4 pe-0 ps-0">
      <Container>
        <Row>
          <Col>
            <blockquote>
              <p>{props.data.quoteBody}</p>
              <cite>{props.data.quoteTitle}</cite>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlockQuote;
