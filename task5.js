var secretNumber = 7;
var userInput = prompt("Guess the secret number ranging from 1 to 10 ?")
if (parseInt(userInput) === secretNumber) {
    alert("Bingo! Correct answer");
} 
if (parseInt(userInput) + 1 === secretNumber) {
        alert("Close enough to the correct answer");
}