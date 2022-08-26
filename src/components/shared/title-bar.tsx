import React from "react";

export interface ITitleBar {
  titleBarTitle: string;
  titleBarImage: {
    file: {
      url: string;
    };
  };
  titleBarDescription: string;
}

const TitleBar = ({ data }: any) => {
  return (
    <section className="title-bar-container">
        <div className="title-bar d-flex flex-row">
          <div className="title-left">
            <h2 className="serif">{data.titleBarTitle}</h2>
            <p>{data.titleBarDescription}</p>
          </div>
          <div className="title-right">
            <img src={data.titleBarImage.file.url} alt={data.titleBarTitle} />
          </div>
        </div>
    </section>
  );
};

export default TitleBar;
