var inputTime = prompt("Please input your time in 24 hours clock\n Like: 1900 = insted of 7pm.");
if (inputTime >= 0000 && inputTime < 1200) {
    alert("Good morning!");
} else if (inputTime >= 1200 && inputTime < 1700) {
    alert("Good afternoon!");
} else if (inputTime >= 1700 && inputTime < 2100) {
    alert("Good evening!");
} else if (inputTime >= 2100 && inputTime < 2359) {
    alert("Good night!");
}