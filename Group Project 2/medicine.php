
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

      <div class="title"> Category: Science </div>
       

      <div id="question" class="question">The discovery of this drug changed the course medicine as it was the first effective drug to fight off infection. </div>

      <label class="option"><input type="radio" name="question-answers" value="A" />radio waves <span
            id="question-answers-A"></span>Aspirin drug</label>

      <label class="option"><input type="radio" name="question-answers" value="B" /> infrared waves<span
            id="question-answers-B">Tylenol</span></label>

      <label class="option"><input type="radio" name="question-answers" value="C" />microwaves <span
            id="question-answers-C">Penicillin</span></label>

      <label class="option"><input type="radio" name="question-answers" value="D" />All of the above <span
            id="question-answers-D">Advil</span></label>

      <input class="button" type="submit" value="Submit">
</form>

</body>

</html>
