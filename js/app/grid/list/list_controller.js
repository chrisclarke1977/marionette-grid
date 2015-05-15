define(["js/app/app", "js/app/grid/list/list_view"], function(App, View){
  return {
    listGrid: function(){
      var view = new View.Message();
      App.mainRegion.show(view);
      
        var fetchingFruits = App.request("fruit:entities");

    }
  };
});
