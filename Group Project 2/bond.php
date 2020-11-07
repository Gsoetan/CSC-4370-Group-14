
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <title>Question</title>
</head>

<body>
   <form action="answer.php" method="POST" class="container">
      <div class="title"> Category: Science </div>
       

      <div id="question" class="question"> The phrase "sharing is caring" is associated with this chemical bond, referring its sharing of electron pairs. </div>

      <label class="option"><input type="radio" name="question-answers" value="A" />radio waves <span
            id="question-answers-A">Covalent Bond</span></label>

      <label class="option"><input type="radio" name="question-answers" value="B" /> infrared waves<span
            id="question-answers-B">Ionic Bond</span></label>

      <label class="option"><input type="radio" name="question-answers" value="C" />microwaves <span
            id="question-answers-C">Hydrogen Bond</span></label>

      <label class="option"><input type="radio" name="question-answers" value="D" />All of the above <span
            id="question-answers-D">Equal Bond</span></label>

      <input class="button" type="submit" value="Submit">

</form>

</body>

</html>
