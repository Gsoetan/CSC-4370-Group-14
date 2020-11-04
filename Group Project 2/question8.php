
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <title>Question #1</title>
</head>

<body>
   <?php session_start(); ?>
   <form action="answer.php" method="POST" class="container">
      <div class="title"> Category: History </div>

      <div id="question" class="question"> Who invented the practical telephone? </div>

      <label class="option"><input type="radio" name="question-1-answers" value="A" /> <span
            id="question-answers-A">Alexander Graham Bell</span></label>

      <label class="option"><input type="radio" name="question-1-answers" value="B" /> <span
            id="question-answers-B">Thomas Edison</span></label>

      <label class="option"><input type="radio" name="question-1-answers" value="C" /> <span
            id="question-answers-C">Benjamin Franklin</span></label>

      <label class="option"><input type="radio" name="question-1-answers" value="D" /> <span
            id="question-answers-D">Nikola Tesla</span></label>

      <input class="button" type="submit" value="Submit">
</form>

   <?php 
   echo $_SESSION["username"];
   echo $_SESSION["points"];
    ?>
</body>

</html>
