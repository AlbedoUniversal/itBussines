import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const srcPath = 'src';
const destPath = 'dist';

const path = {
  src: {
    root: `${srcPath}/**/*.*`,
    html: `${srcPath}/html/index.html`,
    scss: `${srcPath}/scss/main.scss`,
    js: `${srcPath}/js/scripts.js`,
    images: `${srcPath}/assets/images/**/*.*`,
    svg: `${srcPath}/assets/svg/**/*.*`,
    fonts: `${srcPath}/assets/fonts/*.ttf`,
  },
  watch: {
    html: `${srcPath}/html/**/*.html`,
    scss: `${srcPath}/scss/**/*.scss`,
    js: `${srcPath}/js/**/*.js`,
    images: `${srcPath}/assets/images/**/*.*`,
    svg: `${srcPath}/assets/svg/**/*.*`,
  },
  dest: {
    root: destPath,
    html: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    images: `${destPath}/images`,
    svg: `${destPath}/svg`,
    fonts: `${destPath}/fonts`,
  },
  rootFolder,
  srcPath,
};

export default path;
