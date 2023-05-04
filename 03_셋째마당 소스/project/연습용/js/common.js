(function(win, $){
	var $html = $("html");
	var deviceSize = {
		pc:1009,
		tablet:801,
		mobile:800
	};
}(window, jQuery));

// ----------------------------------------------------------------------------------------------------------------------------------
// simpleAjaxApp.html
var httpRequest = null;

function getXMLHttpRequest() {
	if (window.ActiveXObject) {
		try {
				return new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
				try {
					return new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e1) {
					return null;
				}
		}
	} else if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else{
		return null;
	}
}
function load(url) {
	httpRequest = getXMLHttpRequest();
	httpRequest.onreadystatechange = viewMessage;
	httpRequest.open("GET", url, true);
	httpRequest.send(null);
}
function viewMessage() {
	if (httpRequest.readyState == 4) {
		if(httpRequest.status == 200){
			alert(httpRequest.responseText);
		} else {
			alert("실패: " + httpRequest.status);
		}
	} 
}




// ----------------------------------------------------------------------------------------------------------------------------------
// httpRequest.js

function getXMLHttpRequest() {
	if (window.ActiveXObject) {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e1) {
				return null;
			}
		}
	} else if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	} else{
		return null;
	}
}

var httpRequest = null;

function sendRequest(url, params, callback, method) {
	httpRequest = getXMLHttpRequest();
	var httpMethod = method ? method:'GET';
	if(httpMethod != 'GET' && httpMethod != 'POST'){
		httpMethod = 'GET';
	}
	var httpParams = (params == null || params == '')? null : params;
	var httpUrl = url;
	if (httpMethod == 'GET' && httpParams != null) {
		httpUrl = httpUrl + "?" + httpParams;
	}
	httpRequest.open(httpMethod, httpUrl, true);
	httpRequest.sendRequestHeader(
		'Content-Type', 'application/x-www-form-urlencoded');
	httpRequest.onreadystatechange = callback;
	httpRequest.send(httpMethod == 'POST' ? httpParams : null);
}