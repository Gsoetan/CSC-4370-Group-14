
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
   <form action="answersC.php" method="POST" class="container">

      <div class="title"> Category: Pop Culture </div>
       

      <div id="question" class="question"> Scarlett Johansson and this actor starred in the film "Marriage Story" </div>

      <label class="option"><input type="radio" name="question-answers" value="A" /> <span
            id="question-answers-A">Mark Wahlberg</span></label>

      <label class="option"><input type="radio" name="question-answers" value="B" /> <span
            id="question-answers-B">Keanu Reeves </span></label>

      <label class="option"><input type="radio" name="question-answers" value="C" /> <span
            id="question-answers-C">Adam Driver</span></label>

      <label class="option"><input type="radio" name="question-answers" value="D" /> <span
            id="question-answers-D">Matt Damon</span></label>

      <input class="button" type="submit" value="Submit">

</form>

</body>

</html>
