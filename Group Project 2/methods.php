<!DOCTYPE html>
<html>
<head>
	<title>methods</title>
</head>
<body>
	<?php
		function login_check($username, $password) {
			$filelocation = "text/leaderboard.txt";
			$file = fopen($filelocation, "r");
			$previous_points = "";
			$name = "";
			$uname = "";
			$upass = "";

			if ($file = fopen($filelocation, "r")) {
				while (!feof($file)) {
					 $line = fgets($file);
					 $line_array = explode(";", $line);
					 $name = $line_array[0];
					 $uname = $line_array[1];
					 $upass = $line_array[2];
					 $previous_points = $line_array[3];
					 if ((strcasecmp($uname, $username) == 0) && (strcasecmp($upass, $password)) == 0) {
					 	return array($name, $uname, $upass, $previous_points);
					 }
				}
			}
			header("Location: mistake.php");
			exit();
		}

		function signup_check($username, $password){
			$filelocation = "text/leaderboard.txt";
			$file = fopen($filelocation, "r");

			if ($file = fopen($filelocation, "r")) {
				while (!feof($file)) {
					 $line = fgets($file);
					 $line_array = explode(";", $line);
					 $uname = $line_array[1];
					 $upass = $line_array[2];
					 if ((strcasecmp($uname, $username) == 0) && (strcasecmp($upass, $password)) == 0) {
					 	header("Location: mistake.php");
						exit();
					 }
				}
			}
			return $username;
		}

		function logout_submit($name, $username, $password, $score){
			$leaderboard_in = $name.";".$username.";".$password.";".$score;

			$filelocation = "text/leaderboard.txt";
			$file = fopen($filelocation, "r");
			$line_rm = "";
			$repeated_user = false;

			if ($file = fopen($filelocation, "r")) {
				while (!feof($file)) {
					 $line = fgets($file);
					 $line_array = explode(";", $line);
					 $uname = $line_array[1];
					 $upass = $line_array[2];
					 if ((strcasecmp($uname, $username) == 0) && (strcasecmp($upass, $password)) == 0) {
					 	$repeated_user = true;
					 	$line_rm = trim($line);
					 }
				}
			}

			$content = file_get_contents($filelocation);
			if ($repeated_user) {
				$content = str_replace($line_rm, $leaderboard_in, $content);
				file_put_contents($filelocation, $content);
			} else { 
				file_put_contents($filelocation, PHP_EOL.$leaderboard_in, FILE_APPEND); 
			}
			
		}

		function getLeaderboard(){
			$filelocation = "text/leaderboard.txt";
			$file = fopen($filelocation, "r");
			$leader_array = [];

			if ($file = fopen($filelocation, "r")) {
				while (!feof($file)) {
					 $line = fgets($file);
					 $line_array = explode(";", $line);
					 array_push($leader_array, $line_array);
				}
			}

			for ($i=0; $i < count($leader_array); $i++) { 
				for ($j=$i+1; $j < count($leader_array); $j++) {
					$array_compare = $leader_array[$i]; 
					$array_comparie = $leader_array[$j];
					if (intval($array_compare[3]) < intval($array_comparie[3])) {
						$leader_array[$i] = $array_comparie;
						$leader_array[$j] = $array_compare;
					}
				}
			}

			foreach ($leader_array as $array) {
				$username = $array[1];
				$points = $array[3];
				echo "<li>{$username}: {$points}</li>";
			}
		}

		function gameOver($points){
			if ($points >= 25) {
				header("Location: gameOver.php");
				exit();
			}
		}
	  ?>

</body>
</html>
