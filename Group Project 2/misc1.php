
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <title>Question</title>
</head>

<body>
   <?php session_start(); ?>
   <form action="answer.php" method="POST" class="container">

      <div class="title"> Category: Miscellaneous </div>
       

      <div id="question" class="question"> n the 1970s, thos underground urban movement formed in Bronx, New York City </div>

      <label class="option"><input type="radio" name="question-9-answers" value="A" />radio waves <span
            id="question-answers-A">House</span></label>

      <label class="option"><input type="radio" name="question-9-answers" value="B" /> infrared waves<span
            id="question-answers-B">Disco</span></label>

      <label class="option"><input type="radio" name="question-9-answers" value="C" />microwaves <span
            id="question-answers-C">Funk</span></label>

      <label class="option"><input type="radio" name="question-9-answers" value="D" />All of the above <span
            id="question-answers-D">Hip-Hop</span></label>

      <input class="button" type="submit" value="Submit">

</form>

   <?php 
   echo $_SESSION["username"];
   echo $_SESSION["points"];
    ?>
</body>

</html>
