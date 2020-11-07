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

      <div class="title"> Category: "Technology" </div>

      <div id="question" class="question"> When was the first telephone invented? </div>

      <label class="option"><input type="radio" name="question-answers" value="A" /> <span
            id="question-1-answers-A">1876</span></label>

      <label class="option"><input type="radio" name="question-answers" value="B" /> <span
            id="question-1-answers-B">1879</span></label>

      <label class="option"><input type="radio" name="question-answers" value="C" /> <span
            id="question-1-answers-C">1868</span></label>

      <label class="option"><input type="radio" name="question-answers" value="D" /> <span
            id="question-1-answers-D">1875</span></label>

      <input class="button" type="submit" value="Submit">

   </form>
   </div>

   </body>

</html>
