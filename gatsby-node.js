const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicStory {
        edges {
          node {
            id
            uid
            data {
              categories {
                category {
                  document {
                    data {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
      prismicAbout {
        id,
        data {
          about_us {
            text
          }
          summary {
            text
          }
          image {
            localFile {
              id
              size
              childImageSharp {
                id
              }
            }
          }
        }
      }
    }
  `);

  const postTemplate = path.resolve('src/templates/post.jsx');
  const postsList = pages.data.allPrismicStory.edges;

  postsList.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });

  const pageTemplate = path.resolve('src/pages/About.jsx');
  const aboutPageData = pages.data.prismicAbout.data;

  createPage({
    path: "about",
    component: pageTemplate,
    context: {
      uid: aboutPageData.id,
    },
  });
};


/* Allow us to use something like: import { X } from 'directory' instead of '../../folder/directory' */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
