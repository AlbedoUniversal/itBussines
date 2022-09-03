import gulp from 'gulp';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';

const svg = () => (gulp.src(`${$.path.src.svg}`)
  .pipe(changed($.path.dest.svg))
  .pipe($.plugins.gulpIf(true, imagemin()))
  .pipe(gulp.dest($.path.dest.svg))
);

export default svg;
