
// Below is a function "registration" tp gatsby, which gatsby will run when it is supposed to -> onCreateNode

const path = require('path')

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    // strips that all but baseName for file and no extension.
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  const blogTemplate = path.resolve('./src/templates/blogTemplate.js')

  // 2. Get markdown data
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges{
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // 3. Create new pages
  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}
