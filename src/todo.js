import format from 'date-fns/format'
import startOfToday from 'date-fns/startOfToday'
import { popup } from './DOM.js'

import { inbox, line }  from './inbox.js'

// define array of todos
let myToDo = [];
// define array of project titles
let myProjects = [];

// increment number with new todo or new project
let idIncrement = 0
let projectIncrement = 0

// object contructor for todo
function Todo(title, priority, date, number, project, complete) {
    this.title = title
    this.priority = priority
    this.date = date
    this.number = number
    this.project = project
    this.complete = complete
}

// object constructor for projects
function Project(title, number) {
    this.title = title 
    this.number = number
}

// new todo (title, description, duedate priority) 
function createNew(){
    const content = document.getElementById('content')
    const submit = document.getElementById('submit')

    const title = document.getElementById('titleInput').value
    // get priority value
    const priority = document.querySelector('input[name="priority"]:checked').value

    // get date selection
    // const inputdate = document.getElementById('setDate').value
    // const date = format (new Date(inputdate), 'yyyy-MM-dd')
    const date = document.getElementById('setDate').value

    // set a number to refer to later when clicking link to DOM
    const number = String(idIncrement)

    // set project
    const project = document.getElementById('file').value

    // set completed status as incomplete
    const complete  = false

    const newToDo = new Todo(title, priority, date, number, project, complete)
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

    // link  id to a value in array so theyre linked
    deleteBTN.id = idIncrement
    editBTN.id = idIncrement


    // fill in title, due date
    title.innerText = myToDo[myToDo.length - 1].title
    due.innerText = myToDo[myToDo.length - 1].date


    // set background based on priority (should this be switch statement?)
        if (myToDo[myToDo.length - 1].priority == 'low') {
            todoContainer.style.backgroundColor = '#C7E6B8'
        } else if (myToDo[myToDo.length - 1].priority == "medium") {
            todoContainer.style.backgroundColor = '#FCEC89'
        } else if (myToDo[myToDo.length - 1].priority == 'high') {
            todoContainer.style.backgroundColor = '#FAAFA0'
        } 



    // filltodo()
    // increment number so when new todo created number increments
    idIncrement++
    return todoContainer
}


// pressing confirm edit will update myToDo array
function todoedit() {
    const edittitle = document.getElementById('titleInput').value
    const editpriority = document.querySelector('input[name="priority"]:checked').value
    const editdate = document.getElementById('setDate').value
    const editNumber = document.getElementById('submit').name
    const editproject = document.getElementById('file').value


    // console.log(editNumber)
    myToDo[editNumber].title = edittitle
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
        todoContainer.style.backgroundColor = '#C7E6B8'
    } else if (myToDo[editNumber].priority == "medium") {
        todoContainer.style.backgroundColor = '#FCEC89'
    } else if (myToDo[editNumber].priority == 'high') {
        todoContainer.style.backgroundColor = '#FAAFA0'
    } 


}


// add todos to local storage & renders
function addlocalstorage(myToDo) {
    localStorage.setItem('todo', JSON.stringify(myToDo))
    }
// add projects to local storage & renders
function addprojectstorage(myProjects) {
    localStorage.setItem('projects', JSON.stringify(myProjects))
}

// add idIncrement & projectIncrement to local storage
function addincrement(idIncrement, projectIncrement) {
    localStorage.setItem('idIncrement', JSON.stringify(idIncrement))
    localStorage.setItem('projectIncrement', JSON.stringify(projectIncrement))
}

// when loading page, get myToDo from local storage
function getlocalstorage() {
    const reference = localStorage.getItem('todo') 
        // if todo/reference exists 
        if (reference) {
            // converts todo back to array and stores in myToDo
            myToDo = JSON.parse(reference)
            return myToDo
        }
    }
// load page, get projects from local storage
function getprojectstorage(){
    const refer = localStorage.getItem('projects')
    //if projects exists
    if (refer) {
        myProjects = JSON.parse(refer)
        return myProjects
    }
}

// load page, get increments from local storage
function getincrement() {
    const increment = localStorage.getItem('idIncrement')
    const projinc = localStorage.getItem('projectIncrement')
    if (increment || projinc) {
        idIncrement = JSON.parse(increment)
        projectIncrement = JSON.parse(projinc)
        return idIncrement, projectIncrement
    }
}



window.onload = (e) => {
    getlocalstorage()
    getprojectstorage()
    getincrement()
    myToDo.forEach((item) => line(item))
    myProjects.forEach((item) => updateproject(item))
    console.log(myToDo)
}


