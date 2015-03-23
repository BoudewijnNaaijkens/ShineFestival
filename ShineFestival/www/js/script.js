function loadScript() {
	//document.addEventListener('deviceready', onDeviceReady, false);
	onDeviceReady();
};

function onDeviceReady(){
	document.getElementById('btn1').addEventListener('mouseup', page1Show, false);
	document.getElementById('btn2').addEventListener('mouseup', page2Show, false);
	document.getElementById('btn3').addEventListener('mouseup', page3Show, false);
	document.getElementById('btnAudio').addEventListener('mouseup', recordAudio, false);
	startWatch();
};

// navigatie
function page1Show() {
	document.getElementById('page1').className='show';
	document.getElementById('page2').className='hide';
	document.getElementById('page3').className='hide';
	document.getElementById('btn1').className='down';
	document.getElementById('btn2').className='up';
	document.getElementById('btn3').className='up';
};
function page2Show() {
	document.getElementById('page1').className='hide';
	document.getElementById('page2').className='show';
	document.getElementById('page3').className='hide';
	document.getElementById('btn1').className='up';
	document.getElementById('btn2').className='down';
	document.getElementById('btn3').className='up';
};
function page3Show() {
	document.getElementById('page1').className='hide';
	document.getElementById('page2').className='hide';
	document.getElementById('page3').className='show';
	document.getElementById('btn1').className='up';
	document.getElementById('btn2').className='up';
	document.getElementById('btn3').className='down';
};

// microfoon
function recordAudio(){
	navigator.device.capture.captureAudio(captureSuccess, captureError);
};
function captureSuccess(mediaFiles) { 
	alert('Verzonden');
	document.getElementById('instructies-vervolg').className='show';
};
function captureError() {
	alert('Er ging iets fout bij het opnemen.');
};

// compas
var watchID = null;

function startWatch() {
	var options = { frequency: 5 };
	watchID = navigator.compass.watchHeading(onSuccess, onError, options);
};
function stopWatch() {
	if(watchID) {
		navigator.compass.clearWatch(watchID);
		watchID = null; 
	}
};
function onSuccess(heading) {
	var wijzer = document.getElementById('wijzer');
	var transform = 'rotate(-' + heading.magneticHeading + 'deg)';
	wijzer.style.webkitTransform = transform;
};
function onError(compassError) {
	alert('Compas fout: ' + compassError.code);
};