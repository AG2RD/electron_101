'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var watch = require('gulp-watch');
var batch = require('gulp-batch');
var plumber = require('gulp-plumber'); // Prevent pipe breaking caused by errors from gulp plugins
var jetpack = require('fs-jetpack'); //https://github.com/szwacz/fs-jetpack  Better file system API for Node.js

var projectDir = jetpack;
var srcDir = jetpack.cwd('./src');
var destDir = jetpack.cwd('./app');

gulp.task('build-sass',function(){
  gulp.src(srcDir.path('stylesheets/sass/main.scss'))
  .pipe(plumber())
  .pipe(sass())
  .pipe(gulp.dest(destDir.path('stylesheets')));
});

gulp.task('build-js', function(){
  gulp.src( srcDir.path('renderer/**/*.js') )
  .pipe(plumber())
  .pipe( gulp.dest( destDir.path('js/renderer')));
});
