var gulp        = require('gulp');
var browserSync = require('browser-sync');

var watch = {
  js:   ['./js/**/*.js'],
  sass: ['./sass/**/*.scss'],
  img:  ['./img/**']
};

gulp.task('watch', ['watchify','browserSync'], function() {

  //gulp.task('js-watch', ['js'], browserSync.reload);
  gulp.watch(watch.sass, ['sass']);


});
