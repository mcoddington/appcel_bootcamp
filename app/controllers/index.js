var args = arguments[0] || {};

/**
 * Global Navigation Handler
 * Assigning the Navigator object to Alloy.Globals, allows it to be accessible from
 * any location in your app
 */
Alloy.Globals.Navigator = {
	
	/**
	 * Handle to the Navigation Controller
	 */
	navGroup: $.index,
	
	open: function(controller, payload){
		var win = Alloy.createController(controller, payload || {}).getView();
		
		if(OS_IOS){
			$.index.openWindow(win);
		}
		else {
			
			// added this property to the payload to know if the window is a child
			if (payload.displayHomeAsUp){
				
				win.addEventListener('open',function(evt){
					var activity=win.activity;
					activity.actionBar.displayHomeAsUp=payload.displayHomeAsUp;
					activity.actionBar.onHomeIconItemSelected=function(){
						evt.source.close();
					};
				});
			}
			win.open();
		}
	}
};

$.index.open();

