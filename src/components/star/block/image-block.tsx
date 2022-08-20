import React, { useState } from "react";
import { Link } from "gatsby";

const backlinkArrow = require("../../../images/svg/back_icon.svg") as string;

export interface IImageBlock {
  id: number;
  heading?: string;
  linkTo?: string;
  background?: {
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

const ImageBlock = ({ data }: any) => {
  const { background, hasOverlay, textColor, boxHeight, logo, hasBackArrow, linkTo } = data;
  
  const heading = data?.heading;
  
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const onHoverHandle = (): void => {
    setIsHovered(!isHovered);
  };

  const getClasses = (): string => {
    return "image-block" + (hasOverlay ? " has-overlay " : " ");
  };

  let content: any;
  if (linkTo) {
    content = (
      <Link to={`/${linkTo}` || "/"}>
        {hasOverlay && (
          <div className="overlay-text">
            <h3>
              {hasBackArrow && <img className="back-arrow" src={backlinkArrow} alt="" />}
              {heading}
            </h3>
          </div>
        )}

        {logo && <img src={logo.file.url} alt={heading} className="box-logo" role="presentation" />}

        <img src={background.file.url} alt={heading} role="presentation" />
      </Link>
    );
  } else {
    content = (
      <>
        {hasOverlay && (
          <div className="overlay-text">
            <h3>
              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  window.history.back();
                }}
                onKeyDown={() => {
                  window.history.back();
                }}>
                {hasBackArrow && <img className="back-arrow" src={backlinkArrow} alt="" role="presentation" />}
                {heading}
              </div>
            </h3>
          </div>
        )}

        {logo && <img src={logo.file.url} alt="" className="box-logo" />}

        <img src={background.file.url} alt={heading} />
      </>
    );
  }

  return (
    <div
      role="presentation"
      onMouseOver={onHoverHandle}
      onFocus={onHoverHandle}
      onBlur={onHoverHandle}
      onMouseOut={onHoverHandle}
      className={isHovered ? getClasses() + "animate_hover" : getClasses()}
      style={{ color: textColor, height: boxHeight }}>
      {content}
    </div>
  );
};

export default ImageBlock;
