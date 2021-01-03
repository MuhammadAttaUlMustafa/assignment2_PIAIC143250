var firstPasward = prompt("Please register your Pasword");
var confirmPasward = prompt("Enter your pasword");
var empty = "";
if (firstPasward == empty ) {
    alert("Please enter your password");
} else if(confirmPasward === firstPasward) {
    alert("Correct! The password you entered matches the original password");
} else alert("Incorrect password");
