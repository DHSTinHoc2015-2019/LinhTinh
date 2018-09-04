var x = "Hello World";
//Lấy độ dài chuỗi
console.log(x.length);

//Tìm trong chuỗi vị trí xuất hiện của chuỗi "el", nếu ko tìm thấy trả về -1
console.log(x.indexOf("el"));
//search == indexOf
console.log(x.search("el"));

//replace: thay thế
console.log(x.replace("el", "ee"));

//split: tách chuỗi thành mảng với dấu phân tách
var y = "a b c d e f g h";
console.log(y.split(' '));

//Number: chuyển đổi chữ thành số
var z = "123.657";
console.log(Number(z));

//parseInt: chuyển đổi chữ thành số integer
console.log(parseInt(z));