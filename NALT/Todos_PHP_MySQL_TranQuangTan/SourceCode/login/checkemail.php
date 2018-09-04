<?php 
	$textemail = $_GET['value'];
	$reg = "/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/";
	if(!preg_match($reg, $textemail, $matchs)){
		echo "Email không hợp lệ";
	}else{
		require('../Connection.php');
		$sql = "SELECT email FROM login WHERE email = \"$textemail\"";

		$result = $conn->query($sql);
		
		if(empty($result)){
			$conn->close();
		}elseif($result->num_rows === 0){
			$conn->close();
		}else{
			$conn->close();
			echo "Email đã tồn tại";
		}
	}
 ?>
 