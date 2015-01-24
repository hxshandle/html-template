var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

gulp.task('compile-jade', function() {
  console.log('compile-jade');
  gulp.src('./jade/**/[!^_]*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('compile-scss', function() {
  console.log('compile-scss');
  gulp.src('./scss/**/[!^_]*.scss')
    .pipe(sass())
    //.pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('css'));
});

gulp.task('styles', function() {
  return gulp.src('scss/**/[!^_]*.scss')
    .on('data', function(file) {
      if (process.platform == "win32") {
        file.path = path.relative(".", file.path);
        file.path = file.path.replace(/\\/g, "/");
      }
    }).pipe(sass({
      sourceComments: 'map'
    }))
    .pipe(gulp.dest('.tmp/styles'));
});


gulp.task('watch-jade', function() {
  gulp.watch('jade/**/*.jade', ['compile-jade']);
});

gulp.task('watch-scss', function() {
  gulp.watch('scss/**/*.scss', ['compile-scss']);
});

gulp.task('default', ['watch-jade','watch-scss']);