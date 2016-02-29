var gulp         = require('gulp');
var sass         = require('gulp-sass');
//var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var notify       = require('gulp-notify');

var path = require('path');

var browserSync = require('browser-sync');

// Utils
var message = require('../utils/message');

gulp.task('sass', function () {
	gulp.src('./sass/**/*.scss')
		.pipe(sourcemaps.init())

		.pipe(sass({
				outputStyle: 'compressed',
				errLogToConsole: true
			})
			.on('error', message.error)
		)

		.pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
		
		.pipe(sourcemaps.write('./'))
		
		.on('error', message.error)

		.pipe(gulp.dest('../assets/css/'))

		.pipe(message.alert({
			message: 'Compiled <%= file.relative %>'
		}))

		.pipe(browserSync.reload({stream:true}));

		//.pipe(browserSync.stream())
		;
});


