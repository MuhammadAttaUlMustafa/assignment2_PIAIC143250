var firstNumber = parseInt(prompt("Enter First Number?"));
var secondNumber = parseInt(prompt("Enter Second Number?"));
var operations = prompt("Enter Operation Sign which you want to operate\n (+, -, *, /, %)");
if (operations === "+") {
    alert(firstNumber + secondNumber);
}
if (operations === "-") {
    alert(firstNumber - secondNumber);
}
if (operations === "*") {
    alert(firstNumber * secondNumber);
}
if (operations === "/") {
    alert(firstNumber / secondNumber);
}
if (operations === "%") {
    alert((firstNumber / secondNumber) * 100 + "%");
}