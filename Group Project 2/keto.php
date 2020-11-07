
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <title>Question</title>
</head>

<body>
   <form action="answersB.php" method="POST" class="container">

      <div class="title"> Category: Science </div>
       

      <div id="question" class="question">The ketogenic diet aims to switch the body's energy source from ____ to ____ </div>

      <label class="option"><input type="radio" name="question-answers" value="A" />radio waves <span
            id="question-answers-A"></span>Fat, Glucose</label>

      <label class="option"><input type="radio" name="question-answers" value="B" /> infrared waves<span
            id="question-answers-B"></span>Glucose, Fat</label>

      <label class="option"><input type="radio" name="question-answers" value="C" />microwaves <span
            id="question-answers-C"></span>Fatty Acids, Cholesterol</label>

      <label class="option"><input type="radio" name="question-answers" value="D" />All of the above <span
            id="question-answers-D"></span> Calories, ATP</label>

      <input class="button" type="submit" value="Submit">
</form>

</body>

</html>
