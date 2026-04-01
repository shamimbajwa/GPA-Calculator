function createSubjects(){

let number = document.getElementById("subjects").value;
let container = document.getElementById("subjectContainer");

container.innerHTML = "";

for(let i=1;i<=number;i++){

container.innerHTML +=

`<div class="box">

<p>Subject ${i}</p>

<input type="number" class="marks" placeholder=" Obtained Marks">

<select class="credits">
<option>Credits</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
</select>

</div>`;

}
}

function calculateGPA(){

let marks = document.querySelectorAll(".marks");
let credits = document.querySelectorAll(".credits");

let totalPoints = 0;
let totalCredits = 0;

for(let i=0;i<marks.length;i++){

let m = marks[i].value;
let c = credits[i].value;

let grade = 0;

if(m>=85) grade=4;
else if(m>=75) grade=3.5;
else if(m>=65) grade=3;
else if(m>=50) grade=2;
else grade=0;

totalPoints += grade * c;
totalCredits += parseInt(c);

}

let gpa = totalPoints / totalCredits;

document.getElementById("result").innerText = "Your GPA is: " + gpa.toFixed(2);

}