<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Todos</title>
	<link rel="stylesheet" href="vendor/bootstrap-4.0.0/css/bootstrap.min.css">
	<style>
	#nav-tab .active{
		background-color: green;
		color: black;
		text-align: center;
	}
	#nav-tab .nav-item{
		text-align: center;
	}
</style>
</head>
<body>
	<div style="margin-top: 5%;">
		
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-6 offset-md-3">
				<nav>
					<div class="nav nav-tabs" id="nav-tab" role="tablist">
						<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" style="min-width: 50%;">Đăng nhập</a>
						<a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" style="min-width: 50%;">Đăng ký</a>
					</div>
				</nav>
				<div class="tab-content" id="nav-tabContent">
					<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
						<form method="POST" action="login/" enctype="multipart/form-data">
							<fieldset class="form-group">
								<label>Tên đăng nhập</label>
								<input type="text" class="form-control" placeholder="" name="username_login" required="">
							</fieldset>
							<fieldset class="form-group">
								<label>Mật khẩu</label>
								<input type="password" class="form-control" placeholder="" name="password_login" required="">
							</fieldset>
							<fieldset class="form-group">
								<button type="submit" class="btn btn-success" name="login">Đăng nhập</button>
							</fieldset>
						</form>
					</div>
					<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
						<form method="POST" action="login/" enctype="multipart/form-data">
							<fieldset class="form-group">
								<label>Tên đăng nhập</label>
								<input type="text" class="form-control" placeholder="" name="username_registration" required="" oninput="checkUser(this.value);">
								<label style="display: none;" id="textuser"></label>
							</fieldset>
							<fieldset class="form-group">
								<label>Mật khẩu</label>
								<input type="password" class="form-control" placeholder="" name="password_registration" required="">
							</fieldset>
							<fieldset class="form-group">
								<label>Email</label>
								<input type="email" class="form-control" placeholder="" name="email_registration" required="" oninput="checkEmail(this.value);">
								<label style="display: none;" id="textemail"></label>
							</fieldset>
							<fieldset class="form-group">
								<label>Tên hiển thị</label>
								<input type="text" class="form-control" placeholder="" name="displayname_registration" required="">
							</fieldset>
							<fieldset class="form-group">
								<button type="buton" class="btn btn-success" name="registration" id="registration">Đăng ký</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="vendor/JQuery/jquery-3.3.1.min.js"></script>
	<script src="vendor/bootstrap-4.0.0/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/login.js"></script>
</body>
</html>