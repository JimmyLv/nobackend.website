var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('webpack', function () {
  return gulp.src('./app.js')
    .pipe(require('./webpack.config.js'))
    .pipe(gulp.dest('assets/'));
});