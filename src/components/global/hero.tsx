import React, { useState } from "react";
import { Ratio } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export interface IHero {
  data: {
    pageTitle: string;
    subTitle: string;
    heroButtonText: string;
    heroButtonLink: string;
    heroVideo: {
      file: {
        url: string;
      };
    };
    heroBackground: {
      file: {
        url: string;
      };
    };
  };
}

function HeroVideoModal(props: any) {
  return (
    <Modal {...props} fullscreen={true} dialogClassName="hero-modal" backdropClassName="hero-modal-backdrop" aria-labelledby="video-introduction" centered>
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Ratio aspectRatio="16x9">
          <video title={props.pageTitle} width="100%" height="100%" controls autoPlay muted loop>
            <source src={props.heroVideo.file.url} type="video/mp4" />
          </video>
        </Ratio>
      </Modal.Body>
    </Modal>
  );
}

const Hero = (props: IHero) => {
  const [modalShow, setModalShow] = useState(false);
  const { pageTitle, subTitle, heroButtonText, heroButtonLink, heroVideo, heroBackground } = props.data;

  return (
    <div className="hero-container">
      <img src={heroBackground.file.url} alt="Skyscrapers in Chicago" className="hero-bg" />

      <div className="hero-overlay d-flex flex-column justify-content-center align-items-center align-content-center">
        <div className="bg-gray">
          <h1>{pageTitle}</h1>
          <p>{subTitle}</p>
        </div>

        <button
          className="video-play-btn d-flex flex-column align-items-center"
          onClick={() => {
            setModalShow(true);
          }}>
          <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="31" cy="31" r="31" fill="#FFE48F" />
            <circle cx="31" cy="31" r="29" fill="#FFC920" />
            <path
              d="M43.5 31.866C44.1667 31.4811 44.1667 30.5189 43.5 30.134L25.5 19.7417C24.8333 19.3568 24 19.8379 24 20.6077L24 41.3923C24 42.1621 24.8333 42.6432 25.5 42.2583L43.5 31.866Z"
              fill="black"
            />
          </svg>
          <span>Introduction</span>
        </button>
        <a href={heroButtonLink} className="hero-cta-btn">{heroButtonText}</a>
      </div>
      <HeroVideoModal show={modalShow} onHide={() => setModalShow(false)} pageTitle={pageTitle} heroVideo={heroVideo} />
    </div>
  );
};

export default Hero;
