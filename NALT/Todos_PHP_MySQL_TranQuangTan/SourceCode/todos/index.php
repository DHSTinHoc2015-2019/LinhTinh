<?php 
session_start();
if(!isset($_SESSION['user'])) $_SESSION['user'] = "";
if(empty($_SESSION['user'])) echo "<script>window.location.href = '../'</script>";

$user = $_SESSION['user'];
require('../Connection.php');

$sql = "SELECT * FROM login WHERE username = \"$user\"";

$result = $conn->query($sql);
if($result->num_rows > 0){
	while($row = $result->fetch_assoc()){
		$displayName = $row['display_name'];
	}
}
$conn->close();
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>ToDo</title>
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="../vendor/bootstrap-4.0.0/css/bootstrap.css">
</head>
<body style="background-color: #e9e9e9;">
	<div class="container">
		<nav class="navbar navbar-expand-md">
			<div class="navbar-collapse collapse">
				<ul class="mr-auto">

				</ul>
				<ul class="navbar-nav">
					<li class="nav-item">
						<p class="nav-link">Xin chào <span><a href="" style="text-decoration: none;"><?php echo $displayName; ?></a></span></p>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="../login/logout.php">Đăng xuất</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-8 offset-md-2">
				<p id="todos">todos</p>
				<div id="boder"></div>
				<i class="fas fa-angle-double-down" id="angle"></i>
				<input type="text" name="" id="inputtext" placeholder="What needs tobe done?">	
				<ul id="list">
					<?php 
						require('../Connection.php');
						
						$sql = "SELECT * FROM todoslist WHERE username = \"$user\"";

						$result = $conn->query($sql);
						if($result->num_rows > 0){
							while($row = $result->fetch_assoc()){?>
<li id="li<?php echo $row['id']; ?>" onclick="edit(<?php echo $row['id']; ?>);"><i class="fas fa-check correct"></i><label><?php echo "&nbsp;".$row['content'] ?></label><i class="fas fa-times closes" onclick="dong(<?php echo $row['id']; ?>)"></i></li>
							<?php
							}
						}
						$conn->close();
					?>
				</ul>
				<div id="footer">
					<p>Double-click to edit todo</p>
					<p>Create by ............</p>
				</div>
			</div>
		</div>
	</div>
	<script src="../js/todos.js"></script>
</body>
</html>