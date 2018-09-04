document.addEventListener("DOMContentLoaded", function(){
	var nut = document.getElementsByClassName('nuttongquat')
	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick = function(){
			var thongTin = this.getAttribute('data-thongtin');
			console.log(thongTin);
		}
	}
}, false);