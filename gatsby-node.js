
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
