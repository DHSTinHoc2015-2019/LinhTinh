$(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) $('#goTop').fadeIn();
		else $('#goTop').fadeOut();
	});
	$('#goTop').click(function () {
		$('body,html').animate({scrollTop: 0}, 'slow');
	});
});


function showProduct(str) {
    if (str.length == 0) {
        document.getElementById("show").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("show").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "getProduct.php?q=" + str, true);
        xmlhttp.send();
    }
}

function showProductHot(str) {
    if (str.length == 0) {
        document.getElementById("showHot").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("showHot").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "getProductHot.php?q=" + str, true);
        xmlhttp.send();
    }
}

function showDistrict(str) {
    if (str.length == 0) {
        // document.getElementById("showdistrict").innerHTML = "";
        // return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("showdistrict").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "admin/getDistrict.php?q=" + str, true);
        xmlhttp.send();
    }
}

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//  showDivs(slideIndex += n);
// }

// function showDivs(n) {
//  var i;
//  var x = document.getElementsByClassName("mySlides");
//  if (n > x.length) {
//      slideIndex = 1;
//  }
//  if (n < 1) {
//      slideIndex = x.length;
//  }
//  for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";
//  }
//  x[slideIndex-1].style.display = "block";
// }