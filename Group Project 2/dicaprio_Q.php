
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <title>Pop Culture Question</title>
</head>

<body>
   <?php session_start(); ?>
   <form action="answersC.php" method="POST" class="container">

      <div class="title"> Category: Pop Culture </div>

      <div id="question" class="question"> The Dicaprio image below is used for memes based on what movie? </div>
       <img src="photos/Dicaprio.png" alt="Dicaprio meme" class="image">

      <label class="option"><input type="radio" name="question-answers" value="A" /> <span
            id="question-answers-A">The Revenant</span></label>

      <label class="option"><input type="radio" name="question-answers" value="B" /> <span
            id="question-answers-B">Wolf of Wall Street</span></label>

      <label class="option"><input type="radio" name="question-answers" value="C" /> <span
            id="question-answers-C">Django Unchained</span></label>

      <label class="option"><input type="radio" name="question-answers" value="D" /> <span
            id="question-answers-D">Gangs of New York</span></label>

      <input class="button" type="submit" value="Submit">
</form>

</body>

</html>
