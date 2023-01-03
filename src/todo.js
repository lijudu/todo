import format from 'date-fns/format'
import startOfToday from 'date-fns/startOfToday'

import { line }  from './inbox.js'

// define array of todos
let myToDo = [];

// increment number with new todo or new project
let idIncrement = 0
let projectIncrement = 0

// object contructor for todo
function Todo(title, description, priority, date, number, project) {
    this.title = title
    this.description = description
    this.priority = priority
    this.date = date
    this.number = number
    this.project = project
}

// new todo (title, description, duedate priority) 
function createNew(){
    const content = document.getElementById('content')
    const submit = document.getElementById('submit')

    const title = document.getElementById('titleInput').value
    const detail = document.getElementById('detailInput').value
    // get priority value
    const priority = document.querySelector('input[name="priority"]:checked').value

    // get date selection
    // const inputdate = document.getElementById('setDate').value
    // const date = format (new Date(inputdate), 'yyyy-MM-dd')
    const date = document.getElementById('setDate').value

    // set a number to refer to later when clicking details/link to DOM
    const number = String(idIncrement)

    // set project
    const project = document.getElementById('file').value

    const newToDo = new Todo(title, detail, priority, date, number, project)
    myToDo.push(newToDo)
    console.log(myToDo)
    return myToDo, idIncrement 
}


// creates new card todo appended to div content (should this be under DOM??)
function newLine() {
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

    // link detailBTN id to a value in array so theyre linked
    detailBTN.id = idIncrement
    deleteBTN.id = idIncrement
    editBTN.id = idIncrement


    // fill in title, due date
    title.innerText = myToDo[myToDo.length - 1].title
    // title.innerText = myToDo[idIncrement].title
    due.innerText = myToDo[myToDo.length - 1].date
    // due.innerText = myToDo[idIncrement].date


    // set background based on priority (should this be switch statement?)
        if (myToDo[myToDo.length - 1].priority == 'low') {
            todoContainer.style.backgroundColor = 'green'
        } else if (myToDo[myToDo.length - 1].priority == "medium") {
            todoContainer.style.backgroundColor = 'yellow'
        } else if (myToDo[myToDo.length - 1].priority == 'high') {
            todoContainer.style.backgroundColor = 'red'
        } 

    // filltodo()
    // increment number so when new todo created number increments
    idIncrement++
    return todoContainer
}


// pressing confirm edit will update myToDo array
function todoedit() {
    const edittitle = document.getElementById('titleInput').value
    const editdetail = document.getElementById('detailInput').value
    const editpriority = document.querySelector('input[name="priority"]:checked').value
    const editdate = document.getElementById('setDate').value
    const editNumber = document.getElementById('submit').name
    const editproject = document.getElementById('file').value


    // console.log(editNumber)
    myToDo[editNumber].title = edittitle
    myToDo[editNumber].description = editdetail
    myToDo[editNumber].priority = editpriority
    myToDo[editNumber].date = editdate
    myToDo[editNumber].project = editproject
    console.log(myToDo)

    return myToDo
}

// clicking confirm edit changes DOM properties 
function editline() {
    const editNumber = document.getElementById('submit').name
    const title = document.getElementsByClassName('todo')[editNumber]
    const date = document.getElementsByClassName('duedate')[editNumber]
    let todoContainer = document.getElementsByClassName('todoContainer')[editNumber]

    title.innerText = myToDo[editNumber].title
    date.innerText = myToDo[editNumber].date
    
    if (myToDo[editNumber].priority == 'low') {
        todoContainer.style.backgroundColor = 'green'
    } else if (myToDo[editNumber].priority == "medium") {
        todoContainer.style.backgroundColor = 'yellow'
    } else if (myToDo[editNumber].priority == 'high') {
        todoContainer.style.backgroundColor = 'red'
    } 


}




