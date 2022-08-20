import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import BlocksContainer from "../star/block/blocks-container";
import MapView from "./map-view";

interface IContact {
  data: {
    heading?: string;
    isOneMap?: boolean;
    mapViews: [
      {
        lat: string;
        lng: string;
        id: string;
        zoom: number;
        office_address: string;
        premise_address: string;
        scripts_already_loaded: boolean;
        title?: string;
      },
      {
        lat: string;
        lng: string;
        id: string;
        zoom: number;
        office_address: string;
        premise_address: string;
        scripts_already_loaded: boolean;
        title?: string;
      }
    ];
  };
}

const Contact = () => {

  const { strapiContact } = useStaticQuery(graphql`
    query ContactQuery {
      strapiContact: allStrapiContact {
        nodes {
          isOneMap
          mapViews {
            id
            lat
            lng
            address
            title
            zoom
            scriptsAlreadyLoaded
          }
        }
      }
    }
  `);

  const isOneMap = strapiContact.nodes[0].isOneMap;
  const mapViewTop = strapiContact.nodes[0].mapViews[0];
  const mapViewBottom = strapiContact.nodes[0].mapViews[1];

  return (
    <section>
      <Container fluid className="contact-container">
        <Row>
          <Col md={12} lg={6} className="left-block d-flex align-items-md-center align-items-lg-end justify-content-md-center flex-md-column mb-md-5">
            <div className="block-content">
              <h2>Contact us</h2>
              <Form className="">
                <Form.Group className="mb-2" controlId="name">
                  <Form.Control type="text" placeholder="Your name..." />
                </Form.Group>
                <Form.Group className="mb-2" controlId="email">
                  <Form.Control type="email" placeholder="Your email..." />
                </Form.Group>
                <Form.Group className="mb-2" controlId="tel">
                  <Form.Control type="tel" placeholder="Phone number..." />
                </Form.Group>

                <Form.Group className="mb-2" controlId="department">
                  <Form.Select aria-label="Select department">
                    <option value="1">Sales</option>
                    <option value="2">Planning</option>
                    <option value="3">Development</option>
                    <option value="4">Logistics</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mt-4" style={{ marginBottom: "12px" }} controlId="message">
                  <Form.Control as="textarea" rows={6} placeholder="Your message..." />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </Col>
          <Col md={12} lg={6} className="right-block">
            <BlocksContainer>
              {isOneMap ? (
                <div className="map-container-full">
                  <MapView data={mapViewTop} className="map"></MapView>
                </div>
              ) : (
                <>
                  <div className="map-container">
                    <div className="overlay">{mapViewTop.title}</div>
                    <MapView data={mapViewTop} className="map"></MapView>
                  </div>
                  <div className="map-container">
                    <div className="overlay">{mapViewBottom.title}</div>
                    <MapView data={mapViewBottom} className="map"></MapView>
                  </div>
                </>
              )}
            </BlocksContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
