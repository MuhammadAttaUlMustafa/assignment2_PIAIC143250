var englishMarsk = prompt("Marks obtained in English Subject?");
var urduMarks = prompt("Marks obtained in Urdu Subject?");
var mathMarks = prompt("Marks obtained in Mathematics Subject?");
var totalMarksObtained = parseInt(englishMarsk) + parseInt(urduMarks) + parseInt(mathMarks);
var totalMarks = prompt("Total Marks? ");
var percentage = (totalMarksObtained / totalMarks) * 100;
if (percentage >= 80) {
    grade = "A-one"; remarks = "Excellent";
} else if(percentage >= 70) {
    grade = "A"; remarks = "Good";
} else if(percentage >= 60) {
    grade = "B"; remarks = "You need to improve";
} else if(percentage < 60) {
    grade = "Fail"; remarks = "Sorry";
}
document.write("<h1>Marks Sheet</h1><br />Total marks : " +totalMarks + "<br />Marks obtained : " +totalMarksObtained + "<br />Percentage : " +percentage + "%" + "<br />Grade : " + grade + "<br />Remarks : " +remarks);