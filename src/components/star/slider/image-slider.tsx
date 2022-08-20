import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import TitleBar from "../../shared/title-bar";

export interface IImageSlider {
  data: {
    highlightedImageBlocks: IImageSlide[];
  /*  titleBar: {
      titleBarTitle: string;
    };*/
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
  hasBackArrow: boolean;
  logo?: {
    file: {
      url: string;
    };
  };
  textColor: string;
  boxHeight: string;
}

type hoverStateItem = {
  slideId: number;
  isHovered: boolean;
};

const ImageSlider = (props: IImageSlider) => {
  const { highlightedImageBlocks } = props.data;
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
        breakpoint: 1100,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
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
      {/*<TitleBar title={titleBar.titleBarTitle}></TitleBar> */}
      <Slider {...sliderSettings}>
        {highlightedImageBlocks &&
          highlightedImageBlocks.map((item: IImageSlide, index: number) => (
            <div key={item.id}>
              <div className="overlay-text first">
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
              {item.logo && (
                <img
                  src={item.logo.file.url}
                  role="presentation"
                  className="logo logo-1"
                  alt=""
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
                />
              )}
            </div>
          ))}
      </Slider>
    </section>
  );
};

export default ImageSlider;
