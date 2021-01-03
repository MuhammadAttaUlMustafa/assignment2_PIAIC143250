//A is true as ++a will add value before comparative.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true")
}


//B is false as b++ will add value after comparative
var b = 82;
console.log(b === 83);
if (b++ === 83) {
    alert("given condition for variable b is true");
}

//C condition 1 is false as c++ will add value after comparative
var c = 12;

if (c++ === 13) {
    alert("condition 1 is true")
}
//C condition 2 is true as previous c++ add 1 after comparative
if (c === 13) {
    alert("condition 2 is true")
}
//C condition 3 is false as ++c will add 1 before comparative and make it equal to 14
if (++c < 14) {
    alert("condition 3 is true")
}
//C condition 4 is true as pervious ++c make c=14
if (c === 14) {
    alert("condition 4 is true")
}

//D is true as both cost are equals.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === materialCost + laborCost) {
    alert("The cost equals");
}
//E as condation have value which is not 0 thats why alert will show.
if (true) {
    alert("True");
}

if (false) {
    alert("False");
} //its true because its value availabe with is not zero so no alert will show.

//F true so alert will show result as both are strings.
if ("car" < "cat") {
    alert("car is smaller than cat");
}