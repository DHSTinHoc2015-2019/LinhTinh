// document.addEventListener("DOMContentLoaded", function(){}, false)
//Để xử lý sự kiện : click, di chuyển, cuộn chuột
//thì cần chờ nội dung html load xong mới load sự kiện
document.addEventListener("DOMContentLoaded", function(){
	var x = document.getElementById('n1');
	console.log(x);

	x.onclick = function(){
		console.log("Bạn vừa click");
		x.classList.add('dixuong');
	}

}, false);