// submitBTN diff functions if creating new or editing todo or create new project
function submitBTN(){
    const submit = document.getElementById('submit')
    let header = document.getElementById('containertitle')

    if(document.getElementById('titleInput').value == "") {
        alert('Please enter a title')
        return
    }
    if (submit.innerText == 'ADD TODO') {

        if (header.textContent == 'Inbox') {
            createNew()
            newLine()

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
        } else {
            createNew()
            idIncrement++
        }
    }
    else if (submit.innerText == 'CONFIRM EDIT') {
        if (header.textContent == 'Inbox') {
            todoedit()
            editline()

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
        }
    } else if (submit.innerText == 'ADD NEW PROJECT') {
        addproject()
        projectline()
        const priority = document.getElementsByClassName('priority')[0]
        const duedate = document.getElementById('date')
        const filetodo = document.getElementsByClassName('filetodo')[0]

        priority.style.display = 'inline-block'
        duedate.style.display = 'inline-block'
        filetodo.style.display = 'inline-block'
         
        projectIncrement++
        // console.log(projectIncrement)
        addprojectstorage(myProjects)

    }
    addlocalstorage(myToDo)
    addincrement(idIncrement, projectIncrement)
    
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
            if (e.target.checked == true) {      
                const completenumb = e.target.id
                const findcomplete = myToDo.findIndex(item => item.number == completenumb)
                const newcomplete = true
                myToDo[findcomplete].complete = newcomplete
                e.target.parentElement.style.textDecoration = 'line-through'
                console.log(myToDo)
                addlocalstorage(myToDo)
                getlocalstorage()
            }
            if (e.target.checked == false) {
                const completenumb = e.target.id
                const findcomplete = myToDo.findIndex(item => item.number == completenumb)
                const newcomplete = false
                myToDo[findcomplete].complete = newcomplete
                e.target.parentElement.style.textDecoration = 'none'
                console.log(myToDo)
                addlocalstorage(myToDo)
                getlocalstorage()
            }
            return myToDo
        }
        // delete BTN
        if (hasClass(e.target, 'deletetodo')) {
            const removetodo = e.target.id
            e.target.parentElement.remove()
            const removeIndex = myToDo.findIndex(item => item.number === removetodo)
            myToDo.splice(removeIndex, 1)
            console.log(myToDo)

            addlocalstorage(myToDo)
            getlocalstorage()
            addprojectstorage(myProjects)
            getprojectstorage()
        }
        // delete project 
        if (hasClass(e.target, 'delproject')) {
            const removeproj = e.target.id
            // remove project option from dropdown menu (on popup)
            const getdrop = document.getElementById('file')
            for (var i=0; i< getdrop.length; i++) {
                if (getdrop.options[i].value == removeproj) {
                    getdrop.remove(i)
                }
            }
            // delete project myproject array 
            e.target.parentElement.remove()
            const projindex = myProjects.findIndex(item => item.number === removeproj)
            myProjects.splice(projindex, 1)

            //  remove all todos linked to project being deleted
            const removetodo = myToDo.filter(item => item.project === removeproj)
            myToDo = myToDo.filter((item) => !removetodo.includes(item))

            console.log(removetodo)

            // if container same as one being deleted, go back to inbox
            // NEED TO REDO THIS PART SOMEHOW REUSE INBOX FUNCTION FROM INBOX.JS
            const content = document.getElementById('content')
            content.replaceChildren()

            const inboxheader = document.createElement('div')
            inboxheader.setAttribute('id', 'containertitle')
            inboxheader.innerText = 'Inbox'
            content.appendChild(inboxheader)
    
            myToDo.forEach((item) => line(item))

            addlocalstorage(myToDo)
            getlocalstorage()
            addprojectstorage(myProjects)
            getprojectstorage()
        }
        // edit BTN
        if(hasClass(e.target, 'editBTN')) {
            const edittodo = e.target.id
            const editIndex = myToDo.findIndex(item => item.number === edittodo)
            const popup = document.getElementById('popup')
            const submit = document.getElementById('submit')
            const titleInput = document.getElementById('titleInput')
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

function addproject() {
    const title = document.getElementById('titleInput').value
    const number = String(projectIncrement)
    const newproject = new Project(title, number)
    myProjects.push(newproject)
    console.log(myProjects)
    return myProjects
}

function projectline() {
    // add project name under project sidebar
    const listprojects = document.getElementsByClassName('listprojects')[0]
    const projecttitle = document.getElementById('titleInput').value

    const newdiv = document.createElement('div')
    newdiv.setAttribute('class', 'projects')
    newdiv.setAttribute('id', projectIncrement)
    newdiv.innerText = projecttitle

    const delproject = document.createElement('button')
    delproject.setAttribute('class', 'delproject')
    delproject.setAttribute('id', projectIncrement)
    delproject.innerHTML = '&times;'
    // delproject.innerHTML = '<span class="material-symbols-outlined">backspace</span>'

    listprojects.appendChild(newdiv)
    newdiv.appendChild(delproject)

    // add project name into option value on popup
    const fileoption = document.getElementById('file')
    const newoption = document.createElement('option')

    newoption.setAttribute('value', projectIncrement)
    newoption.innerText = projecttitle

    fileoption.appendChild(newoption)
}


function updateproject(item) {
    // add project name under project sidebar
    const listprojects = document.getElementsByClassName('listprojects')[0]
    // const projecttitle = document.getElementById('titleInput').value

    const newdiv = document.createElement('div')
    newdiv.setAttribute('class', 'projects')
    newdiv.setAttribute('id', item.number)
    newdiv.innerText = item.title

    const delproject = document.createElement('button')
    delproject.setAttribute('class', 'delproject')
    delproject.setAttribute('id', item.number)
    delproject.innerHTML = '&times;'
    // delproject.innerHTML = '<span class="material-symbols-outlined">backspace</span>'

    listprojects.appendChild(newdiv)
    newdiv.appendChild(delproject)

    

    // add project name into option value on popup
    const fileoption = document.getElementById('file')
    const newoption = document.createElement('option')

    newoption.setAttribute('value', item.number)
    newoption.innerText = item.title

    fileoption.appendChild(newoption)
}



export { createCard, todoJob, myToDo, newLine, idIncrement, projectIncrement, myProjects }