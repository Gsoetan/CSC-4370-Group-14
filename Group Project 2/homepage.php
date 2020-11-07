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
   <title>Jeopardy</title>
</head>

<body>

   <h1><img src="photos/jep_logo.png" alt="jep logo" style="width: 250px"></h1>
   <h1><?php  echo $_SESSION["username"]."'s Current points: ".$_SESSION["points"]; ?></h1>
   <div class="container">


      <div class="box">Technology</div>
      <div class="box">History</div>
      <div class="box">Pop Culture</div>
      <div class="box">Science</div>
      <div class="box">Misc.</div>
      <div class="box"><a href="question.php"> Q1</a></div>
      <div class="box"><a href="question6.php">Q1 </a></div>
      <div class="box"><a href="question11.php">Q1 </a></div>
      <div class="box"><a href="cell.php">Q1 </a></div>
      <div class="box"><a href="misc1.php">Q1 </a></div>
      <div class="box"><a href="question2.php"> Q2</a></div>
      <div class="box"><a href="question7.php">Q2</a></div>
      <div class="box"><a href="dicaprio_Q.php">Q2</a></div>
      <div class="box"><a href="waves.php">Q2</a></div>
      <div class="box"><a href="misc2.php">Q2</a></div>
      <div class="box"><a href="question3.php">Q3</a></div>
      <div class="box"><a href="question8.php">Q3</a></div>
      <div class="box"><a href="foreign.php">Q3</a></div>
      <div class="box"><a href="bond.php">Q3</a></div>
      <div class="box"><a href="misc3.php">Q3</a></div>
      <div class="box"><a href="question4.php">Q4</a></div>
      <div class="box"><a href="question9.php">Q4</a></div>
      <div class="box"><a href="marriagestory_q.php">Q4</a></div>
      <div class="box"><a href="medicine.php">Q4</a></div>
      <div class="box"><a href="misc4.php">Q4</a></div>
      <div class="box"><a href="question5.php">Q5</a></div>
      <div class="box"><a href="question10.php">Q5</a></div>
      <div class="box"><a href="musk_q.php">Q5</a></div>
      <div class="box"><a href="keto.php">Q5</a></div>
      <div class="box"><a href="misc5.php">Q5</a></div>

      <div><a href="logout.php" class="button" style="margin-right: auto; margin-left: auto; display: grid;">Logout</a><div>

   </div>
      


</body>

</html>
