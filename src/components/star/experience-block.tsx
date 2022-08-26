import React from "react";
import PartnerSlider from "./partner-slider";

export interface IExperienceBlock {
  experienceTitle: string;
  experienceDescription?: string;
  experienceItems: IExperienceBlockItem[];
}

export interface IExperienceBlockItem {
  id: number;
  itemTitle: string;
  percentage: number;
}

const ExperienceBlock = ({ data }: any) => {
  const { experienceTitle, experienceDescription, experienceItems } = data;

  return (
    <>
      <section className="experience-container d-flex flex-column flex-md-row justify-content-between align-items-start">
        <div className="left-content">
          <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="100" height="6" fill="#6D6449" fill-opacity="0.66" />
            <circle cx="50" cy="10" r="10" fill="#9E9886" />
          </svg>
          <h2 className="serif experience-title">{experienceTitle}</h2>
          <p>{experienceDescription}</p>
        </div>
        <div className="right-content d-flex flex-column justify-content-center">
          {experienceItems.map((item: IExperienceBlockItem) => {
            let filledBypixels = (300 * item.percentage) / 100;
            return (
              <div key={"experience-" + item.id} className="experience-item d-flex flex-column flex-sm-row align-items-center">
                <div className="title">{item.itemTitle}</div>
                <div className="full-bar">
                  <div
                    className="percentage-bar"
                    style={{
                      width: filledBypixels + "px",
                    }}></div>
                </div>
                <div className="percentage-text">{item.percentage + "%"}</div>
              </div>
            );
          })}
        </div>
      </section>
      <PartnerSlider data={data}></PartnerSlider>
    </>
  );
};

export default ExperienceBlock;
