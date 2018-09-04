<?php 
session_start();
if(!isset($_SESSION['user'])) $_SESSION['user'] = "";
if(empty($_SESSION['user'])) echo "<script>window.location.href = '../'</script>";
$user = $_SESSION['user'];

$contentTodo = $_GET['content'];
$id = $_GET['id'];
require('../Connection.php');
$sql = "UPDATE todoslist SET content = \"$contentTodo\" WHERE id = $id";
if($conn->query($sql) === TRUE){
	
	$sql = "SELECT * FROM todoslist WHERE username = \"$user\"";

	$result = $conn->query($sql);
	if($result->num_rows > 0){
		while($row = $result->fetch_assoc()){?>
			<li id="li<?php echo $row['id']; ?>" onclick="edit(<?php echo $row['id']; ?>);"><i class="fas fa-check correct"></i><label><?php echo "&nbsp;".$row['content'] ?></label><i class="fas fa-times closes" onclick="dong(<?php echo $row['id']; ?>)"></i></li>
			<?php
		}

	}
	$conn->close();
}
else{
	$conn->close();
	echo "<script>alert('Sửa dữ liệu thất bại');</script>";
}

?>