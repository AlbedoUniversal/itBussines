import gulp from "gulp";
import include from "gulp-file-include";
import replace from "gulp-replace";
import webpHtml from "gulp-webp-html";

const html = () =>
  gulp
    .src($.path.src.html)
    .pipe(include())
    .pipe(replace(/@img\//g, "images/"))
    .pipe(webpHtml())
    .pipe(gulp.dest($.path.dest.html));

export default html;
