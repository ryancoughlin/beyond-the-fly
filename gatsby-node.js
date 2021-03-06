const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsStory {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsStory.edges.map(({ node: work }) => {
        createPage({
          path: `story/${work.slug}`,
          component: path.resolve(`./src/templates/post.jsx`),
          context: {
            slug: work.slug,
          },
        })
      })
      resolve()
    })
  })
}
