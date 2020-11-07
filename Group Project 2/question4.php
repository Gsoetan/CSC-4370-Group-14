
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <title>Question 4</title>
</head>

<body>
   <?php session_start(); ?>
   <form action="answersD.php" method="POST" class="container">
 <div class="title"> Category: "Technology" </div>

      <div id="question" class="question"> Widely considered as the father of Artificial Intelligence, this man developed a test for determining whether or not a computer is capable of thinking like a human being </div>

      <label class="option"><input type="radio" name="question-answers" value="A" /> <span
            id="question-4-answers-A">John von Neumann</span></label>

      <label class="option"><input type="radio" name="question-answers" value="B" /> <span
            id="question-4-answers-B">Elon Musk</span></label>

      <label class="option"><input type="radio" name="question-answers" value="C" /> <span
            id="question-4-answers-C">Dennis Ritchie</span></label>

      <label class="option"><input type="radio" name="question-answers" value="D" /> <span
            id="question-4-answers-D">Alan Turing</span></label>

      <input class="button" type="submit" value="Submit">

   </form>

</body>

</html>
