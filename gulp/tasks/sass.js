import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import gruopMedia from 'gulp-group-css-media-queries';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import gulpSass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import webpCss from 'gulp-webp-css';
import dartSass from 'sass';

const sass = gulpSass(dartSass);

const scss = () => (gulp.src($.path.src.scss, { sourcemaps: $.app.isDev })
  .pipe(sassGlob())
  .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
  .pipe(replace(/@img\//g, '../images/'))
  .pipe($.plugins.gulpIf($.app.isProd, webpCss()))
  .pipe($.plugins.gulpIf($.app.isProd, gruopMedia()))
  .pipe($.plugins.gulpIf($.app.isProd, autoprefixer({
    overrideBrowserlist: ['last 2 version'],
    cascade: true,
  })))
  .pipe(rename({ basename: 'style' }))
  .pipe(gulp.dest($.path.dest.css))
  .pipe(csso())
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest($.path.dest.css, { sourcemaps: $.app.isDev }))
);

export default scss;
