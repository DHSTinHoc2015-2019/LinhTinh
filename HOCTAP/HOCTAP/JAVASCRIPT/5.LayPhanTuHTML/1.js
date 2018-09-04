//Lấy thẻ h1
var x = document.getElementsByTagName('h1');
console.log(x[1]); //truy cập đến phần tử thứ 2 của mảng chứa các thẻ h1

//Lấy thẻ h2
var y = document.getElementsByTagName("h2");
console.log(y);

var z = document.getElementsByTagName('p');
console.log(z[1].innerHTML); //Truy cấp đến phần tử
console.log(z[1].innerText);

//Đổi giá trị phần tử
z[1].innerHTML = "Tran Quang Tan khong dau";
console.log(z[1].innerHTML);