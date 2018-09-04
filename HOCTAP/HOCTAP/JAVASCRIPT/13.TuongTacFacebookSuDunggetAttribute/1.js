document.addEventListener("DOMContentLoaded", function(){
	var nut = document.getElementsByClassName('thanhmenuClick');
	var hienthi = document.getElementsByClassName('thanhmenuHienThi');
	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick = function(){
			
			if(this.classList[1] == 'mautrang'){ //Click list đã hiển thị
				this.classList.remove('mautrang');

				var noidunghienthi = this.getAttribute('data-thongtin');
				var x = document.getElementById(noidunghienthi);

				x.classList.remove('thanhmenuHienThiNoiDung');
			}
			else{
				for (var k = 0; k < nut.length; k++) {
					nut[k].classList.remove('mautrang');
				}

				this.classList.add('mautrang');

				var noidunghienthi = this.getAttribute('data-thongtin');
				var x = document.getElementById(noidunghienthi);

				for (var i = 0; i < hienthi.length; i++) {
					hienthi[i].classList.remove('thanhmenuHienThiNoiDung');
				}

				x.classList.add('thanhmenuHienThiNoiDung');
			}
		}
	}
}, false);
