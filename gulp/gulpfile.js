var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer')

gulp.task('scripts', function() {
    gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('dist/minjs'));
});

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
    .pipe(sass(
        {outputStyle: 'compressed'}
    ).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('css'));
});


gulp.task('image', function() {
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img/build'));
}); 

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('sass/**/*.scss', ['styles']);
});
gulp.task('default', ['scripts', 'styles', 'watch']);
