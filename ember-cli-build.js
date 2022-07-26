'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const funnel = require('broccoli-funnel');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 5,
      importBootstrapCSS: false,
    },
  });

  app.import("vendor/bootstrap/css/bootstrap.min.css");
  app.import("vendor/css/bootstrap-select.min.css");
  app.import("vendor/css/tagsinput.css");
  app.import("vendor/css/bootstrap-datepicker.css");
  app.import("vendor/css/styles.css");

  app.import("vendor/bootstrap/js/jquery-3.5.1.slim.min.js");
  app.import("vendor/js/popper.min.js");
  app.import("vendor/bootstrap/js/bootstrap.bundle.min.js");
  app.import("vendor/js/tagsinput.js");
  app.import("vendor/js/bootstrap-file.js");
  app.import("vendor/js/bootstrap-datepicker.min.js");
  app.import("vendor/js/bootstrap-datepicker.ru.min.js");
  app.import("vendor/js/bootstrap-select.min.js");

  // const css = funnel("node_modules/bootstrap/dist/css", {
  //   include: ["*.min.css"],
  //   destDir: "bootstrap/css"
  // });

  // const js = funnel("node_modules/bootstrap/dist/js", {
  //   include: ["*.js"],
  //   destDir: "bootstrap/js"
  // });

  return app.toTree();
};
