'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const sh = require('shelljs');
const inject = require('gulp-inject');
const jade = require('gulp-jade');
const runSequence = require('run-sequence');
const webserver = require('gulp-webserver');

const paths = {
  jade: ['./jade/**/*.jade'],
  javascript: [
    './www/**/*.js',
    '!./www/js/app.js',
    '!./www/js/directives.js'
  ],
  css: [
    './www/**/*.css'
  ]
};

gulp.task('default', ['build']);

gulp.task('build', done => {
  runSequence('jade', 'index', done);
});

gulp.task('index', () => {
  return gulp.src('./www/index.html')
    .pipe(inject(gulp.src(paths.javascript,
      {read: false}), {relative: true}))
    .pipe(inject(gulp.src(paths.css,
      {read: false}), {relative: true}))
    .pipe(gulp.dest('./www'));
});

gulp.task('jade', done => {
  gulp.src(paths.jade)
    .pipe(jade())
    .pipe(gulp.dest('./www'))
    .on('end', done);
});

gulp.task('watch', () => {
  gulp.watch([
    paths.jade,
    paths.javascript,
    paths.css
  ], ['build']);
});

gulp.task('serve', ['build'], () => {
  gulp.src('www')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('install', ['git-check']);

gulp.task('git-check', done => {
  if (!sh.which('git')) {
    console.log(
      `   ${gutil.colors.red('Git is not installed.')}
                Git, the version control system, is required to download Ionic.
                Download git here: ${gutil.colors.cyan('http://git-scm.com/downloads')}.
                Once git is installed, run '${gutil.colors.cyan('gulp install')}' again.
            `
    );
    process.exit(1);
  }
  done();
});