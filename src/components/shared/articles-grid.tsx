import React from "react";
import ArticleCard from "./article-card";
import { Container, Row, Col } from "react-bootstrap";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IArticlesGrid {
  articles: IArticle[];
}

export interface IArticle {
  id: string;
  title: string;
  description: string;
  slug: string;
  cover: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    alternativeText: string;
  };
  publishDate: string;
}

const ArticlesGrid = (props: IArticlesGrid) => {
  return (
    <Container>
      <Row>
        <Col>
          <Row xs={1} md={2} lg={4} xxl={6} className="g-4">
            {props.articles.map((article: IArticle) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlesGrid;
