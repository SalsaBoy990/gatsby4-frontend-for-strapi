import React from "react";
import Slider from "react-slick";

export interface IEmptySlider {
  children: React.ReactNode;
}

const EmptySlider = (props: IEmptySlider) => {
  const { children } = props;

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    className: "center empty-slider",
    centerPadding: "60px",
    centerMode: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <section className="empty-slider-container">
      <Slider {...sliderSettings}>{children}</Slider>
    </section>
  );
};

export default EmptySlider;
