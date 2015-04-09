function loadScript() {
	document.addEventListener('deviceready', onDeviceReady());
};

function onDeviceReady(){
	document.getElementById("btnEi").addEventListener("touchend", pagina1Show, false);
	document.getElementById("btnShine").addEventListener("touchend", pagina2Show, false);
	document.getElementById("btnMic").addEventListener("touchend", pagina3Show, false);
	document.getElementById("btnKompas").addEventListener("touchend", pagina4Show, false);
	document.getElementById("btnColofon").addEventListener("touchend", pagina5Show, false);
	initRecording();
};

function pagina1Show() {
	document.getElementById("pagina1").className="show";
	document.getElementById("pagina2").className="hide";
	document.getElementById("pagina3").className="hide";
	document.getElementById("pagina4").className="hide";
	document.getElementById("pagina5").className="hide";
	document.getElementById("btnEi").className="down";
	document.getElementById("btnShine").className="up";
	document.getElementById("btnMic").className="up";
	document.getElementById("btnKompas").className="up";
	document.getElementById("btnColofon").className="up";
};
function pagina2Show() {
	document.getElementById("pagina1").className="hide";
	document.getElementById("pagina2").className="show";
	document.getElementById("pagina3").className="hide";
	document.getElementById("pagina4").className="hide";
	document.getElementById("pagina5").className="hide";
	document.getElementById("btnEi").className="up";
	document.getElementById("btnShine").className="down";
	document.getElementById("btnMic").className="up";
	document.getElementById("btnKompas").className="up";
	document.getElementById("btnColofon").className="up";
};
function pagina3Show() {
	document.getElementById("pagina1").className="hide";
	document.getElementById("pagina2").className="hide";
	document.getElementById("pagina3").className="show";
	document.getElementById("pagina4").className="hide";
	document.getElementById("pagina5").className="hide";
	document.getElementById("btnEi").className="up";
	document.getElementById("btnShine").className="up";
	document.getElementById("btnMic").className="down";
	document.getElementById("btnKompas").className="up";
	document.getElementById("btnColofon").className="up";
};
function pagina4Show() {
	document.getElementById("pagina1").className="hide";
	document.getElementById("pagina2").className="hide";
	document.getElementById("pagina3").className="hide";
	document.getElementById("pagina4").className="show";
	document.getElementById("pagina5").className="hide";
	document.getElementById("btnEi").className="up";
	document.getElementById("btnShine").className="up";
	document.getElementById("btnMic").className="up";
	document.getElementById("btnKompas").className="down";
	document.getElementById("btnColofon").className="up";
};
function pagina5Show() {
	document.getElementById("pagina1").className="hide";
	document.getElementById("pagina2").className="hide";
	document.getElementById("pagina3").className="hide";
	document.getElementById("pagina4").className="hide";
	document.getElementById("pagina5").className="show";
	document.getElementById("btnEi").className="up";
	document.getElementById("btnShine").className="up";
	document.getElementById("btnMic").className="up";
	document.getElementById("btnKompas").className="up";
	document.getElementById("btnColofon").className="down";
};