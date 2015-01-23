var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('compile-jade', function() {
  console.log('compile-jade');
  gulp.src('./jade/**/[!^_]*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch-jade', function() {
  gulp.watch('jade/**/*.jade', ['compile-jade']);
});
gulp.task('default', ['watch-jade']);