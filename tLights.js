const lts = {
timer : null,
setTimer : 10,
setCaut : 5,
setStop : 10,

init : () => {
	lts.timer = setInterval(lts.tickGrn, 1000);
},

tickGrn : () => {
count = lts.setTimer;

if(count > 0) {
	display = document.querySelector('#trfTimer');
	display.textContent = 'go!';
	gTxt = document.querySelector('#grnTxt');
	gTxt.textContent = count;
	lts.setTimer--;
} else {
	gTxt.textContent = "";
	clear = clearInterval(lts.tickGrn);
	lts.tickCaut();
	}
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
	lts.tickStop();
	}
},

tickStop : () => {
count = lts.setStop;

if(count > 0) {
	display = document.querySelector('#trfTimer');
	display.textContent = 'stop';

	gTxt = document.querySelector('#redTxt');
	gTxt.textContent = count;
	lts.setStop--;
} else {
	gTxt.textContent = "";
	clear = clearInterval(lts.tickStop);
	lts.setTimer = 10;
	lts.setCaut = 5;
	lts.setStop = 10;
	lts.tickGrn();
	}
},


};

window.addEventListener('load', lts.init);
