import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

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

  const navigateBack = (): void => {
    const prevPath = window.location.pathname;
    const slugItems = prevPath.split("/");

    if (window.location.hostname === "localhost" || window.location.origin === process.env.SITE_URL) {
      if (slugItems.includes("project")) {
        window.location.href = "/";
      } else {
        window.history.back();
      }
    } else {
      window.location.href = "/";
    }
  };

  let content: any;
  if (linkTo) {
    content = (
      <Link to={`/${linkTo}` || "/"}>
        {hasOverlay && (
          <div className="overlay-text">
            <h3>
              {hasBackArrow && <FontAwesomeIcon icon={faArrowLeftLong} className="me-1" />}
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
                  navigateBack();
                }}
                onKeyDown={() => {
                  navigateBack();
                }}>
                {hasBackArrow && (
                  <span className="me-2">
                    <FontAwesomeIcon icon={faArrowLeftLong} className="me-2" />
                    Home /
                  </span>
                )}
                {heading}
              </div>
            </h3>
          </div>
        )}

        {logo && <img src={logo.file.url} alt="logo" className="box-logo" />}

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
