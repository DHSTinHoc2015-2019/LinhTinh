document.addEventListener("DOMContentLoaded", function(){
	var x = document.getElementsByClassName('clickCau');
	var hienthi = document.getElementsByClassName('cautho');
	for (var i = 0; i < x.length; i++) {
		x[i].onclick = function(){
			var y = this.getAttribute('data-cau');
			var _cl = document.getElementById(y);
			for (var j = 0; j < hienthi.length; j++) {
				hienthi[j].classList.remove('hienthi');
			}
			_cl.classList.toggle('hienthi');
		}
	}

}, false);

