import React from "react";
import { Col } from "react-bootstrap";
import { Link, useStaticQuery, graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import MapView from "./map-view";
import backToTop from "../../images/svg/back-to-top.svg";

export interface INavigationItem {
  id: string;
  title: string;
  slug: string;
}

const Footer = () => {
  const handleScrollToTop = (): void => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  const queriedData = useStaticQuery(graphql`
    query FooterQuery {
      strapiFooter: strapiFooter {
        title
        description
        logo {
          file {
            publicURL
          }
        }
        mapLocation {
          lat
          lng
          zoom
          title
          address
          scriptsAlreadyLoaded
        }
      }
      strapiGlobal: strapiGlobal {
        siteName
        siteDescription
        address
        email
        phoneNumber
        companyName
      }
      strapiNavigation: strapiNavigation {
        id
        logo {
          file {
            publicURL
          }
        }
        navigationItems {
          slug
          title
          id
        }
      }
    }
  `);

  const title: string = queriedData.strapiFooter.title || "";
  const description: string = queriedData.strapiFooter.description || "";
  const logo: string = queriedData.strapiFooter.logo.file.publicURL;
  const navigationItems: INavigationItem[] = queriedData.strapiNavigation.navigationItems;
  const global = queriedData.strapiGlobal;

  interface IMapViewData {
    className: string;
    data: {
      lat: string;
      lng: string;
      zoom: number;
      scriptsAlreadyLoaded?: boolean;
      title?: string;
    };
  }

  const location: IMapViewData = {
    className: "",
    data: {
      lat: queriedData.strapiFooter.mapLocation.lat,
      lng: queriedData.strapiFooter.mapLocation.lng,
      zoom: queriedData.strapiFooter.mapLocation.zoom,
      title: queriedData.strapiFooter.mapLocation.title,
      scriptsAlreadyLoaded: queriedData.strapiFooter.mapLocation.scriptsAlreadyLoaded,
    },
  };

  const getNavItems = () => {
    return navigationItems.map((item: INavigationItem) => {
      const activeClassName: string = "nav-link active";

      return item.slug.indexOf("#") !== -1 ? (
        <AnchorLink key={item.id} to={`/${item.slug}`} data-rr-ui-event-key={item.slug} className={"nav-link"}>
          {item.title}
        </AnchorLink>
      ) : (
        <Link key={item.id} to={`/${item.slug}`} className="nav-link" activeClassName={activeClassName}>
          {item.title}
        </Link>
      );
    });
  };

  const currentYear: number = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <img
          className="back-to-top"
          title="Back to the top"
          src={backToTop}
          role="presentation"
          alt="back to top button"
          onClick={handleScrollToTop}
          onKeyDown={handleScrollToTop}
        />

        <div className="container-fluid">
          <div className="row">
            <Col className="logo-col d-flex flex-column flex-md-row align-items-center align-items-md-start" md={12} lg={6}>
              <div className="content logo-content">
                <img src={logo} alt={global.siteName} />

                <nav className="footer-nav">{getNavItems()}</nav>
              </div>

              <div className="content text-content">
                <h2>{global.companyName}</h2>
                <ReactMarkdown children={description} />
              </div>
            </Col>

            <Col className="map-col d-flex flex-column flex-md-row" md={12} lg={6}>
              <div className="content">
                <h2>Information</h2>
                <ul className="footer-nav nav flex-column flex-sm-row flex-md-row flex-lg-column align-items-center align-items-md-start align-items-lg-end justify-content-center justify-content-md-start justify-content-lg-end">
                  <li>
                    <a href={"mailto:" + global.email}>
                      <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                      {global.email}
                    </a>
                  </li>
                  <li>
                    <a href={"tel:" + global.phoneNumber}>
                      <FontAwesomeIcon icon={faPhone} className="me-1" />
                      {global.phoneNumber}
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} className="me-1" />
                    {global.address}
                  </li>
                </ul>
              </div>

              <div className="map-container">
                <MapView {...location}></MapView>
              </div>
            </Col>
          </div>
        </div>
        <div className="container-fluid footer-bottom">
          <div className="">
            Design & development –{" "}
            <a href="#" className="yellow-text">
              András Gulácsi {currentYear}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
