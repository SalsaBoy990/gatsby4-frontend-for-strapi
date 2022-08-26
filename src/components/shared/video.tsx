import React from "react";
import { Ratio } from "react-bootstrap";

export interface IVideo {
  data: {
    videoTitle: string;
    videoSource: {
      file: {
        url: string;
      };
    };
    videoElementId?: string;
  };
}

const Video = (props: IVideo) => {
  const { videoTitle, videoSource, videoElementId } = props.data;

  return (
    <div>
      <Ratio aspectRatio="16x9">
        <video id={videoElementId} title={videoTitle} width="100%" height="100%" controls autoPlay muted loop>
          <source src={videoSource.file.url} type="video/mp4" />
        </video>
      </Ratio>
    </div>
  );
};

export default Video;
