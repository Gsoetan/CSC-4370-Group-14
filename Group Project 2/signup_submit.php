<?php 
session_save_path("/home/gsoetan1/public_html/Class_Work/GP2/session");
session_start(); 
?>
<!DOCTYPE html>
<html>
<head>
	<title>Signup Successful</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<?php
	include "methods.php";

	if ("" == trim($_POST['name'])) {
		header("Location: mistake.html");
		exit();
	}
	if ("" == trim($_POST['username'])) {
		header("Location: mistake.html");
		exit();
	}
	if ("" == trim($_POST['password'])) {
		header("Location: mistake.html");
		exit();
	}
	$username = signup_check($_POST["username"], $_POST["password"]);

	?>

	<img src="photos/jep_logo.png" alt="jep logo" id="bannerarea" class="center-banner">
	<h1>Hi, <?php echo $_POST["username"]; ?>. Welcome!</h1>
	<h2 class="dialogue">Let's get started!</h2>
	<p class="dialogue"><a class="button" href="homepage.php">Let's play!</a></p>

	<?php
		$_SESSION["name"] = $_POST["name"];
		$_SESSION["username"] = $_POST["username"];
		$_SESSION["password"] = $_POST["password"];
		$_SESSION["points"] = 0; // reset last score
	?>

</body>
</html>