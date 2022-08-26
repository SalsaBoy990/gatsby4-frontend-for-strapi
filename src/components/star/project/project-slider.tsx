import React from "react";
import Slider from "react-slick";
import Project, { IProject } from "./project";

export interface IProjectSlider {
  projects: IProject[];
}

const ProjectSlider = (props: IProjectSlider) => {
  const { projects } = props;
  // Const slider settings
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    className: "center project-slider",
    centerPadding: "60px",
    centerMode: false,
    slidesToScroll: 1,
    swipeToSlide: false,
    autoplay: false,
    draggable: false,
    swipe: false,
    touchMove: false
  };
  return (
    <section className="project-slider-container">
      <Slider {...sliderSettings}>
        {projects.map((item: IProject) => (
          <Project data={item} />
        ))}
      </Slider>
    </section>
  );
};

export default ProjectSlider;
