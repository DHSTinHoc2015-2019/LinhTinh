document.addEventListener("DOMContentLoaded", function(){
	var tg = document.getElementsByClassName('tamgiac')[0];
	var ds = document.getElementsByClassName('danhsach')[0];

	tg.onclick = function(){
		// this.style.color = "white";
		this.classList.toggle('tamgiacmautrang');
		ds.classList.toggle('hienthidanhsach');
	}
}, false);