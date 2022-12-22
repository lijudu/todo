import { myToDo }  from './todo.js'

let inboxBTN = document.getElementById('inbox')
let todayBTN = document.getElementById('today')
let projectBTN = document.getElementById('projects')

// click inboxbtn clears container and fills with all objects from myToDo
function inbox() {
    inboxBTN.addEventListener('click', function() {
        console.log('inbox')
    })
}

// click todayBtn clears container and fills with objects with due date = today from myToDo
function today() {
    todayBTN.addEventListener('click', function(){
        console.log('today!')
    })
}

// click projectsbtn clears container and fills with projects only 
function projects() {
    projectBTN.addEventListener('click', function() {
        console.log('projects!')
    })
}

export { inbox, today, projects }
