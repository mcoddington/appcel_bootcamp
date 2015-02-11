// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


var API_BASE = "http://www.justice.gov/api/v1/";
var API_OBJECT = "vacancy_announcements";
var API_RETURN_TYPE = "json";

// function getAllJobs() {
	// Alloy.createCollection('Job').drop();

	/*
	 * Construct URL
	 */
	var url = API_BASE+API_OBJECT+"."+API_RETURN_TYPE+"?pagesize=10";

	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			
			if(e.success){
				var jobs = JSON.parse(this.responseText).results;
				_.each(jobs, function(jobItem){
					
					// Ti.API.info(jobItem.title);
					var jobModel = Alloy.createModel("Job", jobItem);
					jobModel.save();
				});				
			}
		},
		onerror: function(e){
			error && error(e);
		},
	});
	
	xhr.open("GET", url);
	xhr.send();	
// };



