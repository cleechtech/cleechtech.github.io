var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('browserify', function(){
    return browserify({
            entries: ['./js/main.js']
        })
        .bundle()
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks
        .pipe(gulp.dest('./build/'));
});
