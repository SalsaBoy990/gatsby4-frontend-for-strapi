import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export interface IBlockRichText {
  data: {
    richTextBody: any;
  };
}

const BlockRichText = ({ data }: IBlockRichText) => {
  return (
    <Container className="pe-0 ps-0">
      <Row>
        <Col>
          <div className="pb-4">
            <ReactMarkdown children={data.richTextBody}></ReactMarkdown>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlockRichText;
