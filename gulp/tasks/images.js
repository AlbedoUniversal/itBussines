import gulp from 'gulp';
import changed from 'gulp-changed';
import imagemin, { mozjpeg, optipng } from 'gulp-imagemin';
import rename from 'gulp-rename';
import imageminWebp from 'imagemin-webp';

const image = () => (gulp.src($.path.src.images)

  .pipe(changed($.path.dest.images))
  .pipe($.plugins.debug({ title: 'Images' }))
  .pipe($.plugins.gulpIf($.app.isProd, imagemin(
    [
      mozjpeg($.app.imagemin.jpeg),
      optipng($.app.imagemin.png),
    ],
    {
      verbose: true,
    },
  )))
  .pipe(gulp.dest($.path.dest.images))
);

const webp = () => (gulp.src(`${$.path.dest.images}/*.{png,jpg,jpeg}`)
  .pipe(changed(`${$.path.dest.images}/webp/`, { extension: '.webp' }))
  .pipe($.plugins.debug({ title: 'webp' }))
  .pipe($.plugins.gulpIf($.app.isProd, imagemin([imageminWebp({ quality: 75 })])))
  .pipe(rename({
    extname: '.webp',
  }))
)
  .pipe(gulp.dest(`${$.path.dest.images}/webp/`));

const images = gulp.series(image, webp);
export default images;
