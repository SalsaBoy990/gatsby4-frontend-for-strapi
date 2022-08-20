import React from "react";
import { Link, graphql } from "gatsby";
import { Card } from "react-bootstrap";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

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
}

const ArticleCard = (props: IArticleCard) => {
  const article = props.article;

  return (
    <div className="col d-flex">
      <Card bg="dark" text={"light"}>
        <Link to={`/article/${article.slug}`}>
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