// submitBTN diff functions if creating new or editing todo or create new project
function submitBTN(){
    const submit = document.getElementById('submit')
    let header = document.getElementById('containertitle')

    if (submit.innerText == 'ADD TODO') {
        if (header.textContent == 'Inbox') {
            createNew()
            newLine()
            return myToDo
        } else if (header.textContent == 'Today') {
            createNew()
            
            const today = startOfToday()
            const newdate = format(new Date(today), 'yyyy-MM-dd')
            
            content.replaceChildren()
    
            const todayheader = document.createElement('div')
            todayheader.setAttribute('id', 'containertitle')
            todayheader.innerText = 'Today'
            content.appendChild(todayheader)
    
            const filterdates = myToDo.filter(item => item.date == newdate)
            filterdates.forEach((item) => line(item))
            // console.log(filterdates)
            idIncrement++
            return myToDo
        } else if (document.getElementById('file').value == document.getElementById('containertitle').attributes['name'].value) {
            const editproject = document.getElementById('file').value
            const projectbox = header.textContent
            const newname = document.getElementById('containertitle').attributes['name'].value

            createNew()

            content.replaceChildren()

            const projectheader = document.createElement('div')
            projectheader.setAttribute('id', 'containertitle')
            projectheader.setAttribute('name', newname)
            projectheader.innerText = projectbox
            content.appendChild(projectheader)

            const filtertodo = myToDo.filter(item => item.project == editproject)
            filtertodo.forEach((item) => line(item))

            console.log(editproject)
            idIncrement++
            return myToDo
        } else {
            createNew()
            idIncrement++
        }
    }
    else if (submit.innerText == 'CONFIRM EDIT') {
        if (header.textContent == 'Inbox') {
            todoedit()
            editline()
            return myToDo
        } else if (header.textContent == 'Today') {
            todoedit()

            const today = startOfToday()
            const newdate = format(new Date(today), 'yyyy-MM-dd')
            
            content.replaceChildren()
    
            const todayheader = document.createElement('div')
            todayheader.setAttribute('id', 'containertitle')
            todayheader.innerText = 'Today'
            content.appendChild(todayheader)
    
            const filterdates = myToDo.filter(item => item.date == newdate)
            filterdates.forEach((item) => line(item))
            // console.log(filterdates)
            return myToDo
        } else if (document.getElementById('file').value == document.getElementById('containertitle').attributes['name'].value) {
            const editproject = document.getElementById('file').value
            const projectbox = header.textContent
            const newname = document.getElementById('containertitle').attributes['name'].value

            todoedit()

            content.replaceChildren()

            const projectheader = document.createElement('div')
            projectheader.setAttribute('id', 'containertitle')
            projectheader.setAttribute('name', newname)
            projectheader.innerText = projectbox
            content.appendChild(projectheader)

            const filtertodo = myToDo.filter(item => item.project == newname)
            filtertodo.forEach((item) => line(item))

            console.log(editproject)
            return myToDo
        } else {
            const projectbox = header.textContent
            const newname = document.getElementById('containertitle').attributes['name'].value

            todoedit()
            content.replaceChildren()

            const projectheader = document.createElement('div')
            projectheader.setAttribute('id', 'containertitle')
            projectheader.setAttribute('name', newname)
            projectheader.innerText = projectbox
            content.appendChild(projectheader)

            const filtertodo = myToDo.filter(item => item.project == newname)
            filtertodo.forEach((item) => line(item))

            return myToDo
        }
    } else if (submit.innerText == 'ADD NEW PROJECT') {
        projectline()
        const detail = document.getElementById('detailInput')
        const priority = document.getElementsByClassName('priority')[0]
        const duedate = document.getElementById('date')
        const filetodo = document.getElementsByClassName('filetodo')[0]

        detail.style.display = 'inline-block'
        priority.style.display = 'inline-block'
        duedate.style.display = 'inline-block'
        filetodo.style.display = 'inline-block'
         
        projectIncrement++
        // console.log(projectIncrement)

    }
}



