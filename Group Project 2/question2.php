<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <title>Question #1</title>
</head>

<body>
   <?php session_start(); ?>
   <form action="answer.php" method="POST" class="container">   
    <div class="title"> Category: "Technology" </div>

      <div id="question" class="question"> In 1989, the World Wide Web was invented by this person.  </div>

      <label class="option"><input type="radio" name="question-1-answers" value="A" /> <span
            id="question-answers-A">Al Gore</span></label>

      <label class="option"><input type="radio" name="question-1-answers" value="B" /> <span
            id="question-answers-B">Tim Berners-Lee</span></label>

      <label class="option"><input type="radio" name="question-1-answers" value="C" /> <span
            id="question-answers-C">Bob Kahn</span></label>

      <label class="option"><input type="radio" name="question-1-answers" value="D" /> <span
            id="question-answers-D">Bill Gates</span></label>

      <input class="button" type="submit" value="Submit">
   
  
  
   </form>
   </div>

   <?php 
   echo $_SESSION["username"];
   echo $_SESSION["points"];
    ?>
</body>

</html>
