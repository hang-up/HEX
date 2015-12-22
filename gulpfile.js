var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var debug = require('gulp-debug');

gulp.task("js", function() {
  return browserify("app/app.js")
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source("app.min.js"))
    .pipe(gulp.dest("dist/scripts"));
  });

gulp.task("watch", function() {
  gulp.watch('app/**/**.js', ['js']);
});
