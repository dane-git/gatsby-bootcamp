import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'

// NOTE useStaticQuery not imported from 'gatsby' here because:
// create a query that we will export instead of useStaticQuery
// on our template files we will export the query:
// this technique allows us to access the context -> which contains the slug

// export to ensure gatsby can access query -> export as named export here. 
export const query = graphql`
  query ($slug: String) {
    markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ){
      frontmatter{
        title
        date
      }
      html
    }
  }
`
const Blog = (props) => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} ></div>
    </Layout>
  )
}

export default Blog