function dong(str) {
	if(confirm("Bạn có chắc chắn muốn xóa dữ liệu?")){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("list").innerHTML = this.responseText;
			}
		};
		xmlhttp.open("GET", "delete_todos.php?q=" + str, true);
		xmlhttp.send();
	}
}

var list = document.getElementById('list');

clickCount = 0;
function edit(str) {
	clickCount++;
	var li = document.getElementById('li' + str);
	var lii1 = li.getElementsByTagName('i')[0];
	var lii2 = li.getElementsByTagName('i')[1];
	var lb = li.getElementsByTagName('label')[0];
	if (clickCount === 1) {
		singleClickTimer = setTimeout(function() {
			clickCount = 0;
			li.classList.toggle('checked');
			lb.classList.toggle('checked');
			lii1.classList.toggle('i1_checked');
			lii2.classList.toggle('i2_checked');
		}, 200);
	} 
	else if (clickCount === 2) {
		clearTimeout(singleClickTimer);
		clickCount = 0;
		li.removeChild(lb);
		var ip = document.createElement('input');
		ip.classList.add('inp');
		ip.value = lb.innerHTML.replace('&nbsp;', '');
		li.appendChild(ip);
		ip.focus();
		ip.onkeydown = function(event){
			var k = event.keyCode || event.which;
			if(k == 13 && ip.value != ''){
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						document.getElementById("list").innerHTML = this.responseText;
					}
				};
				xmlhttp.open("GET", "edit_todos.php?id=" + str + "&content=" + ip.value, true);
				xmlhttp.send();
			}
		}
	}
}

var input = document.getElementById('inputtext');
input.onkeydown = function(event) {
	var kCode = event.keyCode || event.which;
	if(kCode == 13){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("list").innerHTML = this.responseText;
			}
		};
		xmlhttp.open("GET", "add_todos.php?q=" + input.value, true);
		xmlhttp.send();

		input.value = "";
	}
}