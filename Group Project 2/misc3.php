<?php 
session_save_path("/home/~username/public_html/groupproject2/sessions");
session_start(); 
?>
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

      <div class="title"> Category: Miscellaneous </div>
       

      <div id="question" class="question">The youngest U.S. cabinet department is the Department of  </div>

      <label class="option"><input type="radio" name="question-answers" value="A" /><span
            id="question-answers-A">Homeland Security</span></label>

      <label class="option"><input type="radio" name="question-answers" value="B" /><span
            id="question-answers-B">Health and Human Services</span></label>

      <label class="option"><input type="radio" name="question-answers" value="C" /> <span
            id="question-answers-C">Education</span></label>

      <label class="option"><input type="radio" name="question-answers" value="D" /><span
            id="question-answers-D">Energy</span></label>

      <input class="button" type="submit" value="Submit">
</form>

</body>

</html>
