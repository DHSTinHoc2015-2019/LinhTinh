document.addEventListener("DOMContentLoaded", function(){
	var x = document.getElementById('khoicd');
	var flag = true;
	var y = setInterval(function(){
		if(flag){
			flag = false;
			x.classList.remove('chaylui');
			x.classList.add('chaytoi');

		}
		else {
			flag = true;
			x.classList.remove('chaytoi');
			x.classList.add('chaylui');
		}
		 // console.log(flag);
	}, 3000);

}, false);


























	// var x = document.getElementById('nut1');
	// var y = document.getElementById('khoicd')

	// var flag = true;
	// var z = setInterval(function(){
	// 	if(flag){
	// 		// console.log(1);
	// 		flag = false;
	// 		y.classList.remove('khongchuyendong');
	// 		y.classList.add('chieuxuoi');
	// 	}
	// 	else{
	// 		// console.log(2);
	// 		flag = true;
	// 		y.classList.remove('chieuxuoi');
	// 	}
	// }, 1000);
