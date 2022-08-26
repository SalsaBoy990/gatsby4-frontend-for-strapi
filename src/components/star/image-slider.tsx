import React, { useState, useEffect } from "react";
import Slider from "react-slick";

export interface IImageSlider {
  data: {
    highlightedImageBlocks: IImageSlide[];
    highlightsTitle: string;
    highlightsDescription: string;
  };
}

export interface IImageSlide {
  id: number;
  heading: string;
  linkTo?: string;
  background: {
    file: {
      url: string;
    };
  };
  hasOverLay: boolean;
}

type hoverStateItem = {
  slideId: number;
  isHovered: boolean;
};

const ImageSlider = (props: IImageSlider) => {
  const { highlightedImageBlocks, highlightsTitle, highlightsDescription } = props.data;
  const [hoverStates, setIsHoverStates] = useState<hoverStateItem[]>([]);

  useEffect(() => {
    let initialHoverStates: hoverStateItem[] = [];
    highlightedImageBlocks.forEach((slide) => {
      initialHoverStates.push({
        slideId: slide.id,
        isHovered: false,
      });
    });

    setIsHoverStates([...initialHoverStates]);
  }, [setIsHoverStates]);

  const updateHoverStatesHandle = (slideId: number) => {
    const newHoverStates: hoverStateItem[] = hoverStates;
    if (newHoverStates[slideId]["slideId"] === slideId) {
      newHoverStates[slideId]["isHovered"] === !newHoverStates[slideId]["isHovered"];
    }

    setIsHoverStates(newHoverStates);
  };

  // Const slider settings
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    className: "center image-slider",
    centerPadding: "60px",
    centerMode: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="image-slider-container">
      <div className="d-flex flex-column align-items-center highlights-top">
        <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="7" width="100" height="6" fill="#FFE48F" />
          <circle cx="50" cy="10" r="10" fill="#FFE48F" />
        </svg>

        <h2 className="highlights-title">{highlightsTitle}</h2>
        <p>{highlightsDescription}</p>
      </div>

      <Slider {...sliderSettings}>
        {highlightedImageBlocks &&
          highlightedImageBlocks.map((item: IImageSlide, index: number) => (
            <a href={item.linkTo} key={item.id}>
              <div className="overlay-text first d-flex align-items-center text-center">
                <h2>{item.heading}</h2>
              </div>
              <img
                src={item.background.file.url}
                alt={item.heading}
                role="presentation"
                onMouseOver={() => {
                  updateHoverStatesHandle(index);
                }}
                onMouseOut={() => {
                  updateHoverStatesHandle(index);
                }}
                onFocus={() => {
                  updateHoverStatesHandle(index);
                }}
                onBlur={() => {
                  updateHoverStatesHandle(index);
                }}
                className={hoverStates[index]?.isHovered ? "animate_hover" : ""}
              />
            </a>
          ))}
      </Slider>
    </section>
  );
};

export default ImageSlider;
