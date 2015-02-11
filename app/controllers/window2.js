var args = arguments[0] || {};

if(args && args.data){
	$.speechTitle.text = args.data.title;
	$.speechBody.text = args.data.body;
}

function closeThis() {
	$.window2.close();
}


