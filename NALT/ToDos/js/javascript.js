var input = document.getElementById('inputtext');
var list = document.getElementById('list');
// console.log(list.childElementCount);
//Sự kiện khi nhập text vào input nếu nhấn enter thì tự động tạo thêm phần tử cho list
input.onkeydown = function(event) {
	var kCode = event.keyCode || event.which;
    if(kCode == 13){
    	// console.log(x.value);
    	 if(input.value != ""){
            var node = document.createElement('li');

            //Tạo thẻ i với biểu tượng V
            var i1 = document.createElement('i');
            i1.classList.add('fas');
            i1.classList.add('fa-check');
            i1.classList.add('correct');

            //Tạo thẻ i với biểu tượng X (close)
            var i2 = document.createElement('i');
            i2.classList.add('fas');
            i2.classList.add('fa-times');
            i2.classList.add('closes');

            var text_node = document.createTextNode('\xa0' + input.value);
            // console.log(text_node);
            node.appendChild(i1);
    		node.appendChild(text_node);
            node.appendChild(i2);

            list.appendChild(node);

            //Thêm sự kiện click cho các thẻ li
            node.addEventListener('click', function(e) {
                this.classList.toggle('checked');
                i1.classList.toggle('i1_checked');
                i2.classList.toggle('i2_checked');
            },false);

            //Thêm sự kiện click cho close
            i2.addEventListener('click', function() {
                node.remove();
                addAngle();
            }, false);

            addAngle();
        }
        // console.log(check);
    	input.value = "";
    }
    // else console.log("msg");
};

addAngle();

// Phương thức kiểm tra nếu không có thẻ li nào thì ẩn mũi tên bên trái input
function addAngle(){
    var angle = document.getElementById('angle');
    if(list.childElementCount == 0) {
        angle.classList.remove('fa');
        angle.classList.remove('fa-angle-double-down');
    }
    else{
        angle.classList.add('fa');
        angle.classList.add('fa-angle-double-down');
    }
}