# Create a New Page For Each Post.

gatsby api dynamicly generate new pages with dynamic content

## Dynamically generate pages for each and every post
1. post clicked
2. new page (dynamically generated [_markDown Data from graphql_]) => BlogPageTemplate => ReactCompenent => newPage  


## Working with gatsby interanl API

### GOAL-1 - Generate a slug for each post

#### Slug
: the files name stored as a string
: **For_Example: gastby.md ->Slug => gastby  -> /blog/gatsby

A [slug](#slug) allows us to setup the url for someone to see the post.  
We need the slug from the filename in order to setup the correct endpoint for the post to finally be accessed. 

### GOAL-2 - Generate the Blog post page template. -> react component

### GOAL-3 - Using products of GOAL 1 and GOAL 2, Generate a newPage for every post

<hr>

TODO:  
 ### FOR-GOAL-1
1. Generate new file in project root directory: *gatsby-node.js* 
   1. Gatsby node configuration file - Allows use of many node api's that gatsby exposes. This will be used to generate the slug and dynamically generate the blog post pages. 
   2. [onCreateNode API](https://www.gatsbyjs.org/docs/node-apis/#onCreateNode).  This allows us to attach new data onto the individual node.
   3. ASIDE: Whats a node? -> a data structure for storing your gatsby data. -> think graphql queries.  , HOW TO DIRECTLY ACCESS AND MODIFY A NODE???

### FOR-GOAL-2 - GENERATE NEW TEMPLATE
1. create new template Directory in src folder
2. in template directory, create blogTemplate.js
3. blogTemplate.js  
  > ```js
  >import React from 'react'
  >import Layout from '../components/layout'
  >const Blog = () => {
  >  return (
  >    <Layout>
  >      this is the blog template
  >    </Layout>
  >
  >  )
  >}
  > ```

### FOR-GOAL-3 - GENERATE NEW PAGE FOR EACH POST
#### In gatsby-node.js define api function
1. Get path to template
   > ```js 
   > const blogTemplate = path.resolve('./src/templates/blogTemplate.js')
   >```
2. Get markdown data
   > ```js 
   > const res = await graphql(`query{allMarkdownRemark {...}}`) 
   >```
3. Create new pages
   > ```js
   > res.data.allMarkdownRemark.edges.forEach((edge) => {
   >   createPage({ 
   >     component: blogTemplate, 
   >     path: `/blog/${edge.node.fields.slug}`,
   >     context: {
   >       slug: edge.node.fields.slug
   >     }
   >   });
   > });

   #### Use New Slug to Link to pages
   In blog.js:  
   1. add newly created slug field to useStaticQuery(graphql`query{}`)
   > ```js
   > const data = useStaticQuery(graphql`
   >  query {
   >    allMarkdownRemark {
   >      edges{
   >        node {
   >          fields {
   >            slug
   >          }
   >        }
   >      }
   >    }
   >  }
   > `)
   >```
   2. Link to={`/blog/${edge.node.fields.slug}`}
4. Render the blog content 
   1. generate random graphql query
   * ASIDE: using graphql variables and arguments
   * markdownRemark{} -> 
   * <hr>
   * ##### graphql query **arguments**
     * **arguments** => all the different ways we can target the post we are trying to fetch
     * Setting up arguments for a graphql query: 
     * 
      > `query{ markdownRemark(argument1, argument2) frontmatter { title } }`

      >```js
      > query {
      >   markdownRemark (
      >     fields: {
      >       slug {
      >         eq: "react" 
      >       }
      >     }
      >   )
      >   {
      >     frontmatter {
      >       title
      >     }
      >   }
      > }
      > ``` 
   * <hr>
   * ##### graphql query **variable**
   * **variable** - a set of data passed into the query that the can be used within the query to populate things like argument data. 
   *  > `query($variableName: Type) { markdownRemark(argument1, argument2) frontmatter { title } }`
   *  
      >```js
      > query (
      >   $slug: String
      > ) {
      >   markdownRemark (
      >     fields: {
      >       slug {
      >         eq: "react" 
      >       }
      >     }
      >   )
      >   {
      >     frontmatter {
      >       title
      >     }
      >   }
      > }
      > ``` 
    2.  export a named export query in blogTemplate.js 
    > ```js
    >export const query = graphql`
    >  query ($slug: String) {
    >    markdownRemark(
    >      fields: {
    >        slug: {
    >          eq: $slug
    >        }
    >      }
    >    ){
    >      frontmatter{
    >        title
    >        date
    >      }
    >      html
    >    }
    >  }
    >`
    >```
    3. dangerousltSetInnerHTML in blogTemplate return Blog 
    > ` <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} ></div>`