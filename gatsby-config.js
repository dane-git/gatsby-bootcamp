/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Youtube Bootcamp!",
    author: "Anoni Mus",
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}

// SHABZ KHAN
// 1 month ago
// Thanks Andrew for  this tutorial. The way you deliver keeps me going on...
// On other hand, anyone who got "MarkdownRemark.excerpt@format cannot convert to InputType the following string: 'MarkdownExcerptFormats'" error and fixed it, help would be appreciated.
