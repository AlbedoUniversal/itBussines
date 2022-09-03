const app = {
  imagemin: {
    jpeg: { quality: 75, progressive: true },
    png: { optimizationLevel: 3 },
    svg: {},
    webp: {},
  },
  setEnv() {
    this.isProd = process.argv.includes('--P');
    this.isDev = !this.isProd;
  },
};

export default app;
