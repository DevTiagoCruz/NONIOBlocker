var triesCookies = 0;
var triesNonio = 0;
window.onload = function removeAll() {
	if(document.URL.indexOf("cmjornal.pt") >= 0){ 
		remCookiesCM();
		remNonio();
	}
};

function remNonio() {
	console.log("REMOVE NONIO - https://www.cmjornal.pt - tries=" + triesNonio);
	triesCookies = triesCookies + 1;
	try {
		document.getElementById("layer_gatting").remove();
		document.body.style.overflow = "auto";
		document.getElementsByTagName('html')[0].style.overflow = "auto";
		triesCookies = 0;
	} catch(erro) {
		console.log("erro=" + erro);
		if (triesCookies < 5) {
			setTimeout(function() {
				remNonio();
			}, 500);
		}
	}

};
function remCookiesCM() {
	console.log("REMOVE COOKIES - https://www.cmjornal.pt - tries=" + triesCookies);
	triesCookies = triesCookies + 1;
	try {
		var elem = document.getElementsByClassName("qc-cmp-ui-container qc-cmp-showing");
		elem[0].remove();
		document.body.style.overflow = "auto";
		triesCookies = 0;
	} catch(erro) {
		console.log("erro=" + erro);
		if (triesCookies < 5) {
			setTimeout(function() {
				remCookiesCM();
			}, 500);
		}
	}
}
