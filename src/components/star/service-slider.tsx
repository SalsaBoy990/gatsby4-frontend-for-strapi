import React from "react";
import Slider from "react-slick";
import Excavator from "../icons/excavator";
import Crane from "../icons/crane";
import Helmet from "../icons/helmet";
import ConcreteMixer from "../icons/concrete-mixer";

export interface IServiceSlide {
  serviceName: string;
  serviceDescription: string;
  icon: string;
  id: string;
}

interface IServiceSlider {
  data: {
    services: IServiceSlide[];
  };
}

const ServiceSlider = (props: IServiceSlider) => {
  const { services } = props.data;
  const servicesToShow = services.length;

  // Const slider settings
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: servicesToShow,
    className: "center service-slider",
    centerPadding: "60px",
    centerMode: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1310,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function getIcon(icon: string) {
    switch (icon) {
      case "excavator":
        return <Excavator />;
      case "crane":
        return <Crane />;
      case "concrete_mixer":
        return <ConcreteMixer />;
      case "helmet":
        return <Helmet />;
      default:
        return "Missing icon!";
    }
  }

  return (
    <section className="services-container">
      <div id="projects"></div>
      <div className="services-content">
        <Slider {...sliderSettings}>
          {services.map((item: IServiceSlide) => {
            return (
              <div key={"service-" + item.id} className="service-item d-flex flex-column justify-content-center align-items-center align-content-center text-center">
                <div className="service-icon">{getIcon(item.icon)}</div>
                <h3>{item.serviceName}</h3>
                <div className="line-separator"></div>
                <p>{item.serviceDescription}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ServiceSlider;
