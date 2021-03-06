Package.describe({
  summary: "Use Bower packages in your Meteor app",
  name: "kidovate:bower",
  git: "https://github.com/kidovate/meteor-bower.git",
  version: "0.1.17"
});

Package._transitional_registerBuildPlugin({
  name: "bower",
  use: [
    "meteor",
    "underscore@1.0.2"
  ],
  sources: [
    "plugin/bower.js",
    "plugin/handler.js",
  ],
  npmDependencies: {
    "bower": "1.3.12",
    "glob": "3.2.9"
  }
});

// XXX Tests?
