//anonymous

var z = function(x,y){
	return x + y;
}

console.log(z(1,3));

//Closesure Function: hàm có thể sử dụng biến bên ngoài nó (Ví dụ: biến ten)
function hello(){
	var ten = "ABC";
	return function(){
		console.log("Xin chào: " + ten);
	}
}
//Cách sử dụng:
//Khai báo biến a = tên hàn
//tiếp theo gọi hàm;
var a = hello();
a();