function createCard(){
    const submit = document.getElementById('submit')

    // submit.addEventListener('click', addToDo)
    submit.addEventListener('click', submitBTN)
}


function todoJob() {
    function hasClass(elem, className) {
        return elem.classList.contains(className)
    }
    
    // strikethrough when checkbox checked
    document.addEventListener('click', function(e) {
        if(hasClass(e.target, 'check')) {
            e.target.parentElement.style.textDecoration = 'line-through'
    
        } if (e.target.checked == false) {
            e.target.parentElement.style.textDecoration = 'none'
        }
        // pop up detiail modal when detailBTN clicked
        if (hasClass(e.target, 'detail')) {
            const detail = e.target.id
            let getIndex = myToDo.findIndex(item => item.number === detail)
            
            const deet = document.getElementById('deet')
            const deettitle = document.getElementsByClassName('deettitle')[0]
            const deetdetails = document.getElementsByClassName('deetdetails')[0]
            const deetpriority = document.getElementsByClassName('deetpriority')[0]
            const deetdate  = document.getElementsByClassName('deetdate')[0]


            if (deet.style.display = 'inline-block') {
                deettitle.innerText = 'Title: ' + myToDo[getIndex].title
                deetdetails.innerText = 'Details: ' + myToDo[getIndex].description
                deetpriority.innerText = 'Priority: ' + myToDo[getIndex].priority
                deetdate.innerText = 'Due: ' + myToDo[getIndex].date
            }
            return getIndex
        }
        // delete BTN
        if (hasClass(e.target, 'deletetodo')) {
            const removetodo = e.target.id
            e.target.parentElement.remove()
            const removeIndex = myToDo.findIndex(item => item.number === removetodo)
            myToDo.splice(removeIndex, 1)
            console.log(myToDo)
            return
        }
        // edit BTN
        if(hasClass(e.target, 'editBTN')) {
            const edittodo = e.target.id
            const editIndex = myToDo.findIndex(item => item.number === edittodo)
            const popup = document.getElementById('popup')
            const submit = document.getElementById('submit')
            const titleInput = document.getElementById('titleInput')
            const detailInput = document.getElementById('detailInput')
            // const priority = document.getElementById('priority')
            const priority = document.querySelector('input[name="priority"]')
            const date = document.getElementById('setDate')
            const file = document.getElementById('file')
            popup.style.display = 'inline-block'

            // const filetodo = document.getElementById('filetodo')
            // filetodo.style.display = 'none'


            document.getElementsByClassName('popTitle')[0].innerText = 'EDIT'
            submit.innerText = 'CONFIRM EDIT'
            titleInput.value = myToDo[editIndex].title
            detailInput.value = myToDo[editIndex].description
            date.value = myToDo[editIndex].date
            file.value = myToDo[editIndex].project

            // file.style.display = 'none'

            if (myToDo[editIndex].priority == 'low') {
                document.getElementById('priority1').checked = true
            } else if (myToDo[editIndex].priority == 'medium'){
                document.getElementById('priority2').checked = true
            } else if (myToDo[editIndex].priority == 'high') {
                document.getElementById('priority3').checked = true
            }

            

            submit.setAttribute('name', editIndex)

        }
    })
}

function projectline() {
    // add project name under project sidebar
    const listprojects = document.getElementsByClassName('listprojects')[0]
    const projecttitle = document.getElementById('titleInput').value

    const newdiv = document.createElement('div')
    newdiv.setAttribute('class', 'projects')
    newdiv.setAttribute('id', projectIncrement)
    newdiv.innerText = projecttitle

    listprojects.appendChild(newdiv)

    // add project name into option value on popup
    const fileoption = document.getElementById('file')
    const newoption = document.createElement('option')

    newoption.setAttribute('value', projectIncrement)
    newoption.innerText = projecttitle

    fileoption.appendChild(newoption)
}



export { createCard, todoJob, myToDo, newLine, idIncrement }