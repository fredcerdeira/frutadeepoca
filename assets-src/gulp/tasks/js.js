var gulp = require('gulp');

// Plugins
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var assign = require('lodash.assign');
var source = require('vinyl-source-stream');

// Utils
var message = require('../utils/message');

var path = require('path');

var browserSync = require('browser-sync');

var files = {
  src: [
	'app',
	'base'
  ],
  base_src: [

  ],
  dest:'../assets/js'
};
var _bundles_tasks = [];

files.src.forEach(function (src, index) {

	var customOpts = {
		entries: ['./js/' + src + '.js'],
		debug: true
	};
	var opts = assign({}, watchify.args, customOpts);
	var b = watchify(browserify(opts));
	b.on('update', bundle); // on any dep update, runs the bundler
	b.on('log', message.log); // output build logs to terminal

	function bundle() {
		return b.bundle()

			// desktop notifications
			.on("error", message.error)

			.pipe(source(src + '.js'))

			// optional, remove if you don't need to buffer file contents
			.pipe(buffer())
			.pipe(uglify({
				mangle: false
			}))


			.pipe(sourcemaps.init({loadMaps: true}))
			// .pipe(uglify({
			// 	mangle: false
			// }))
			.pipe(sourcemaps.write('./', {
				includeContent:true,
				sourceRoot:'/assets-src/js'
			}))


			.pipe(gulp.dest(files.dest))

			.pipe(message.alert({
				message: 'Compiled <%= file.relative %>'
			}))

			.pipe(browserSync.reload({stream:true}));

			;
	}

	gulp.task('js-' + src, bundle);

	_bundles_tasks.push('js-' + src);
});




gulp.task('js', _bundles_tasks);
