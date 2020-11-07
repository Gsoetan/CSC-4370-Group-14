<?php 
session_save_path("/home/gsoetan1/public_html/Class_Work/GP2/session");
session_start(); 
?>
<!DOCTYPE html>
<html>
<head>
	<title>Logout Successful</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<img src="photos/jep_logo.png" alt="jep logo" id="bannerarea">
	<p>Bye, <?php echo $_SESSION["username"]; ?>!</p>
	<?php 
		include "methods.php";

		logout_submit($_SESSION["name"], $_SESSION["username"], $_SESSION["password"], $_SESSION["points"]);

		session_unset();
		session_destroy(); // end the session
	?>

	<p><a class="button" href="jep_homepage.php">Go to Homepage</a></p>
</body>
</html>