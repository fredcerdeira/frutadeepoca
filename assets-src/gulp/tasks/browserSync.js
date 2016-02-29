var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['build'], function() {
  browserSync({

    server: {
      // src is included for use with sass source maps
      baseDir: "../"
    },
    files: [
      "../assets/css/**/*.css",
      "../assets/js/**/*.js",
      //"*.html",
      // Exclude sourcemap files
      "!assets/**.map"
    ]
  });
});
