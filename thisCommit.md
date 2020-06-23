# Inserting images into posts
## Install needed plugins. 
1. in root directory: `npm i gatsby-plugin-sharp gatsby-remark-images gatsby-remark-relative-images`
2. add plugins to gatsby-config.js
  * gatsby-plugin-sharp just needs to be added to plugin list
  * gatsby-remark-images and gatsby-remark-relative-images are options for gatsby-transfromer-remark, so we will rebuild that plugin entry as an object to provide the necessary options:
  * >```js 
    > {
    >   resolve: 'gatsby-transformer-remark',
    >   options: {
    >     plugins: [
    >       'gatsby-remark-relative-images',
    >       {
    >         resolve: 'gatsby-remark-images',
    >         options: {
    >           maxWidth: 750,
    >           linkImagesToOriginal: false
    >         }
    >       }
    >     ]
    >   }
    > }
    > ```