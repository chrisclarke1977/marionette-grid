define(["js/app/app", "js/app/grid/show/show_view"], function(App, View){
  return {
    showGrid: function(){
      var view = new View.Message();
      App.mainRegion.show(view);
    }
  };
});
