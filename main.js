let myLib = [];

function student(name, age, gender, shittiness){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.shittiness = shittiness;
}

function addStudent() {
    newName = document.getElementById('myForm').elements[0].value;
    newAge = document.getElementById('myForm').elements[1].value;
    newGender = document.getElementById('myForm').elements[2].value;
    newShittiness = document.getElementById('myForm').elements[3].value;
    const newStudent = new student(newName, newAge, newGender, newShittiness);
    myLib.push(newStudent);
    renderStudent();
}


function renderStudent() {
    document.getElementById('new').innerHTML = myLib.map((student) => 
    `
    <li>
    <p>Name: ${student.name}</p>
    <p>Age: ${student.age}</p>
    <p>Gender: ${student.gender}</p>
    <p>Shittiness: ${student.shittiness}</p>
    </li>
    `
    ).join('');
    
    
}

renderStudent();