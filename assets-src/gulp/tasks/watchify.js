var gulp           = require('gulp');
var browserify 		 = require('browserify');

gulp.task('watchify', function() {
  // Start browserify task with devMode === true
  return browserify(true);
});