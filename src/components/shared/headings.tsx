import React from "react";

export interface IHeadings {
  title: string;
  description?: string;
}

const Headings = ({ title, description }: IHeadings) => {
  return (
    <header className="container mt-4">
      <h1 className="">{title}</h1>
      {description && <p className="mt-4">{description}</p>}
    </header>
  );
};

export default Headings;
