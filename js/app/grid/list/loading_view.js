define(["marionette", "js/app/grid/list/templates/loading.tpl!text"], function(Marionette, loadingTpl){
  return {
    Message: Marionette.ItemView.extend({
      template: loadingTpl
    })
  };
});
