<?php 
session_save_path("/home/gsoetan1/public_html/Class_Work/GP2/session");
session_start(); 
?>
<!DOCTYPE html>
<html>
<head>
	<title>Winner Circle</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<img src="photos/jep_logo.png" alt="jep logo" id="bannerarea" class="center-banner">
	<h1>You've Won, <?php echo $_SESSION["username"]; ?>!</h1>
	<h2 class="dialogue">Total Score: <?php echo $_SESSION["points"]."<br>"; ?></h2>

	<p class="dialogue"><a class="button" href="logout.php">Logout</a></p>
</body>
</html>