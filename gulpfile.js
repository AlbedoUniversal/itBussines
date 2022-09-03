import gulp from 'gulp';
import debug from 'gulp-debug';
import gulpIf from 'gulp-if';
import app from './gulp/config/app.js';
import path from './gulp/config/path.js';
import clean from './gulp/tasks/clean.js';
import fonts from './gulp/tasks/fonts.js';
import html from './gulp/tasks/html.js';
import images from './gulp/tasks/images.js';
import scss from './gulp/tasks/sass.js';
import scripts from './gulp/tasks/scripts.js';
import server from './gulp/tasks/server.js';
import svg from './gulp/tasks/svg.js';

app.setEnv();

global.$ = {
  plugins: {
    gulpIf,
    debug,
  },
  path,
  app,
};

function watcher() {
  gulp.watch(`${path.watch.js}`, scripts);
  gulp.watch(`${path.watch.html}`, html);
  gulp.watch(`${path.watch.images}`, images);
  gulp.watch(`${path.watch.svg}`, svg);
  gulp.watch(`${path.watch.scss}`, scss);
}

const mainTasks = gulp.parallel(html, scss, scripts, fonts, images, svg);

const build = gulp.series(clean, mainTasks);
const dev = gulp.series(build, gulp.parallel(watcher, server));
const test = gulp.series(clean, images, watcher);

export { test };
export { scss };
export { dev };

export default app.isProd ? build : dev;
