document.addEventListener("DOMContentLoaded", function(){
	var x = document.getElementById('nut1');
	var y = document.getElementById('khoicd')

	var flag = true;
	x.onclick = function(){
		if(flag){
			// console.log(1);
			flag = false;
			y.classList.remove('khongchuyendong');
			y.classList.add('chieuxuoi');
		}
		else{
			// console.log(2);
			flag = true;
			y.classList.remove('chieuxuoi');
		}
	}
}, false);