System.config({
  "baseURL": "./",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "lib/github/*.js",
    "npm:*": "lib/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.4.2",
    "babel-runtime": "npm:babel-runtime@5.4.2",
    "backbone": "github:jashkenas/backbone@1.1.2",
    "backbone.babysitter": "github:marionettejs/backbone.babysitter@0.1.6",
    "backbone.backgrid": "github:wyuenho/backgrid@0.3.5",
    "backbone.wreqr": "github:marionettejs/backbone.wreqr@1.3.2",
    "bootstrap": "shared/bootstrap",
    "core-js": "npm:core-js@0.9.9",
    "dhruvaray/backbone-associations": "github:dhruvaray/backbone-associations@0.6.2",
    "handlebars": "shared/handlebars",
    "jashkenas/backbone": "github:jashkenas/backbone@1.1.2",
    "jquery": "github:components/jquery@2.1.3",
    "marionette": "npm:backbone.marionette@2.4.1",
    "text": "github:systemjs/plugin-text@0.0.2",
    "underscore": "npm:underscore@1.8.2",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:backbone.babysitter@0.1.6": {
      "backbone": "github:jashkenas/backbone@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.8.2"
    },
    "npm:backbone.marionette@2.4.1": {
      "backbone": "github:jashkenas/backbone@1.1.2",
      "backbone.babysitter": "npm:backbone.babysitter@0.1.6",
      "backbone.wreqr": "npm:backbone.wreqr@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.8.2"
    },
    "npm:backbone.wreqr@1.3.1": {
      "backbone": "github:jashkenas/backbone@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.8.2"
    },
    "npm:core-js@0.8.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.9": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

