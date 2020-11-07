<!DOCTYPE html>
<html>
<head>
	<title>High Scores</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<h1>Global Highscores</h1>
	<div id="scores" class="container">
		<ol class="hscores">
			<?php 
				include 'methods.php';
				getLeaderboard();
			 ?>
		</ol>
		<p class="dialogue"><a href="jep_homepage.php" class="button" >Go Back</a></p>
	</div>
</body>
</html>