//classList.remove(ten class)
//classList.add(tên class)
//classList.toggle(tên class) : cả add + remove. nếu có rồi thì remove còn không thì add
//classList.remove()  : remove tất cả class

var x = document.querySelectorAll('.n1');
// console.log(x);

//truy cập classList để remove, add
x[0].classList.remove('btn-outline-info');
x[0].classList.remove('btn');

x[0].classList.add('btn');
 x[0].classList.add('btn-block');
x[0].classList.add('btn-warning');

var y = document.querySelectorAll('.n2');
y[0].classList.toggle('btn-block');