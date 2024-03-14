var gulp = require('gulp');
var build = require('./gulp/build');
var serve = require('./gulp/server');

// gulp.task('serve', gulp.series('clean', 'build'));
exports.build = gulp.series('build')
exports.serve = gulp.series('serve')
