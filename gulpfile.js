'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),

    minifyCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),

    minifyJS = require('gulp-uglify'),

    partsHTML = require('gulp-rigger'),

    path = {
      build: {
          html: 'build/',
          js: 'build/js/',
          css: 'build/css/',
          img: 'build/img/',
          fonts: 'build/fonts/'
      },
      src: { //Пути откуда брать исходники
          html: 'src/*.html',
          js: 'src/js/*.*',
          style: 'src/css/scss/*.scss',
          img: 'src/img/**/*.*',
          fonts: 'src/fonts/**/*.*'
      },
      watch: { //Пути откуда брать исходники
          html: 'src/**/*.html'
      }
};

gulp.task('build:css', function(){
  gulp.src(path.src.style)
    .pipe(concat('main.scss'))
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
.pipe(gulp.dest(path.build.css));
});

gulp.task('build:js', function(){
  gulp.src(path.src.js)
    .pipe(minifyJS())
    .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest(path.build.js))
});

gulp.task('build:html', function(){
  gulp.src(path.src.html)
    .pipe(partsHTML())
  .pipe(gulp.dest(path.build.html));
});

gulp.task('build:fonts', function(){

});


gulp.task('watcher', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('build:html');
    });
    watch([path.src.style], function(event, cb) {
        gulp.start('build:css');
    });
    watch([path.src.js], function(event, cb) {
        gulp.start('build:js');
    });
    watch([path.src.img], function(event, cb) {
        gulp.start('build:img');
    });
    watch([path.src.fonts], function(event, cb) {
        gulp.start('build:fonts');
    });
});
