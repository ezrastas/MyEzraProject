

var gulp = require('gulp'),
    watch = require('gulp-watch'),

    minifyCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),

    partsHTML = require('gulp-rigger'),

    path = {
      build: {
          html: ['build/index.html'],
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
});

gulp.task('build:html', function(){
});

gulp.task('build:fonts', function(){

});

gulp.task("watcher", function(){
	return watch([
		path.src,
	],
  ["build:css", "build:js", "build:fonts", "build:examples.html"])
});