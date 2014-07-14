define(["backbone.app", "app/layouts/common", "app/views/sidebar"], function( APP, Common, Sidebar ){

	var Layout = Common.extend({

		name: "default",

		options: {
			classNames: ""
		},
		
		initialize: function( options ) {
			
			this.set({
				sidebar: new Sidebar()
			});
			
			return Common.prototype.initialize.call( this, options );
		}
	});

	// save in the global namespace
	APP.Layouts.Default = Layout;

	return Layout;

});