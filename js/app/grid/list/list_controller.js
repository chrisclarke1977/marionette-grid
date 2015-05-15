define(["js/app/app", "js/app/grid/list/list_view", "js/app/grid/list/loading_view"], function(App, View, Loading){
  return {
    listGrid: function(){
      var loading = new Loading.Message();
      App.mainRegion.show(loading);
      require(["js/entities/fruit"], function(){
        var fetchingFruits = App.request("fruit:entities");
        
        $.when(fetchingFruits).done(function(fruits){
  //        var view = new View.List({ collection: fruits });
  //        console.log(view);
          
          var columns = [{
            "name": "guid",
            "label": "ID",
            "cell": "string",
            "editable": false
            }, {
            "name": "favoriteFruit",
            "label": "Fruit",
            "cell": "string" 
            }, {
            "name": "isActive",
            "label": "Active",
            "cell": "boolean"
          }];

          // Initialize a new Grid instance
          var grid = new Backbone.backgrid.Grid({
              columns: columns,
              collection: fruits
          });

          App.mainRegion.show(grid);
        });
      });
    }
  };
});
