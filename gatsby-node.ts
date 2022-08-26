import fs from "fs-extra";
import path from "path";

// Needed to be able to generate sourcemap for scss
exports.onCreateWebpackConfig = ({ stage, actions }: any) => {
  if (stage === "develop") {
    actions.setWebpackConfig({
      devtool: `cheap-module-source-map`,
    });
  }
};

exports.onPostBuild = () => {
  // Needed for multi-language setup
  console.log("Copying locales");
  fs.copySync(
    path.resolve("src/locales"),
    path.resolve("public/locales")
  );
};


// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }: any) => {
  const { createPage } = actions

  // Define a template for blog post
  const articlePost = path.resolve("./src/templates/article-post.tsx")
  const projectPost = path.resolve(`./src/templates/project-post.tsx`)
  const pageTemplate = path.resolve(`./src/templates/blank-page.tsx`)

  // Query for nodes to use in creating pages.
  const result = await graphql(
    `
      {   
        allStrapiProjectGroup: allStrapiProjectGroup {
          nodes {
            slug
          }
        }
      
        allStrapiArticle: allStrapiArticle {
          nodes {
            slug
          }
        }

        allStrapiPage: allStrapiPage {
          nodes {
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )

    return
  }

  const articles = result.data.allStrapiArticle.nodes
  const projects = result.data.allStrapiProjectGroup.nodes
  const pages = result.data.allStrapiPage.nodes

  console.log(projects)

  if (articles.length > 0) {
    articles.forEach((article: any) => {
      createPage({
        path: `/article/${article.slug}`,
        component: articlePost,
        context: {
          slug: article.slug,
        },
      })
    })
  }

  if (projects.length > 0) {
    projects.forEach((project: any) => {
      createPage({
        path: `/project/${project.slug}`,
        component: projectPost,
        // In your project template's graphql query, you can use
        // any property(ies) as a GraphQL variable(s) to query
        context: {
          slug: project.slug
        },
      });
    });
  }

  if (pages.length > 0) {
    pages.forEach((page: any) => {
      createPage({
        path: `/${page.slug}`,
        component: pageTemplate,
        // In your project template's graphql query, you can use
        // any property(ies) as a GraphQL variable(s) to query
        context: {
          slug: page.slug
        },
      });
    });
  }


}
