//bước 1 truy xuất phần tử

document.addEventListener("DOMContentLoaded", function(){
	var x = document.getElementById('nut1');
	var khoi = document.getElementsByClassName('card');
	// console.log(khoi[0]);

	x.onclick = function(){
		khoi[0].classList.toggle('sangPhai');
	}
},false)