var toRemove = "";
var triesNonio = 0;
var triesCookies = 0;
var sucCount = 0;
window.onload = function removeAll() {
	remCookies();
	if (document.URL.indexOf("aquelamaquina.pt") >= 0) {
		toRemove = ["layer_gatting"];
		removeIdNONIO(toRemove);
	} else if (document.URL.indexOf("autoportal.iol.pt") >= 0) {
		toRemove = ["nonioBox"];
		removeClassNONIO(toRemove);
	} else if (document.URL.indexOf("classificadoscm.pt") >= 0) {
		toRemove = ["sso_layer"];
		removeIdNONIO(toRemove);
	} else if (document.URL.indexOf("cmjornal.pt") >= 0) {
		toRemove = ["layer_gatting", "sso_layer"];
		removeIdNONIO(toRemove);
	} else if (document.URL.indexOf("dinheirovivo.pt") >= 0) {
		var iframes = document.querySelectorAll('iframe');
		for (var i = 0; i < iframes.length; i++) {
			iframes[i].parentNode.removeChild(iframes[i]);
		}
	} else if (document.URL.indexOf("dn.pt") >= 0) {
		toRemove = ["tp-modal", "tp-backdrop tp-active"];
		removeClassNONIO(toRemove);
	} else if (document.URL.indexOf("expresso.pt") >= 0) {
		toRemove = ["imp-content-gate-root"];
		removeIdNONIO(toRemove);
	} else if (document.URL.indexOf("flash.pt") >= 0) {
		toRemove = ["layer_gatting"];
		removeIdNONIO(toRemove);
	} else if (document.URL.indexOf("jn.pt") >= 0) {
		toRemove = ["tp-modal", "tp-backdrop tp-active"];	
		removeClassNONIO(toRemove);
	} else if (document.URL.indexOf("maisfutebol.iol.pt") >= 0) {
		toRemove = ["nonioBox"];
		removeClassNONIO(toRemove);
	} else if (document.URL.indexOf("maxima.pt") >= 0) {
		toRemove = ["layer_gatting", "sso_layer"];
		removeIdNONIO(toRemove);
	} else if (document.URL.indexOf("megahits.sapo.pt") >= 0) {
		toRemove = ["wrapperContentGatingNonio"];
		removeIdNONIO(toRemove);
	} else if (document.URL.indexOf("motor24.pt") >= 0) {
		var iframes = document.querySelectorAll('iframe');
		for (var i = 0; i < iframes.length; i++) {
			iframes[i].parentNode.removeChild(iframes[i]);
		}
	} else if (document.URL.indexOf("noticiasmagazine.pt") >= 0) {
		var iframes = document.querySelectorAll('iframe');
		for (var i = 0; i < iframes.length; i++) {
			iframes[i].parentNode.removeChild(iframes[i]);
		}
	} else if (document.URL.indexOf("radiocomercial.iol.pt") >= 0) {
		toRemove = ["nonioBox"];
		removeClassNONIO(toRemove);
	} else if (document.URL.indexOf("selfie.iol.pt") >= 0) {
		toRemove = ["nonioBox"];
		removeClassNONIO(toRemove);
	} else if (document.URL.indexOf("smoothfm.iol.pt") >= 0) {
		toRemove = ["nonioBox"];
		removeClassNONIO(toRemove);
	} else if (document.URL.indexOf("tvi.iol.pt") >= 0) {
		toRemove = ["nonioBox"];
		removeClassNONIO(toRemove);
	} else if (document.URL.indexOf("tvi24.iol.pt") >= 0) {
		toRemove = ["nonioBox"];
		removeClassNONIO(toRemove);
	};
		
		
	/*	
	sic
	imp-content-gate-root
	
	jornaldenegocios.pt
	login id = sso_layer	
	*/
	
	
};
function removeClass(elemName) {
	var elem = document.getElementsByClassName(elemName);
	elem[0].remove();
};
function removeClassNONIO(remArray) {
	console.log("REMOVE NONIO - tries=" + triesNonio);
	triesNonio = triesNonio + 1;
	var i;
	for (i = 0; i < remArray.length; i++) {
		try {
			removeClass(remArray[i]);
			sucCount = sucCount + 1;
		} catch (erro) {
			console.log("ERRO=" + erro);
		}
	}

	if (sucCount >= remArray.length) {
		document.body.style.cssText = 'overflow:auto !important';
		document.getElementsByTagName('html')[0].style.overflow = "auto";
		triesNonio = 0;
		sucCount = 0;
	} else {
		if (triesNonio < 5) {
			setTimeout(function() {
				removeClassNONIO(remArray);
			}, 500);
		}	
	}	
};
function removeIdNONIO(remArray) {
	console.log("REMOVE NONIO - tries=" + triesNonio);
	triesNonio = triesNonio + 1;
	var i;
	for (i = 0; i < remArray.length; i++) {
		try {
			document.getElementById(remArray[i]).remove();
			sucCount = sucCount + 1;
		} catch (erro) {
			console.log("ERRO=" + erro);
		}
	}
	
	if (sucCount >= remArray.length) {
		document.body.style.cssText = 'overflow:auto !important';
		document.getElementsByTagName('html')[0].style.overflow = "auto";
		triesNonio = 0;
		sucCount = 0;
	} else {
		if (triesNonio < 5) {
			setTimeout(function() {
				removeIdNONIO(remArray);
			}, 500);
		}
	}
};
function remCookies() {
	console.log("REMOVE COOKIES - tries=" + triesCookies);
	triesCookies = triesCookies + 1;
	try {
		removeClass("qc-cmp-ui-container qc-cmp-showing");
		document.body.style.overflow = "auto";
		triesCookies = 0;
	} catch(erro) {
		console.log("erro=" + erro);
		if (triesCookies < 5) {
			setTimeout(function() {
				remCookies();
			}, 500);
		}
	}
}