define(["backbone", "backbone.app"], function( Backbone, APP ){

	var Parent = APP.View;
	
	var View = Parent.extend({

		el: ".sidebar",
		
		/*options: {
			monitor: ["touch"]
    	},*/
		
		events: {
			// "touch #clickme": "touchAlert",
			"click #clickme": "clickAlert",
			// "touch": "touchAlert"
		},
		
		initialize: function( options ){
			// console.log("I'm in sidebar");
			return Parent.prototype.initialize.call(this, options);
		},
		
		/*touchstart: function( e ){
			alert("hey");
		},*/
		
		clickAlert: function(e) {
			e.preventDefault();
			alert("im touched 1");
		},
	});
	
	// save in the global namespace
	APP.Views.Sidebar = View;

	return View;

});
