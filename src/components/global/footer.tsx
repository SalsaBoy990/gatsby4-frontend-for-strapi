import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import backToTop from "../../images/svg/back-to-top.svg";

const Footer = () => {
  const handleScrollToTop = (): void => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  const { strapiFooter } = useStaticQuery(graphql`
    query FooterQuery {
      strapiFooter: strapiFooter {
        title
        description
        logo {
          file {
            publicURL
          }
        }
      }
    }
  `);

  const title: string = strapiFooter.title || "URBEN DESIGN GROUP KFT";
  const description: string = strapiFooter.description || "Description comes here";
  const logo: string = strapiFooter.logo.file.publicURL;

  // const currentYear: number = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <img
          className="back-to-top"
          title="Vissza a tetejére"
          src={backToTop}
          role="presentation"
          alt="back to top button"
          onClick={handleScrollToTop}
          onKeyDown={handleScrollToTop}
        />

        <Container fluid>
          <Row>
            <Col className="logo-col d-flex justify-content-sm-center" md={6} lg={3}>
              <img src={logo} alt="Urben Design Group" />
            </Col>
            <Col className="about-col" md={6} lg={4}>
              <div className="content">
                <h2>{title}</h2>
                <ReactMarkdown children={description} />
              </div>
            </Col>

            <Col md={12} lg={5} className="empty-col">
              <div className="content">
                <div className="creators">
                  <div>
                    Design –{" "}
                    <a href="#" className="yellow-text">
                      John Doe.
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
