define(["marionette", "js/app/grid/show/templates/message.tpl!text"], function(Marionette, messageTpl){
  return {
    Message: Marionette.ItemView.extend({
      template: messageTpl
    })
  };
});
