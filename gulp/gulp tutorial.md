# gulp tutorial

## Install gulp:

1. *globally*:

```
npm install -g gulp
```
2. locally (on your project main directory:

```
npm install --save-dev gulp
```

## gulpfile.js

- In this JS file you will write tasks that gulp will run.
- Save it in the project main directory.
```
var gulp = require('gulp');

gulp.task('default', function() {
  console.log('Hello gulp!'); 
});
```
