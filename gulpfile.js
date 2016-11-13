var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');

// HTML Minification
gulp.task('html', () => {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

// Resize images
gulp.task('images', () => {
	return gulp.src(['src/images/*.*'])
		.pipe(imageResize({
			width:300,
			height:300
		}))
		.pipe(gulp.dest('dist/images'));
});

// watch files for changes and reload
gulp.task('serve', () => {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });
});

// Default Task
gulp.task('default', ['html', 'images']);
