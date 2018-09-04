<?php 
	$servername = "localhost";
	$username = "root";
	$password = "";
	$namedatabase = "nalt_todos";

	$conn = new mysqli($servername, $username, $password, $namedatabase);

	if($conn->connect_error){
		die("Kết nối thất bại. Lỗi: ".$conn->connect_error);
	}

	mysqli_set_charset($conn, "utf8");
 ?>