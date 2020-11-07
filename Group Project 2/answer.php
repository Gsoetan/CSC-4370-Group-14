<?php 
session_save_path("/home/gsoetan1/public_html/Class_Work/GP2/session");
session_start(); 
?>
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <title>Score</title>
</head>

<body>

   <div class="container">

      <h1><img src="photos/jep_logo.png" alt="jep logo" style="width: 250px"></h1>

      <?php
      include 'methods.php';

      $answer = $_POST['question-answers'];

      $totalscore = 0;

      if ($answer == "A") { $_SESSION["points"] += 1; }
      else { $_SESSION["points"] -= 1; }

      if ($_SESSION["points"] < 0) { $_SESSION["points"] = 0; }

      gameOver($_SESSION["points"]);

      echo "<div class='score'> Score: {$_SESSION["points"]}</div>";

      echo "<div class='button1'> <a href='homepage.php'> Return home </a> </div>";

      ?>

   </div>

</body>

</html>
