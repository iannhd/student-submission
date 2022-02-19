const studentForm = document.querySelector('#studentForm')
const studentsContainer = document.querySelector('.students')
const nameInput = studentForm['name']
const ageInput = studentForm['age']
const rollInput = studentForm['roll']
/*
{
    name: '',
    age: number,
    roll: number
}

*/

const students = JSON.parse(localStorage.getItem('students')) || []

const addStudent = (name, age, roll) => {
    students.push({
        name,
        age,
        roll
    })


    localStorage.setItem('students', JSON.stringify(students)) // saved input to local storage and convert the submissanything to string in this case Object to String

    return {name, age, roll}
}

const createStudentElement = ({name, age, roll}) => {
    const studentDiv = document.createElement('div')
    const studentName = document.createElement('h2')
    const studentAge = document.createElement('p')
    const studentRoll = document.createElement('p')

    studentName.innerText = `Student name: ${name}`
    studentAge.innerText = `Student Age: ${age}`
    studentRoll.innerText = `Student Roll: ${roll}`

    studentDiv.append(studentName, studentAge, studentRoll)
    studentsContainer.appendChild(studentDiv)
    studentsContainer.style.display = students.length = 0 ? "none" : "flex"
    
}   

studentsContainer.style.display = students.length === 0 ? "none" : "flex"

students.forEach(createStudentElement)

studentForm.onsubmit= (e) => {
    e.preventDefault()
    const newStudent = addStudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    )

    createStudentElement(newStudent)

    nameInput.value = ""
    ageInput.value = ""
    rollInput.value = ""
}

// booking film
// e-ticket
// Diary
// antrian
// sosial media
// online shop