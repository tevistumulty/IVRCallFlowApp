"use strict";

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
			return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

function getQueryVariableEsc(variable) {
    var query = window.location.search.substring(1);
    //alert(query);
	var vars = query.split("&amp;");
	//alert(vars);
    for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
        //alert(pair);
		if (decodeURIComponent(pair[0]) == variable) {
			return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

function printAudit(text) {
	var newString = document.getElementById("txtAudit").value + text + "|";
	document.cookie = "audit=" + newString;
}
