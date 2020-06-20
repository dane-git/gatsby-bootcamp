# graphql playground for better interface with graphql experience

## process

1. root folder of project -> touch .env.development.
   1. GATSBY_GRAPHWL_IDE=playground
2. root folder of project -> npm i --save-dev env-cmd
3. package.json -> "scripts" -> "develop" += "env-cmd -f .env.development"
   1. NOTE: insure that new entry is first.
