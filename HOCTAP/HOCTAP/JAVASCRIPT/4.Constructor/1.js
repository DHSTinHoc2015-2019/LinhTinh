//Nếu gán Object thì cả 2 Object đều thay đổi nếu ta thay đổi các giá trị của 1 trong 2 Object
var sv1 = {
	ten: "Nguyễn A",
	tuoi: 13
};

var sv2 = sv1;
sv2.ten = "Trần B";

console.log(sv1);
console.log(sv2);

//Khai báo Constructor
var hocsinh = function(name, age){
	this.name = name;
	this.age = age;
}

var hs1 = new hocsinh("Nguyễn Văn A", 15);
var hs2 = new hocsinh("Nguyễn C", 20);
console.log(hs1);
console.log(hs2);