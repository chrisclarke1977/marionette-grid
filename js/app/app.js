define("js/app/app", 
  ["marionette"], 
  function (Marionette) {
  var App = new Marionette.Application();

  App.addRegions({
    mainRegion: "#mainRegion"
  });

  App.navigate = function(route,  options){
    options || (options = {});
    Backbone.history.navigate(route, options);
  };

  App.getCurrentRoute = function(){
    return Backbone.history.fragment
  };

  App.startSubApp = function(appName, args){
    var currentApp = appName ? App.module(appName) : null;
    if (App.currentApp === currentApp){ return; }

    if (App.currentApp){
      App.currentApp.stop();
    }

    App.currentApp = currentApp;
    if(currentApp){
      currentApp.start(args);
    }
  };

  App.on("start", function(){
    if(Backbone.history){
      require(["js/app/grid/grid_app"], function () {
        Backbone.history.start();

        if(App.getCurrentRoute() === ""){
          App.trigger("grid:list");
        }
      });
    }
  });

  return App;
});