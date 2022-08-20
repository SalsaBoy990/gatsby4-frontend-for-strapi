import React from "react";
import ArticleCard from "../shared/article-card";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { IArticle } from "../shared/articles-grid";

const ArticlesGridStatic = ({ data }: any) => {
  const { allStrapiArticle } = useStaticQuery(graphql`
    query ArticlesGridStaticQuery {
      allStrapiArticle {
        nodes {
          id
          title
          description
          slug
          cover {
            id
            alternativeText
            file {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.77)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Container className="pt-4 pb-5">
      <Row>
        <Col>
          {data.articleGridTitle && (
            <Row>
              <h3 className="h2 pt-4 pb-3 text-center">{data.articleGridTitle}</h3>
            </Row>
          )}
          <Row xs={1} md={2} lg={4} xxl={6} className="g-4">
            {allStrapiArticle.nodes.map((article: IArticle) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlesGridStatic;
