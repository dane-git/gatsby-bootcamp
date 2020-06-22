# "Dynamic" content with graphql source filesystem

## Creating more complex posts template

1. start with front matter

   ```
    ---
      key: "value",
      title: "Gatsby Bootcamp"
      date: "today"
    ---
   ```

2. actual md content...


## Add gastsby sourse filesystem
1. in project root directory:  
   > ``` npm i gatsby-source-filesystem ```
2. add plugin to gastby-congig.js  
  : within gatsby-config.js file, extend plugins array to include:  
  > ```js
  > {
  >     resolve: 'gatsby-soruce-filesystyem',
  >     options: {
  >           name: "src",
  >           path: `${__dirname}/src/`
  >         }
  > }
  > ```
  > !!! a1 resolve is the default opertaion if just a string is given
  > !!! a2  `${__dirname}` is a node thing, -> gatsby-config.js is a nodejs file.  *note the **module.exports = {}***
  > !!! a3 the path assigns this path to be able to be queried by gastby

The addition of gatsby-source-filesystem allows graphql to query the file system. Now one can make a query (try in the [graphQL playground](http://localhost:8000/___graphql)) like:  
```json
query {
	allFile {
    edges {
      node {
        name
        extension
        dir
      }
    }
  }
}
```
The above query will show you the name, extension, and directory of the files in the ./src directory

        
        
