/**
 * App.js the entry marionette application 
 */
define(function (require, exports, module) {
 	window.require = require;
	Backbone    = require('backbone');
	Backbone.$  = require('jquery');
	_           = require('underscore');
	Backbone.wreqr = require("backbone.wreqr");
	Backbone.babysitter = require("backbone.babysitter");
	Backbone.backgrid = require("backbone.backgrid");

	require(["marionette", 
		"js/app/app"], 
		function (Marionette, App) {
			App.start();
			return App;
	});
});
