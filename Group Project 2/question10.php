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

      <div class="title"> Category: History </div>

      <div id="question" class="question"> Lasting from 1600 to 1868, this military government in Japan was associated with the governance of "daimyos". </div>

      <label class="option"><input type="radio" name="question-answers" value="A" /> <span
            id="question-answers-A">Warring States</span></label>

      <label class="option"><input type="radio" name="question-answers" value="B" /> <span
            id="question-answers-B">Tokugawa shogunate</span></label>

      <label class="option"><input type="radio" name="question-answers" value="C" /> <span
            id="question-answers-C">Japanese Imperialism</span></label>

      <label class="option"><input type="radio" name="question-answers" value="D" /> <span
            id="question-answers-D">Meiji system</span></label>

      <input class="button" type="submit" value="Submit">

   </form>
</body>

</html>
