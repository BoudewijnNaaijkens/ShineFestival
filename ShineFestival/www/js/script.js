function loadScript() {
	onDeviceReady();
};

function onDeviceReady(){
	document.getElementById('knop1').addEventListener('mouseup', pagina1Show, false);
	document.getElementById('knop2').addEventListener('mouseup', pagina2Show, false);
	document.getElementById('knop3').addEventListener('mouseup', pagina3Show, false);
	document.getElementById('knop4').addEventListener('mouseup', pagina4Show, false);
};

function pagina1Show() {
	document.getElementById('pagina1').className='show';
	document.getElementById('pagina2').className='hide';
	document.getElementById('pagina3').className='hide';
	document.getElementById('pagina4').className='hide';
	document.getElementById('knop1').className='down';
	document.getElementById('knop2').className='up';
	document.getElementById('knop3').className='up';
	document.getElementById('knop4').className='up';
};
function pagina2Show() {
	document.getElementById('pagina1').className='hide';
	document.getElementById('pagina2').className='show';
	document.getElementById('pagina3').className='hide';
	document.getElementById('pagina4').className='hide';
	document.getElementById('knop1').className='up';
	document.getElementById('knop2').className='down';
	document.getElementById('knop3').className='up';
	document.getElementById('knop4').className='up';
};
function pagina3Show() {
	document.getElementById('pagina1').className='hide';
	document.getElementById('pagina2').className='hide';
	document.getElementById('pagina3').className='show';
	document.getElementById('pagina4').className='hide';
	document.getElementById('knop1').className='up';
	document.getElementById('knop2').className='up';
	document.getElementById('knop3').className='down';
	document.getElementById('knop4').className='up';
};
function pagina4Show() {
	document.getElementById('pagina1').className='hide';
	document.getElementById('pagina2').className='hide';
	document.getElementById('pagina3').className='hide';
	document.getElementById('pagina4').className='show';
	document.getElementById('knop1').className='up';
	document.getElementById('knop2').className='up';
	document.getElementById('knop3').className='up';
	document.getElementById('knop4').className='down';
}