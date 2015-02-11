var args = arguments[0] || {};

function onSpeechListItemClick(e){
	var item = $.speechList.sections[e.sectionIndex].items[e.itemIndex];
	Alloy.Globals.Navigator.open("window2", item.properties);
};


function listViewFilter(collection) {
	Ti.API.info(collection.models.length);
	return collection.models;
}


/**
 * Initialization Function
 */
(function init() {

	var jobs = Alloy.Collections.job;
	jobs.fetch();
	// Ti.API.info(jobs.length);

	
	// var library = Alloy.createCollection('Job'); 
	// library.fetch({
		// success : function populateList() {
			// // Ti.API.info(library.toJSON());
			// library.each(function(item) {
				// // Ti.API.info(item.get("title"));
// 
				// listViewData.push({
					// properties:{
						// job_id: item.get("job_id")
					// },
					// image: {image: "images/dojSeal.png"},
					// title: {text: item.get("title")}
				// });
// 				
			// });
// 			
// 			
		// }
	// });

})();

