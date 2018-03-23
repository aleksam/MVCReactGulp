var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('reactbuild', function () {
    return gulp.src('reactsrc/main.js')
        .pipe(webpack({ config: require('./webpack.config.js') }))
        .pipe(gulp.dest('reactsrc/dist/'));
});