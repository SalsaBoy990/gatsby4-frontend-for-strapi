import React from "react";
import { Link } from "gatsby";
import { withTrans } from "../../i18n/withTrans";
import { Breadcrumb } from "react-bootstrap";

export interface IBreadcrumb {
  pageName: string;
  parentPageName?: string;
  previousPath?: string;
}

const BreadcrumbBar = ({ data }: any) => {
  const { pageName, parentPageName, previousPath }: IBreadcrumb = data;

  return (
    <div className="container">
      <div className="breadcrumb-container">
        <div>
          <Link to={previousPath ? `/${previousPath}` : "/"} className="back-btn btn btn-outline-light btn-sm">
            Back
          </Link>
        </div>
        <div className="breadcrumb-text">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            {parentPageName && <Breadcrumb.Item href={`/${previousPath}`}>{parentPageName}</Breadcrumb.Item>}
            <Breadcrumb.Item active>{pageName}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbBar;
