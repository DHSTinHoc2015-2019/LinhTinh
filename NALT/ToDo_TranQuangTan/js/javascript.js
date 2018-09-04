var input = document.getElementById('inputtext');
var list = document.getElementById('list');
console.log(list);
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

            var lb = document.createElement('label');
            lb.innerHTML = '\xa0' + input.value;
            var giatri = '\xa0' + input.value;
            node.appendChild(i1);
            node.appendChild(lb);
            node.appendChild(i2);
            list.appendChild(node);

            node.addEventListener('dblclick', function(e) {
                this.removeChild(lb);
                var ip = document.createElement('input');
                ip.autofocus = true;
                ip.classList.add('inp');
                ip.value = lb.innerHTML.replace('&nbsp;', '');
                this.appendChild(ip);
                ip.onkeydown = function(event){
                    var k = event.keyCode || event.which;
                    if(k == 13 && ip.value != ''){
                        lb.innerHTML = '\xa0' + ip.value;
                        node.removeChild(ip);
                        node.appendChild(lb);
                        node.classList.add('checked');
                        i1.classList.toggle('i1_checked');
                        i2.classList.toggle('i2_checked');
                    }
                }
            },false);
            // console.log(list.childNodes[0].nodeValue);
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
    	input.value = "";
    }
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