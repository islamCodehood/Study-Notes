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

- On terminal:
```
gulp
```
## Uglify JS files

- Install gulp-uglify package.
- Go to https://gulpjs.com/plugins/
- Search for gulp-uglify. Click it. To see tha install syntax.
- In your terminal at the root of your project:
```
npm install --save-dev gulp-uglify
```
- In gulpfile.js:

```javascript
var gulp = require('gulp');
var uglify = require('gulp-uglify);

gulp.task('scripts'/*name of task. you can put whatever name you want*/, function() {
  gulp.src('js/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('minjs'));
}
```

- On terminal:
```
gulp scripts
```

