var tieudeh5 = document.getElementsByTagName('h5');
console.log(tieudeh5);

for (var i = 0; i < tieudeh5.length; i++) {
	tieudeh5[i].innerHTML = '<button type="button" class="btn btn-primary btn-block">Click here</button>';
}
