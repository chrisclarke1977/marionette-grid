define(["marionette", "js/app/grid/list/templates/listitem.tpl!text", "js/app/grid/list/templates/list.tpl!text", "js/app/grid/list/templates/empty.tpl!text"], 
  function(Marionette, listItemTpl, listTpl, noneTpl){
    var NoFruitsView = Marionette.ItemView.extend({
      template: _.template(noneTpl),
      tagName: "tr",
      className: "alert"
    }),
    item = Marionette.ItemView.extend({
      tagName: "tr",
      template: _.template(listItemTpl),

      triggers: {
        "click td a.js-show": "fruit:show",
        "click td a.js-edit": "fruit:edit",
        "click button.js-delete": "fruit:delete"
      },

      events: {
        "click": "highlightName"
      }
    }),
    list = Marionette.CompositeView.extend({
      tagName: "table",
      className: "table table-hover",
      template: listTpl,
      emptyView: NoFruitsView,
      childView: item,
      childViewContainer: "tbody",

      initialize: function(){
        this.listenTo(this.collection, "reset", function(){
          this.attachHtml = function(collectionView, childView, index){
            collectionView.$el.append(childView.el);
          }
        });
      }, 

      onRenderCollection: function(){
        this.attachHtml = function(collectionView, childView, index){
          collectionView.$el.prepend(childView.el);
        }
      } // */
    });
  
  return { Item: item, List: list };
});
