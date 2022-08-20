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
    <div className="py-6">
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
