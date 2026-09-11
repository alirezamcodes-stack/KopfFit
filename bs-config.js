module.exports = {
  proxy: "http://127.0.0.1:5000",

  files: [
    "templates/**/*.html",
    "static/css/**/*.css",
    "static/js/**/*.js",
  ],

  port: 3000,
  open: true,
  notify: false,
  ui: false,
  online: false,
  injectChanges: true,
  reloadDelay: 0,
  reloadDebounce: 50,
  reloadThrottle: 50,
  watchOptions: {
    ignoreInitial: true,
  },
};
