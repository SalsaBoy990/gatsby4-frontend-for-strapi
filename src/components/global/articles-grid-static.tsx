import React from "react";
import ArticleCard from "../shared/article-card";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";

import { IArticle } from "../shared/articles-grid";

const ArticlesGridStatic = ({ data }: any) => {
  const { allStrapiArticle } = useStaticQuery(graphql`
    query ArticlesGridStaticQuery {
      allStrapiArticle(limit: 4, sort: { fields: publishDate, order: DESC }) {
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
          publishDate
        }
      }
    }
  `);

  return (
    <div className="articles-grid">
      <Row>
        <Col>
          {data.articleGridTitle && (
            <Row>
              <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="100" height="6" fill="#FFE48F" />
                <circle cx="50" cy="10" r="10" fill="#FFE48F" />
              </svg>

              <h3 className="h2 pb-3 text-center serif">{data.articleGridTitle}</h3>
            </Row>
          )}
          <Row xs={1} md={2} lg={4} xxl={4} className="g-4">
            {allStrapiArticle.nodes.map((article: IArticle) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ArticlesGridStatic;
