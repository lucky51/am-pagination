
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
     rename = require('gulp-rename'),
      notify = require('gulp-notify'),
      uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('scripts', function () {
    return gulp.src(['./src/am-pagination.js'])
      .pipe(jshint('init.jshintrc'))
      .pipe(jshint.reporter('default'))
      .pipe(concat('am-pagination.js'))
      .pipe(gulp.dest('./dist/js'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'))
      .pipe(notify({ message: 'Scripts task complete' }));
});
