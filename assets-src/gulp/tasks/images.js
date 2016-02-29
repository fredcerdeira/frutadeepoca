var gulp = require('gulp');

var src = './assets-src/images/';
var dest = './assets-src/images/';

gulp.task('images', function() {
  return gulp.src(src + '**/*.{png, jpg, jpeg, gif}')
    .pipe(gulp.dest(dest));
});