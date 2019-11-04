const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const util = require('gulp-util');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');

const isProduction = util.env.production;
const paths = {
  src: './src/lean.scss',
  dist: './website/static/css',
  sass: './src/**/*.scss'
}

gulp.task('sass', () => {
  return gulp
    .src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: isProduction ? 'compressed' : 'expanded',
      precision: 9
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename({ suffix: isProduction ? '.min' : '' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('clean', () => {
  return del([`${paths.dist}/lean.*`]);
});

gulp.task('watch', () => {
  gulp.watch(paths.sass, done => {
    gulp.series(['sass'])(done);
  });
});

gulp.task('default', gulp.series(['clean', 'sass']));
