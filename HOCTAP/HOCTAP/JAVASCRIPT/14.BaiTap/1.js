document.addEventListener("DOMContentLoaded", function(){
	var nut = document.querySelector('.nut'),
		menutrai = document.querySelector('.menutrai'),
		den = document.querySelector('.den'),
		noidungto = document.querySelector('.noidungto');

		//Khi click vao nut xanh
		nut.onclick = function(){
			den.classList.add('denhienlen');
			//Cho khoi noi dung dich sang phai
			noidungto.classList.add('dichphai');
		}
	
}, false);
