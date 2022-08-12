const lts = {
timer : null,
setTimer : 10,
setCaut : 5,

init : () => {
	trafficLights = lts.decrs();
},

decrs : () => {
	lts.timer = setInterval(lts.tick, 1000);
},

tick : () => {
	count = lts.setTimer;

	if(count > 0) {
		display = document.querySelector('#trfTimer');
		display.textContent = 'go!';

		gTxt = document.querySelector('#grnTxt');
		gTxt.textContent = count;
		lts.setTimer--;
	} else {
		gTxt.textContent = "";
		clear = clearInterval(lts.tick);
		lts.tickCaut();
	};


},

tickCaut : () => {
	count = lts.setCaut;

	if(count > 0) {
		display = document.querySelector('#trfTimer');
		display.textContent = 'caution';

		gTxt = document.querySelector('#ylwTxt');
		gTxt.textContent = count;
		lts.setCaut--;
	} else {
		gTxt.textContent = "";
		clear = clearInterval(lts.tickCaut);
		//lts.tickStop();
	};
},

//end
};

window.addEventListener('load', lts.init);