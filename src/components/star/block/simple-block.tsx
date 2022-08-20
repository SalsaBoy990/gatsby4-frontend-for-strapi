import React from "react";

enum BlockSize {
  half = 1,
  full = 2,
}

export interface ISimpleBlock {
  id: number;
  heading: string;
  backgroundColor: string;
  textColor: string;
  blockSize: BlockSize;
}

const SimpleBlock = (props: any) => {
  const { heading, backgroundColor, textColor, blockSize }: ISimpleBlock = props.data;
  const getBlockClass = (): string => {
    if (blockSize === 1) {
      return "block half-block";
    } else if (blockSize === 2) {
      return "block full-block";
    } else {
      return "block half-block";
    }
  };

  return (
    <div className={getBlockClass()} style={{ backgroundColor: backgroundColor, color: textColor }}>
      <h3 lang="hu">{heading}</h3>
    </div>
  );
};

export default SimpleBlock;
