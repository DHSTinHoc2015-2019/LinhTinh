<?php 
session_start();
if(!isset($_SESSION['user'])) $_SESSION['user'] = "";

if($_SERVER['REQUEST_METHOD'] == "POST"){
	if(isset($_POST['registration'])){
		require('../Connection.php');
		$_SESSION['user'] = $_POST['username_registration'];
		$user = $_POST['username_registration'];
		$pass = $_POST['password_registration'];
		$pass_hash = password_hash($pass, PASSWORD_DEFAULT);
		$email = $_POST['email_registration'];
		$displayName = $_POST['displayname_registration'];

	
		$sql = "INSERT INTO login VALUES (\"$user\", \"$pass_hash\", \"$email\", \"$displayName\")";

		if($conn->query($sql) === TRUE){
			$conn->close();
			echo "<script>alert('Đăng ký thành công'); window.location.href='../todos/';</script>";
		}
		else{
			$conn->close();
			unset($_SESSION['user']);
			echo "<script>alert('Đăng ký thất bại'); window.location.href='../';</script>";
		}
	}

	if(isset($_POST['login'])){
		require('../Connection.php');
		$_SESSION['user']  = $_POST['username_login'];
		$pass = $_POST['password_login'];
		$sql = "SELECT * FROM login";

		$result = $conn->query($sql);
		$check = FALSE;
		if($result->num_rows > 0){
			while ($row = $result->fetch_assoc()) {
				if($_SESSION['user'] == $row['username'] && password_verify($pass, $row['password'])) {
					$check = TRUE; break;
				}
			}
		}

		if($check) {
			$conn->close();
			echo "<script>alert('Đăng nhập thành công'); window.location.href='../todos/';</script>";
		}
		else {
			$conn->close();
			unset($_SESSION['user']);
			echo "<script>alert('Đăng nhập thất bại'); window.location.href='../';</script>";
		}
	}
}
 ?>

 