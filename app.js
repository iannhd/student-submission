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

const students = [
{
    name: 'Usman',
    age: 26,
    roll: 20
}
]

const addStudents = (name, age, roll) => {

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
}   

students.forEach(createStudentElement)