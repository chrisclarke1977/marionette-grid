define(["js/app/app", "js/app/grid/edit/edit_view"], function(App, View){
  return {
    editGrid: function(){
      var view = new View.Message();
      App.mainRegion.show(view);
    }
  };
});
