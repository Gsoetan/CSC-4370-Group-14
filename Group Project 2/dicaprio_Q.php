
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <title>Question</title>
</head>

<body>
   <form action="answersC.php" method="POST" class="container">

      <div class="title"> Category: Pop Culture </div>

      <div id="question" class="question"> The Dicaprio meme that shows him holding a wine glasses while hilariously laughing originates from what movie?  </div>


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
