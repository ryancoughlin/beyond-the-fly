const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicStory {
        edges {
          node {
            id  
            uid
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/story.jsx")

  pages.data.allPrismicStory.edges.forEach(edge => {
    console.log(edge.node.uid)
    createPage({
      path: `/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
