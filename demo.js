// creating a class to represent a student
class Student{
    constructor(name,rollno,marks){
        this.name = name;
        this.rollno = rollno;
        this.marks = marks;
    }
}
// creating an empty array to store the student objects
const students = [];

console.log("connected");
// getting references to the form and input fields in the HTML document
const form = document.getElementById("stud");
const username = document.getElementById("name");
const rollnumber = document.getElementById("rollno");
const usermarks = document.getElementById("marks");
const tablelist = document.getElementById("tbody");
// logging the references to the console for debugging purposes
console.log(form);
console.log(username);
console.log(rollnumber);
console.log(usermarks);
console.log(tablelist);
// creating a function to handle the form submission
form.addEventListener("submit",function(event){
    // preventing the default form submission behavior
    event.preventDefault();
    // logging the values of the input fields to the console
    console.log(username.value);
    // converting the roll number to a number and logging it to the console
    const convert = Number(rollnumber.value);
    // logging the converted roll number to the console
    console.log(convert);

    // splitting the marks input into an array of strings, trimming whitespace, and converting to numbers
    const values = usermarks.value;
    const splits = values.split(",");
    //console.log(splits);
    
    // trimming whitespace from each string in the array
    const cleaned = splits.map(function (n){
        return n.trim();
    });

    // converting the cleaned strings to numbers and logging the resulting array to the console
    const marks = cleaned.map(function(n){
        return Number(n);
    });

    // logging the final array of marks to the console
    console.log(marks);

    // creating a new Student object with the input values and adding it to the students array
    const student = new Student(username.value,convert,marks);
    // adding the new student to the students array
    students.push(student);

    // updating the table with the new student's information
    tablelist.innerHTML += `
    <br>
        <tr>
            <td>${student.rollno}</td>
            <td>${student.name}</td>
            <td>${student.marks}</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    `;
    console.log("Submitted");
    
});