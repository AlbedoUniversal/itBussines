import gulp from 'gulp';
import changed from 'gulp-changed';
import ttf2woff2 from 'gulp-ttf2woff2';

const fonts = () => (gulp.src(`${$.path.src.fonts}`)
  .pipe(changed($.path.dest.fonts))
  .pipe(ttf2woff2())
  .pipe(gulp.dest($.path.dest.fonts))
);

export default fonts;
