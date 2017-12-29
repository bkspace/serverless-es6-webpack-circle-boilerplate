# serverless-es6-webpack-circle-boilerplate

![](https://circleci.com/gh/bkspace/serverless-es6-webpack-circle-boilerplate.png?circle-token=:circle-token)

A quick little starter for my MVP toys. 

### Dev
```
yarn install
yarn test --watch 
```

### Serverless
```
yarn global add serverless
sls invoke local -f hello
```

### Prettier 💅
The default configuration is to run prettier against anything in the src directory, on commit. If you want to add further rules, feel free to add eslint.

### Circle CI
Only merges to master get deployed to AWS. The only required step is to add your AWS IAM credentials to Circle. You can do this in settings -> AWS Permissions.
