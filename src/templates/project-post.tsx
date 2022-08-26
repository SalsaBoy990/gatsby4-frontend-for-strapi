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
    metaDescription: projectData.seoDescription,
    shareImage: projectData.background,
  };

  return (
    <LayoutGlobal>
      {<Seo seo={seo} />}
      <main>
        <EmptySlider>
          {projectData &&
            projectData.projects.map((item: IProject, index: number) => {
              return (
                <Project
                  groupTitle={projectData.title}
                  key={item.id}
                  index={index}
                  title={item.title}
                  description={item.description}
                  coverImage={item.coverImage}
                  blocks={item.blocks}></Project>
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
        seoDescription
        coverImage {
          file {
            url
          }
        }
        blocks {
          __typename
          ... on StrapiComponentSharedMedia {
            id
            file {
              mime
              file {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          ... on StrapiComponentSharedRichText {
            id
            richTextBody: body
          }
          ... on StrapiComponentSharedVideo {
            id
            videoTitle
            videoSource {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default ProjectPost;
