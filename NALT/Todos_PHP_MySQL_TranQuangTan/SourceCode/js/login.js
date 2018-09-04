var check_email = true; var check_user = true;
function checkEmail(str) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var s = this.responseText;
			if(s.length !== 1){
				document.getElementById("textemail").innerHTML = s;
				document.getElementById("textemail").style.display = "block";
				document.getElementById("textemail").style.color = "red";
				check_email = false;
			}
			else {
				document.getElementById("textemail").style.display = "none";
				check_email = true;
			}
			if(check_email && check_user) document.getElementById("registration").disabled = false;
			else document.getElementById("registration").disabled = true;
		}
	};
	xmlhttp.open("GET", "login/checkemail.php?value=" + str, true);
	xmlhttp.send();
}

function checkUser(str) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var s = this.responseText;
			if(s.length !== 0){
				document.getElementById("textuser").innerHTML = s;
				document.getElementById("textuser").style.display = "block";
				document.getElementById("textuser").style.color = "red";
				check_user = false;
			}
			else {
				document.getElementById("textuser").style.display = "none";
				check_user = true;
			}
			if(check_email && check_user) document.getElementById("registration").disabled = false;
			else document.getElementById("registration").disabled = true;
		}
	};
	xmlhttp.open("GET", "login/checkuser.php?value=" + str, true);
	xmlhttp.send();
}