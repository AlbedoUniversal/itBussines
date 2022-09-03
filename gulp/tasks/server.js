import browserSync from 'browser-sync';

const server = (done) => {
  browserSync.create().init({
    server: {
      baseDir: $.path.dest.root,
    },
    files: [
      `${$.path.dest.html}/*.html`,
      `${$.path.dest.css}/*.css`,
      `${$.path.dest.js}/*.js`,
      {
        match: [`${$.path.dest.images}`],
        fn() {
          this.reload();
        },
      },
    ],
    open: false,
    notify: false,
  });
  done();
};

export default server;
