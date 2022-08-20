import React from "react";
import { graphql } from "gatsby";

import { IProject } from "../components/star/project/project";

import LayoutGlobal from "../layout/layout-global";

import Seo from "../components/global/seo";
import Project from "../components/star/project/project";
import EmptySlider from "../components/star/slider/empty-slider";

const ProjectPost = ({ data }: any) => {
  const projectData = data.strapiProjectGroup;

  const seo = {
    metaTitle: projectData.title,
    metaDescription: projectData.description,
    shareImage: projectData.background,
  };

  return (
    <LayoutGlobal>
      {<Seo seo={seo} />}
      <main>
        <EmptySlider>
          {projectData &&
            projectData.projects.map((item: IProject) => {
              return (
                <Project
                  key={item.id}
                  title={item.title}
                  navTitle={item.navTitle}
                  description={item.description}
                  topLeftImage={item.topLeftImage}
                  topRightImage={item.topRightImage}
                  sideTopImage={item.sideTopImage}
                  sideBottomImage={item.sideBottomImage}
                  seoDescription={item.seoDescription}></Project>
              );
            })}
        </EmptySlider>
      </main>
    </LayoutGlobal>
  );
};

export const pageQuery = graphql`
  query ($slug: String) {
    strapiProjectGroup(slug: { eq: $slug }) {
      id
      title
      description
      background {
        file {
          url
        }
      }
      projects {
        id
        title
        description
        id
        logo {
          file {
            url
          }
        }
        navTitle
        seoDescription
        sideBottomImage {
          file {
            url
          }
        }
        sideTopImage {
          file {
            url
          }
        }
        topLeftImage {
          file {
            url
          }
        }
        topRightImage {
          file {
            url
          }
        }
      }
    }
  }
`;

export default ProjectPost;
