var gulp = require('gulp');
var build = require('./gulp/build');

gulp.task('serve', gulp.series('clean', 'build'));
