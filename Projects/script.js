//Create a simple quiz game of at least 5 questions. You can do this any way you'd like (any sort of input/output method you prefer). 

//Here is where creativity can come into the equation. The minimum requirement is a simple math quiz or trivia question game with 5 questions that keeps track of the player's score.

/* At minimum, output their score to the web page at the end and depending on their results, give them feedback.Use if/else statements or a switch statement to check their score. Have at least 3 different feedback text depending on their score. 

Use the examples from this week's learning resources and to get you */

scoreTotal = 0;
scorePoint = 0;
incorrect = 0;


//question 1
a = +prompt("How much is 2 + 2")
console.log(a);
parseInt(a);

if (a === 4) {
  alert("Correct")
  scorePoint += 10;
  scoreTotal = scorePoint;
  document.write("<p style='background-color: #a1e7a1; color: black;'>First question: " + scorePoint + " points" + "</p>");
}

else {
  alert("Incorrect");
document.write("<p style='background-color: red; color: white;'>First question: " + scoreTotal + " points" + "</p>");
  incorrect++;
}

//Question 2
b = +prompt("How much is 2 * 8")
console.log(b);
parseInt(b);

if (b === 16) {
  alert("Correct")
  scorePoint = 10;
  scoreTotal += scorePoint;
document.write("<p style='background-color: #a1e7a1; color: black;'>First question: " + scorePoint + " points" + "</p>");
}

else {
  alert("Incorrect");
  scorePoint = 0;
document.write("<p style='background-color: red; color: white;'>Second question: " + scorePoint + " points " + "</p>");
  incorrect++;
}

//Question 3
c = +prompt("How much is 15 + 15")
console.log(c);
parseInt(c);

if (c === 30) {
  alert("Correct")
  scorePoint = 10;
  scoreTotal += scorePoint;
  document.write("<p style='background-color: #a1e7a1; color: black;'>Third question: " + scorePoint + " points" + "</p>");
}

else {
  alert("Incorrect");
  scorePoint = 0;
  document.write("<p style='background-color: red; color: white;'>Third question: " + scorePoint + " points " + "</p>");
  incorrect++;
}

//Question 4
d = +prompt("How much is 2 + 3")
console.log(d);
parseInt(d);

if (d === 5) {
  alert("Correct")
  scorePoint = 10;
  scoreTotal += scorePoint;
  document.write("<p style='background-color: #a1e7a1; color: black;'>Fourth question: " + scorePoint + " points" + "</p>");
}

else {
  alert("Incorrect");
  scorePoint = 0;
  document.write("<p style='background-color: red; color: white;'>Fourth question: " + scorePoint + " points " + "</p>");
  incorrect++;
}

//Question 5
e = prompt(`Write the word or letter that's a typo or missing on this sentence: "I will be bak at 3pm today."`)
console.log(e);

if (e === "k" || e === "b" || e === "B" || e === "Back" || e === "back" || e === "c" || e === "C") {
  alert("Correct");
  scorePoint = 10;
  scoreTotal += scorePoint;
  document.write("<p style='background-color: #a1e7a1; color: black;'>Fifth question: " + scorePoint + " points" + "</p>");
}

else {
  alert("Incorrect");
  scorePoint = 0;
  document.write("<p style='background-color: red; color: white;'>Fifth question: " + scorePoint + " points " + "</p>");
  incorrect++;
}


if (scoreTotal == 0) {
  document.write("<p style='background-color: red; color: white;'>Keep practicing!" + " You had " + incorrect + " Incorrect answers" +  "</p> " + "<p style='background-color: #b7b745;'>Your total score is: " + scoreTotal + " points. </p>" + "<p style='background-color: #b7b745;'>And your grade is an : F</p>");
} 

else if (scoreTotal <= 10) {
  document.write("<p style='background-color: #a1e7a1; color: black;'>Good job!" + " You had " + incorrect + " Incorrect answers" + "</p> " + "<p style='background-color: #b7b745;'>Your total score is: " + scoreTotal + " points. </p>" + "<p style='background-color: #b7b745;'>And your grade is an : B</p>");
}
  
else if (scoreTotal < 120) {
 document.write("<p style='background-color: #a1e7a1; color: black;'>Excellent work!" + " You had " + incorrect + " Incorrect answers" + "</p> " + "<p style='background-color: #b7b745;'>Your total score is: " + scoreTotal + " points. </p>" + "<p style='background-color: #b7b745;'>And your grade is an : A</p>");
}
