import gulp from 'gulp';
import webpack from 'webpack-stream';

const scripts = () => (gulp.src($.path.src.js)
  .pipe(webpack({
    mode: $.app.isDev ? 'development' : 'production',
    devtool: $.app.isDev ? 'inline-source-map' : false,
    output: {
      filename: 'app.min.js',
    },
  }))
  .pipe(gulp.dest($.path.dest.js))
);

export default scripts;
