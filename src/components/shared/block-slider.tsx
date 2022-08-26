import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";
import { IBlockMedia } from "./block-media";

export interface IBlockSlider {
  data: {
    files: IBlockMedia[];
  };
}

const BlockSlider = ({ data }: IBlockSlider) => {

  console.log(data);
  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <Slider dots={true} infinite={true} speed={300} slidesToShow={1} slidesToScroll={1} arrows={true} swipe={true}>
            {data.files.map((file: any) => (
              <GatsbyImage key={file.id} image={getImage(file.file.childImageSharp.gatsbyImageData) as IGatsbyImageData} alt={file.alternativeText} />
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default BlockSlider;
