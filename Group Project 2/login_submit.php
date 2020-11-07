<?php 
session_save_path("/home/gsoetan1/public_html/Class_Work/GP2/session");
session_start(); 
?>
<!DOCTYPE html>
<html>
<head>
	<title>Login Successful</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<?php
	include "methods.php";

	if ("" == trim($_POST['username'])) {
		header("Location: mistake.html");
		exit();
	}
	if ("" == trim($_POST['password'])) {
		header("Location: mistake.html");
		exit();
	}
	$credentials = login_check($_POST["username"], $_POST["password"]);

	$_SESSION["name"] = $credentials[0];
	$_SESSION["username"] = $credentials[1];
	$_SESSION["password"] = $credentials[2];
	$_SESSION["points"] = 0; // reset last score

	?>

	<img src="photos/jep_logo.png" alt="jep logo" id="bannerarea" class="center-banner">
	<h1>Hi <?php echo $_SESSION["name"]."<br>" ?></h1>
	<h2 class="dialogue">Your score last time was <?php echo $credentials[3]."<br>"; ?></h2>
	<h2 class="dialogue">Want to try again?</h2>
	<p class="dialogue"><a class="button" href="homepage.php">Let's play!</a></p>

	<?php
		
	?>

</body>
</html>