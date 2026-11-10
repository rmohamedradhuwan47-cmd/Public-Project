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

// calculating the total marks and average for the student
        let boxs = 0;
    for(let i = 0 ;i<student.marks.length;i++){
        boxs += student.marks[i];
    }
    let total = boxs/student.marks.length;
    console.log(boxs);
    console.log(total);

    let grade = "";
    if(total>=90){
        grade = "A";
    }else if(total>=80){
        grade = "B";
    }else if(total>=70){
        grade = "C";
    }else if(total>=60){
        grade = "D";
    }else{
        console.log("Fail");
        grade = "Fail";
    }



    // updating the table with the new student's information
    tablelist.innerHTML += `
        <tr>
            <td>    ${student.rollno}     |</td>
            <td> ${student.name}        |</td>
            <td> ${student.marks}       |</td>
            <td>${total.toFixed(2)}     |</td>
            <td>${grade}|</td>
            <td><button 
            class="deleteBtn"
            data-roll="${student.rollno}"
            width="100" 
            margin-top="50"  
            padding="40"
            >Delete</button></td>
        </tr>
    `;

    console.log("Submitted");


    
});
// adding an event listener to the table to handle delete button clicks
tablelist.addEventListener("click",function(event){
    if(event.target.classList.contains("deleteBtn")){
        console.log("Delete button clicked");
// getting the closest table row to the clicked delete button
        const row = event.target.closest("tr");
// logging the row to the console for debugging purposes
        console.log(row);

        // getting the roll number of the student to be deleted from the data-roll attribute of the clicked button
        const deletebox = Number(event.target.dataset.roll);
// logging the roll number to the console for debugging purposes
        console.log(deletebox);
        // finding the index of the student object in the students array with the matching roll number
        let index = -1;
        for(let i = 0; i<students.length;i++){
            if(students[i].rollno === deletebox){
                index = i;
            }
        }

        console.log(index);
        // removing the student object from the students array if found and removing the corresponding table row from the HTML document
        if(index !== -1){
            students.splice(index,1);
        }
        // removing the table row from the HTML document
        row.remove();
        // logging the updated students array to the console for debugging purposes
        console.log(students);

    }
});