import React from "react";

export interface IBlocksContainer {
  isFullWidth?: boolean;
  customStyles?: React.CSSProperties;
  children: React.ReactNode;
}

const BlocksContainer = (props: IBlocksContainer) => {
  const { isFullWidth, customStyles, children } = props;
  return (
    <div className={"blocks-container " + (isFullWidth ? "is-full-width" : "")} style={customStyles}>
      {children}
    </div>
  );
};

export default BlocksContainer;
