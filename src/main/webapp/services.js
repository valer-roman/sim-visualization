var serverUrl = "server/";

function ajaxCall(service, callback, theData, async) {
	if (async === undefined) {
		async = true;
	}
	var params = { url: serverUrl + service,
			contentType: "application/json; charset=utf-8",
			type: "POST",
			data: theData, 
			dataType: "json", 
			success: callback,
			async: async
	};
	$.ajax(params); 	
}

function executeSparql(callback, data, async) {
	ajaxCall("sparql", callback, data, async);
}

function getChilds(node, callback, async) {
	executeSparql(callback, node, async);
}
