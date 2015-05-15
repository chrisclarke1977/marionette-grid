define(["js/app/app"], function(App){
 App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){
    Entities.Fruit = Backbone.Model.extend({
    defaults: {
        "guid": "",
        "isActive": "",
        "favoriteFruit": ""
      }
    });

    Entities.FruitCollection = Backbone.Collection.extend({
      url: "fruits.json",
      model: Entities.Fruit,
      comparator: "favoriteFruit"
    });

    var API = {
      getFruitEntities: function(){
        var Fruits = new Entities.FruitCollection();
        var defer = $.Deferred();
        Fruits.fetch({
          success: function(data){
            defer.resolve(data);
          }
        });
        return defer.promise();
      },

      getFruitEntity: function(FruitId){
        var Fruit = new Entities.Fruit({id: FruitId});
        var defer = $.Deferred();
        Fruit.fetch({
            success: function(data){
              defer.resolve(data);
            },
            error: function(data){
              defer.resolve(undefined);
            }
        });
        return defer.promise();
      }
    };

    App.reqres.setHandler("fruit:entities", function(){
      return API.getFruitEntities();
    });

    App.reqres.setHandler("fruit:entity", function(id){
      return API.getFruitEntity(id);
    });

    App.reqres.setHandler("fruit:entity:new", function(id){
      return new Entities.Fruit();
    });
  });

  return ;
});