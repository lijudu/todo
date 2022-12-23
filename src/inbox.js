import { myToDo, newLine }  from './todo.js'


const inboxBTN = document.getElementById('inbox')
const todayBTN = document.getElementById('today')
const projectBTN = document.getElementById('projects')
const content = document.getElementById('content')

function createline() {
    const content = document.getElementById('content')
    const todoContainer = document.createElement('div')
    const leftcontainer = document.createElement('div')
    const check = document.createElement('input')
    const title = document.createElement('label')
    const detailBTN = document.createElement('button')
    const due = document.createElement('div')
    const editBTN = document.createElement('button')
    const deleteBTN = document.createElement('button')


    todoContainer.className = 'todoContainer'
    leftcontainer.className = 'check-container'
    check.setAttribute('type', 'checkbox')
    check.setAttribute('class', 'check')
    title.className = 'todo'
    detailBTN.setAttribute('type', 'button')
    deleteBTN.setAttribute('class', 'deletetodo')
    editBTN.setAttribute('class', 'editBTN')
    due.setAttribute('class', 'duedate')
    editBTN.setAttribute('type', 'button')
    deleteBTN.setAttribute('type', 'button')
    detailBTN.className = 'detail'

    editBTN.innerText = 'Edit'
    deleteBTN.innerText = 'Delete'
    detailBTN.innerText = 'Details'

    content.appendChild(todoContainer)
    todoContainer.appendChild(leftcontainer)
    leftcontainer.appendChild(check)
    leftcontainer.appendChild(title)
    todoContainer.appendChild(detailBTN)
    todoContainer.appendChild(due)
    todoContainer.appendChild(editBTN)
    todoContainer.appendChild(deleteBTN)
}

// // click inboxbtn clears container and fills with all objects from myToDo
function inbox() {
    inboxBTN.addEventListener('click', function() {
        content.replaceChildren()
        // myToDo.forEach(createline)
        console.log('inbox')
    })
}


// click todayBtn clears container and fills with objects with due date = today from myToDo
function today() {
    todayBTN.addEventListener('click', function(){
        content.replaceChildren()
        console.log('today!')
    })
}

// click projectsbtn clears container and fills with projects only 
function projects() {
    projectBTN.addEventListener('click', function() {
        console.log('projects!')
    })
}

export { today, projects, inbox }
