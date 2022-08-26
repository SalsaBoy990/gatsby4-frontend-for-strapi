import React from "react";
import { Link, graphql } from "gatsby";
import { Card } from "react-bootstrap";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Badge from "react-bootstrap/Badge";

export interface IArticleCard {
  article: IArticle;
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

const ArticleCard = (props: IArticleCard) => {
  const article = props.article;

  return (
    <div className="col d-flex article-item">
      <Card bg="black" text={"white"}>
        <Link to={`/article/${article.slug}`}>
          <div className="article-date">
            <Badge bg="dark">{article.publishDate}</Badge>
          </div>
          <GatsbyImage image={getImage(article.cover?.file.childImageSharp.gatsbyImageData) as IGatsbyImageData} alt={article.cover?.alternativeText} />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.description}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export const query = graphql`
  fragment ArticleCard on StrapiArticle {
    id
    slug
    title
    description
    cover {
      alternativeText
      file {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`;

export default ArticleCard;
