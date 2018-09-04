document.addEventListener("DOMContentLoaded", function(){
	var trangthai = 'duoi300';
	//bắt sự kiện khi người dùng cuộn chuột
	window.addEventListener('scroll', function(){
		//console.log("da cuon chuot");
		//Lay vi tri khi cuon chuot
		console.log(window.pageYOffset);
		if(window.pageYOffset > 300){
			if(trangthai == 'duoi300'){
				console.log("dang o menu");
				trangthai = 'tren300';
			}
			

		}
	})
	
}, false);
