import React from "react";
import Slider from "react-slick";

export interface IPartnerSlide {
  title?: string;
  linkTo?: string;
  image: {
    file: {
      url: string;
    };
  };
  id: string;
}

interface IPartnerSlider {
  data: {
    slides: IPartnerSlide[];
  };
}

const PartnerSlider = (props: IPartnerSlider) => {
  const { slides } = props.data;
  const slidesToShow = slides.length;

  // Const slider settings
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    className: "center partners-slider",
    centerPadding: "60px",
    centerMode: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="partners-container">
      <Slider {...sliderSettings}>
        {slides.map((item: IPartnerSlide) => {
          return (
            <div key={"partner-" + item.id} className="partner-item">
              <img src={item.image.file.url} alt={item.title} />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default PartnerSlider;
