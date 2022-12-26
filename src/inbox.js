import { myToDo, newLine, idIncrement }  from './todo.js'


const inboxBTN = document.getElementById('inbox')
const todayBTN = document.getElementById('today')
const projectBTN = document.getElementById('projects')
const content = document.getElementById('content')

// function createline() {
//     const content = document.getElementById('content')
//     const todoContainer = document.createElement('div')
//     const leftcontainer = document.createElement('div')
//     const check = document.createElement('input')
//     const title = document.createElement('label')
//     const detailBTN = document.createElement('button')
//     const due = document.createElement('div')
//     const editBTN = document.createElement('button')
//     const deleteBTN = document.createElement('button')


//     todoContainer.className = 'todoContainer'
//     leftcontainer.className = 'check-container'
//     check.setAttribute('type', 'checkbox')
//     check.setAttribute('class', 'check')
//     title.className = 'todo'
//     detailBTN.setAttribute('type', 'button')
//     deleteBTN.setAttribute('class', 'deletetodo')
//     editBTN.setAttribute('class', 'editBTN')
//     due.setAttribute('class', 'duedate')
//     editBTN.setAttribute('type', 'button')
//     deleteBTN.setAttribute('type', 'button')
//     detailBTN.className = 'detail'

//     editBTN.innerText = 'Edit'
//     deleteBTN.innerText = 'Delete'
//     detailBTN.innerText = 'Details'

//     content.appendChild(todoContainer)
//     todoContainer.appendChild(leftcontainer)
//     leftcontainer.appendChild(check)
//     leftcontainer.appendChild(title)
//     todoContainer.appendChild(detailBTN)
//     todoContainer.appendChild(due)
//     todoContainer.appendChild(editBTN)
//     todoContainer.appendChild(deleteBTN)
// }

// // click inboxbtn clears container and fills with all objects from myToDo
function inbox() {
    inboxBTN.addEventListener('click', function() {
        content.replaceChildren()
        // myToDo.forEach((item) => console.log(item))
        myToDo.forEach((item) => line(item))
    })
}

function line(item) {
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


    function filltodo(){
        detailBTN.id = item.number
        deleteBTN.id = item.number
        editBTN.id = item.number

        title.innerText = item.title
        due.innerText = item.date

        if (item.priority == 'low') {
            todoContainer.style.backgroundColor = 'green'
        } else if (item.priority == "medium") {
            todoContainer.style.backgroundColor = 'yellow'
        } else if (item.priority == 'high') {
            todoContainer.style.backgroundColor = 'red'
        } 
    }

    filltodo()
    return todoContainer
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
