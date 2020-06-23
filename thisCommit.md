# style posts

1. add footer.module.scss to /src/components
   1. `import footerStyles from './footer.module.scss'` into footer.js
   2. apply styles: `<footer className={footerStyles.footer}>`
2. add blog.module.scss to /src/pages
   1. `import blogStyles from './blog.module.scss` into blog.js 
   2. apply styles to blog.js. **NOTE** The sass magic in blog.module.scss post class.