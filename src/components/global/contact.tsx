import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Button } from "react-bootstrap";

interface IContact {
  data: {
    leftImage: {
      file: {
        url: string;
      };
    };
  };
}

const Contact = () => {
  const { strapiContact } = useStaticQuery(graphql`
    query ContactQuery {
      strapiContact: allStrapiContact {
        nodes {
          leftImage {
            file {
              url
            }
          }
        }
      }
    }
  `);

  const leftImage = strapiContact.nodes[0].leftImage.file.url;

  return (
    <section className="contact-container d-flex flex-row">
      <div id="contact"></div>
      <div className="d-flex contact-form-image-container">
        <img className="contact-form-image" src={leftImage} alt="Contact us illustration" />
      </div>
      <div className="contact-form d-flex flex-grow-1 align-items-center justify-content-center">
        <div className="block-content">
          <h2 className="serif">Contact us to get a quote</h2>
          <form name="contact" method="POST" action="/message-sent" netlify-honeypot="bot-field" netlify="true">
            <div className="d-none">
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </div>

            <div className="d-flex flex-column flex-md-row">
              <div className="mb-2">
                <label htmlFor="name">Your name</label>
                <input placeholder="Your name..." type="text" name="name" className="form-control" />
              </div>
              <div className="mb-2">
                <label htmlFor="email">Your email</label>
                <input placeholder="Your email..." type="email" name="email" className="form-control" />
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="phone">Phone number</label>
              <input placeholder="Phone number..." type="tel" name="phone" className="form-control" />
            </div>
            <div className="mb-2">
              <label htmlFor="message">Select department</label>
              <select name="department" aria-label="Select department" className="form-select">
                <option value="Sales">Sales</option>
                <option value="Planning">Planning</option>
                <option value="Development">Development</option>
                <option value="Logistics">Logistics</option>
              </select>
            </div>

            <div className="mb-4" style={{ marginBottom: "12px" }}>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="6" className="form-control" placeholder="Your message..."></textarea>
            </div>

            <Button variant="primary" type="submit">
              Get a quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
