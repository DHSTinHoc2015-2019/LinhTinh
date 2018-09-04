<?php 
	$textuser = $_GET['value'];
	if(strlen($textuser) < 3) echo "Tên đăng nhập quá ngắn";
	else if(strlen($textuser) > 16) echo "Tên đăng nhập quá dài";
	else {
		$reg = "/^[A-Za-z0-9_-]{3,16}$/";
		if(!preg_match($reg, $textuser, $matchs)){
			echo "Tên không hợp lệ";
		}else{
			require('../Connection.php');
			$sql = "SELECT username FROM login where username = \"$textuser\"";
			$result = $conn->query($sql);
			if(empty($result)) {
				$conn->close();
			}elseif($result->num_rows === 0){
				$conn->close();
			}else{
				$conn->close();
				echo "Tên đăng nhập đã tồn tại";
			}
		}
	}
 ?>