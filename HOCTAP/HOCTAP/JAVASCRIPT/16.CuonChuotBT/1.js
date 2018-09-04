document.addEventListener("DOMContentLoaded", function(){

	var doituongmenu = document.querySelector('.menu');
	//console.log(doituongmenu);
	var trangthai = "duoi300";
	//bắt sự kiện khi người dùng cuộn chuột
	window.addEventListener('scroll', function(){

		if(window.pageYOffset > 300){
			if(trangthai == 'duoi300'){
				trangthai = 'tren300';
				doituongmenu.classList.add('menunholai');
			}			
		}
		else if(window.pageYOffset <= 300){
			if(trangthai == 'tren300'){
				doituongmenu.classList.remove('menunholai');
				trangthai = 'duoi300';
			}
		}
	})
	
}, false);
