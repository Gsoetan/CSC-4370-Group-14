
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

      <div id="question" class="question"> What war was coined the term "The Forgotten War"? </div>

      <label class="option"><input type="radio" name="question-9-answers" value="A" /> <span
            id="question-9-answers-A">War of 1812</span></label>

      <label class="option"><input type="radio" name="question-9-answers" value="B" /> <span
            id="question-9-answers-B">War of Jenkins' Ear</span></label>

      <label class="option"><input type="radio" name="question-9-answers" value="C" /> <span
            id="question-9-answers-C">The Russo-Japanese War</span></label>

      <label class="option"><input type="radio" name="question-9-answers" value="D" /> <span
            id="question-9-answers-D">The Korean War</span></label>

      <input class="button" type="submit" value="Submit">

</form>

   <?php 
   echo $_SESSION["username"];
   echo $_SESSION["points"];
    ?>
</body>

</html>
