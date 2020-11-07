
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
      <div class="title"> Category: "U.S. History" </div>

      <div id="question" class="question"> Abraham Lincoln was the ___ U.S. president. </div>

      <label class="option"><input type="radio" name="question-answers" value="A" /> <span
            id="question-answers-A">16th</span></label>

      <label class="option"><input type="radio" name="question-answers" value="B" /> <span
            id="question-answers-B">14th</span></label>

      <label class="option"><input type="radio" name="question-answers" value="C" /> <span
            id="question-answers-C">15th</span></label>

      <label class="option"><input type="radio" name="question-answers" value="D" /> <span
            id="question-answers-D">23rd</span></label>

      <input class="button" type="submit" value="Submit">
</form>

</body>

</html>
