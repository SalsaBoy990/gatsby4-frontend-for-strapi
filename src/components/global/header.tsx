import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

export interface INavigationItem {
  id: string;
  title: string;
  slug: string;
}

interface INavigation {
  navigationItems: INavigationItem[];
  logo: {
    file: {
      publicURL: string;
    };
  };
}

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const getNavItems = () => {
    return navigationItems.map((item: INavigationItem) => {
      const activeClassName: string = item.title === "KONTAKT" ? "nav-link active-bg" : "nav-link active";

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

  const queriedData = useStaticQuery(graphql`
    query HeaderQuery {
      site: site {
        siteMetadata {
          siteUrl
        }
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

  const siteUrl: string = queriedData.site.siteMetadata.siteUrl;
  const navigationItems: INavigationItem[] = queriedData.strapiNavigation.navigationItems;
  const logo: string = queriedData.strapiNavigation.logo.file.publicURL;

  return (
    <header className="header">
      <Navbar collapseOnSelect expand="xl" style={{ backgroundColor: "#FFF !important", height: "60px" }}>
        <Container fluid className="p-0">
          <h1 className="mb-0">
            <a href={siteUrl} className="navbar-brand">
              <img src={logo} className="site-logo d-inline-block align-top" alt="Starcity Group" />
            </a>
          </h1>
          <button
            className="btn btn-link d-block d-xl-none mr-2"
            type="button"
            onClick={handleShow}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
            aria-controls="offcanvasMenu">
            <Icon path={mdiMenu} size={1} color="rgba(0, 0, 0, 0.7)" />
          </button>

          <Navbar.Collapse className="justify-content-end mobile-menu-container" style={{ zIndex: 1000, backgroundColor: "white" }}>
            <Nav className="d-flex">{getNavItems()}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas id="offcanvasMenu" show={showOffcanvas} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <a href={siteUrl} className="navbar-brand">
              <img src={logo} className="site-logo offcanvas-logo d-inline-block align-top" alt="Urben Design Group" />
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav id="basic-navbar-nav" defaultActiveKey="/" className="flex-column">
            {getNavItems()}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
