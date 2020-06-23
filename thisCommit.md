# create a new page for each post.

gatsby api dynamicly generate new pages with dynamic content

## Dyncamically generate pages for each and every post
1. post clicked
2. new page dynamically generated [_markDown Data from graphql_] +->BlogPageTemplate = ReactCompenent => newPage


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

### FOR-GOAL-2
