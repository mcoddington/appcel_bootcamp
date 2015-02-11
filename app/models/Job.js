exports.definition = {
	config: {
		columns: {
		    "title": "string",
		    "job_id": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "job"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			
			
			drop:function() {
				var db = Ti.Database.open("_alloy_");
				var result = db.execute("DELETE FROM job");
				db.close();
			}
			
		});

		return Collection;
	}
};