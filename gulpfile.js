var gulp = require('gulp');
var mocha = require('gulp-mocha');
var plumber = require('gulp-plumber');

// Initialize the babel transpiler so ES2015 files gets compiled
// when they're loaded
require('babel-core/register');

gulp.task('test:back:set-1', function (cb) {
  var mochaErr;

  gulp.src('lib/back/set-1/**/test.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function (err) {
      // console.log(err);
      mochaErr = err;
    })
    .on('end', function () {
      cb(mochaErr);
    });
});

gulp.task('validate:back:set-1', function (cb) {
  var mochaErr;

  gulp.src('validation-tests/back/set-1/**/validation.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function (err) {
      // console.log(err);
      mochaErr = err;
    })
    .on('end', function () {
      cb(mochaErr);
    });
});

gulp.task('complete:back:set-1', ['test:back:set-1', 'validate:back:set-1']);
