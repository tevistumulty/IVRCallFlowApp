"use strict";

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
			return decodeURIComponent(pair[1]);
        }//end if
    }//end for
    console.log('Query variable %s not found', variable);
}//end getQueryVariable

function getQueryVariableEsc(variable) {
    var query = window.location.search.substring(1);
	var vars = query.split("&amp;");
    for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		if (decodeURIComponent(pair[0]) == variable) {
			return decodeURIComponent(pair[1]);
        }//end if
    }//end for
    console.log('Query variable %s not found', variable);
}//end getQueryVariableEsc

function printAudit(text) {
	var newString = document.getElementById("txtAudit").value.replace(/\n/g, "|") + text + "|";
	document.cookie = "audit=" + newString;
}//end printAudit
