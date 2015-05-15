define(["js/app/app"], function(App){
  App.module("GridApp", function(GridApp, App, Backbone, Marionette, $, _){
    GridApp.startWithParent = false;

    GridApp.onStart = function(){
      console.log("starting GridApp");
    };

    GridApp.onStop = function(){
      console.log("stopping GridApp");
    };
  });

  App.module("Routers.GridApp", function(GridAppRouter, App, Backbone, Marionette, $, _){
    GridAppRouter.Router = Marionette.AppRouter.extend({
      appRoutes: {
        "grids(/filter/criterion::criterion)": "listgrid",
        "grid/:id": "showGrid",
        "grid/:id/edit": "editGrid"
      }
    });

    var executeAction = function(action, arg){
      App.startSubApp("GridApp");
      action(arg);
      // App.execute("set:active:header", "grid");
    };

    var API = {
      listgrid: function(criterion){
        require(["js/app/grid/list/list_controller"], function(ListController){
          executeAction(ListController.listGrid, criterion);
        });
      },

      showGrid: function(id){
        require(["js/app/grid/show/show_controller"], function(ShowController){
          executeAction(ShowController.showGrid, id);
        });
      },

      editGrid: function(id){
        require(["js/app/grid/edit/edit_controller"], function(EditController){
          executeAction(EditController.editGrid, id);
        });
      }
    };

    App.on("grid:list", function(){
      App.navigate("grid");
      API.listgrid();
    });

    App.on("grid:filter", function(criterion){
      if(criterion){
        App.navigate("grid/filter/criterion:" + criterion);
      }
      else{
        App.navigate("grid");
      }
    });

    App.on("grid:view", function(id){
      App.navigate("grid/" + id);
      console.log("Route Grid View?");
      API.showGrid(id);
    });

    App.on("grid:edit", function(id){
      App.navigate("grid/" + id + "/edit");
      API.editGrid(id);
    });

    App.addInitializer(function(){
      new GridAppRouter.Router({
        controller: API
      });
    });
  });

  return App.GridAppRouter;
});
