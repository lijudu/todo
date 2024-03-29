import { myToDo, myProjects }  from './todo.js'
import startOfToday from 'date-fns/startOfToday'
import format from 'date-fns/format'

const inboxBTN = document.getElementById('inbox')
const todayBTN = document.getElementById('today')
const content = document.getElementById('content')


// // click inboxbtn clears container and fills with all objects from myToDo
function inbox() {
    inboxBTN.addEventListener('click', function() {
        content.replaceChildren()

        const inboxheader = document.createElement('div')
        inboxheader.setAttribute('id', 'containertitle')
        inboxheader.innerText = 'Inbox'
        content.appendChild(inboxheader)

        myToDo.forEach((item) => line(item))
    })
}

function line(item) {
    const content = document.getElementById('content')
    const todoContainer = document.createElement('div')
    const leftcontainer = document.createElement('div')
    const check = document.createElement('input')
    const title = document.createElement('label')
    const due = document.createElement('div')
    const editBTN = document.createElement('button')
    const deleteBTN = document.createElement('button')


    todoContainer.className = 'todoContainer'
    leftcontainer.className = 'check-container'
    check.setAttribute('type', 'checkbox')
    check.setAttribute('class', 'check')
    title.className = 'todo'
    deleteBTN.setAttribute('class', 'deletetodo')
    editBTN.setAttribute('class', 'editBTN')
    due.setAttribute('class', 'duedate')
    editBTN.setAttribute('type', 'button')
    deleteBTN.setAttribute('type', 'button')

    editBTN.innerText = 'Edit'
    deleteBTN.innerText = 'Delete'

    const editicon = document.createElement('div')
    editicon.innerHTML = '<i class="material-symbols-outlined">Edit</i>'
    editBTN.appendChild(editicon)

    const deleteicon = document.createElement('div')
    deleteicon.innerHTML = '<i class="material-symbols-outlined">Delete</i>'
    deleteBTN.appendChild(deleteicon)

    content.appendChild(todoContainer)
    todoContainer.appendChild(leftcontainer)
    leftcontainer.appendChild(check)
    leftcontainer.appendChild(title)
    todoContainer.appendChild(due)
    todoContainer.appendChild(editBTN)
    todoContainer.appendChild(deleteBTN)


    function filltodo(){
        deleteBTN.id = item.number
        editBTN.id = item.number
        check.id = item.number

        title.innerText = item.title
        due.innerText = item.date

        if (item.priority == 'low') {
            todoContainer.style.backgroundColor = '#C7E6B8'
        } else if (item.priority == "medium") {
            todoContainer.style.backgroundColor = '#FCEC89'
        } else if (item.priority == 'high') {
            todoContainer.style.backgroundColor = '#FAAFA0'
        } 

        if (item.complete == true) {
            check.checked = true
            check.parentElement.style.textDecoration = 'line-through'
        }
    }

    // if completed todo then cross out


    filltodo()
    return todoContainer
}



// click todayBtn clears container and fills with objects with due date = today from myToDo
function today() {
    todayBTN.addEventListener('click', function(){
        const today = startOfToday()
        const newdate = format(new Date(today), 'yyyy-MM-dd')
        
        content.replaceChildren()

        const todayheader = document.createElement('div')
        todayheader.setAttribute('id', 'containertitle')
        todayheader.innerText = 'Today'
        content.appendChild(todayheader)

        const filterdates = myToDo.filter(item => item.date == newdate)
        filterdates.forEach((item) => line(item))
        console.log(filterdates)
    })
}

// click projectsbtn expands projects section in sidebar
const projectbtn = document.getElementById('newproject')
const popup = document.getElementById('popup')
const submit = document.getElementById('submit')
const priority = document.getElementsByClassName('priority')[0]
const duedate = document.getElementById('date')
const filetodo = document.getElementsByClassName('filetodo')[0]

function newproject() {
    projectbtn.addEventListener('click', function() {
        const titleInput = document.getElementById('titleInput')
        popup.style.display = 'inline-block'
        document.getElementsByClassName('popTitle')[0].innerText = 'NEW PROJECT'
        submit.innerText = 'ADD NEW PROJECT'
        
        priority.style.display = 'none'
        duedate.style.display = 'none'
        filetodo.style.display = 'none'

        titleInput.value = ""
        titleInput.setAttribute('placeholder', "")
        titleInput.setAttribute('maxlength', "11")

    })
}


function fillproject() {
    function hasClass(elem, className) {
        return elem.classList.contains(className)
    }

    document.addEventListener('click', function(e) {
        if(hasClass(e.target, 'projects')) {
            content.replaceChildren()

            let findproject = e.target.id
            const namefind = myProjects.find(item => item.number == e.target.id)
            const nameheader = namefind.title

            const projectheader = document.createElement('div')
            projectheader.setAttribute('id', 'containertitle')
            projectheader.setAttribute('name', findproject)
            projectheader.innerText = nameheader

            content.appendChild(projectheader)

            const filtertodo = myToDo.filter(item => item.project == findproject)
            filtertodo.forEach((item) => line(item))
            console.log(myToDo)

            console.log(findproject)

            
        }
    })
}


// clicking on each project clears container, repopulates with todos under project
// any new todos will now be added to projects container

export { today, inbox, newproject, fillproject, line }
