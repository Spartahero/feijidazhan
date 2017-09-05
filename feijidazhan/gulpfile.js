var gulp = require("gulp");
var minifyCss = require('gulp-minify-css'); 
gulp.task('cssTask', function(){
	gulp.src('css/*')
	.pipe(minifyCss())
	.pipe(gulp.dest('dest/css'));
});
gulp.task('default', ['cssTask']);