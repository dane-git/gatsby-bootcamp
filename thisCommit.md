# Target markdown and use them on site

1. install remark -> gatsby-transformer-remark
   > `npm i --save gatsby-transformer-remark`
2. add `gatsby-transformer-remark` to plugins array in gatsby-config.js.
   > At [graphQL playGround](http://localhost:8000/___graphql) two new queries are now available.
   >
   > 1. markdownRemark()
   > 2. allMarkdownRemark()  
  !!! NOTE: had to change gatsby-config.js gatsby-source-filesystem path option to point to specific posts folder

3. add front matter posts content to blog list page -> blog.js
   1.  get query data using useStaticQuery(graphql`query{}`)
   2.  Iterate over edges array, take the edge's object and conver that to a list item :
    > ```jsx
    > // this is an array objects: {data.allMarkdownRemark.edges}
    > // what we need is an array of jsx elements
    > // use the map() function to convert the object to jsx element
    > // acces array 
    >
    >
    > {data.allMarkdownRemark.edges.map((edge) => {
    >   return(
    >  <li>
    >    <h2>edge.node.frontmatter.title</h2>
    >    <p>edge.node.frontmatter.date</p>
    >  </li>
    > )
    > })}
    >```
