var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat');

gulp.task('browserify', function(){
	// single entry point
	gulp.src(['js/main.js'])
		.pipe(browserify({
			insertGlobals: true,
			debug: true
		}))
		// Build single file
		.pipe(concat('bundle.js'))
		// output to dist/ ..
		.pipe(gulp.dest('dist/js'))
});

gulp.task('views', function(){
	// get index.html and put into dist
	gulp.src('./index.html').pipe(gulp.dest('dist/'))

	// put other html files in dist
	gulp.src('./views/**/*').pipe(gulp.dest('dist/views/'))
})

// watch js changes
gulp.task('watch', function(){
	gulp.watch([
		'js/*.js',
		'js/**/*.js'
	], [
		'browserify'
	])
});

// watch html changes
gulp.watch([
	'./index.html',
	'./views/**/*.html'
	], [
		'views'
]);