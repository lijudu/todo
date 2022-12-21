
// define array of todos
let myToDo = [];

// object contructor for todo
function Todo(title, description, priority, date, number) {
    this.title = title
    this.description = description
    this.priority = priority
    this.date = date
    this.number = number
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
    const date = document.getElementById('setDate').value

    // set a number to refer to later when clicking details/link to DOM
    const number = String(idIncrement)

    const newToDo = new Todo(title, detail, priority, date, number)
    myToDo.push(newToDo)
    console.log(myToDo)
    return myToDo, idIncrement
}

let idIncrement = 0

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

    // link detailBTN id to a value in array so theyre linked
    detailBTN.id = idIncrement
    detailBTN.className = 'detail'
    deleteBTN.id = idIncrement
    editBTN.id = idIncrement
    due.setAttribute('class', 'duedate')
    // todoContainer.name = idIncrement

    editBTN.setAttribute('type', 'button')
    deleteBTN.setAttribute('type', 'button')

    title.innerText = myToDo[myToDo.length - 1].title
    detailBTN.innerText = 'Details'
    due.innerText = myToDo[myToDo.length - 1].date
    editBTN.innerText = 'Edit'
    deleteBTN.innerText = 'Delete'

    content.appendChild(todoContainer)
    todoContainer.appendChild(leftcontainer)
    leftcontainer.appendChild(check)
    leftcontainer.appendChild(title)
    todoContainer.appendChild(detailBTN)
    todoContainer.appendChild(due)
    todoContainer.appendChild(editBTN)
    todoContainer.appendChild(deleteBTN)

    // set background based on priority (should this be switch statement?)
    // can this be a separate function?
        if (myToDo[myToDo.length - 1].priority == 'low') {
            todoContainer.style.backgroundColor = 'green'
        } else if (myToDo[myToDo.length - 1].priority == "medium") {
            todoContainer.style.backgroundColor = 'yellow'
        } else if (myToDo[myToDo.length - 1].priority == 'high') {
            todoContainer.style.backgroundColor = 'red'
        } 
        // increment number so when new todo created number increments
    idIncrement++
    return idIncrement
    
}

// pressing confirm edit will update myToDo array
function todoedit() {
    const edittitle = document.getElementById('titleInput').value
    const editdetail = document.getElementById('detailInput').value
    const editpriority = document.querySelector('input[name="priority"]:checked').value
    const editdate = document.getElementById('setDate').value
    const editNumber = document.getElementById('submit').name


    // console.log(editNumber)
    myToDo[editNumber].title = edittitle
    myToDo[editNumber].description = editdetail
    myToDo[editNumber].priority = editpriority
    myToDo[editNumber].date = editdate
    console.log(editpriority)
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
        console.log('low')
        todoContainer.style.backgroundColor = 'green'
    } else if (myToDo[editNumber].priority == "medium") {
        todoContainer.style.backgroundColor = 'yellow'
    } else if (myToDo[editNumber].priority == 'high') {
        todoContainer.style.backgroundColor = 'red'
    } 
}

// submitBTN diff functions if creating new or editing todo
function submitBTN(){
    const submit = document.getElementById('submit')
    if (submit.innerText == 'ADD TODO') {
        createNew()
        newLine()
    } else if (submit.innerText == 'CONFIRM EDIT') {
        todoedit()
        editline()
    }
}

// function addToDo() {
//     createNew()
//     newLine()
// }

function createCard(){
    const submit = document.getElementById('submit')

    // submit.addEventListener('click', addToDo)
    submit.addEventListener('click', submitBTN)
}

let getIndex = ""

function todoJob() {
    function hasClass(elem, className) {
        return elem.classList.contains(className)
    }
    
    // let getIndex = ""

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
            // console.log('this index= ' + getIndex)
            return getIndex
        }
        // delete BTN
        if (hasClass(e.target, 'deletetodo')) {
            const removetodo = e.target.id
            e.target.parentElement.remove()
            const removeIndex = myToDo.findIndex(item => item.number === removetodo)
            myToDo.splice(removeIndex, 1)
            console.log(removetodo)
            console.log(myToDo)
        }
        // edit BTN
        if(hasClass(e.target, 'editBTN')) {
            const edittodo = e.target.id
            const editIndex = myToDo.findIndex(item => item.number === edittodo)
            const popup = document.getElementById('popup')
            const submit = document.getElementById('submit')
            const sidebar = document.getElementsByClassName('popSidebar')[0]
            const titleInput = document.getElementById('titleInput')
            const detailInput = document.getElementById('detailInput')
            // const priority = document.getElementById('priority')
            const priority = document.querySelector('input[name="priority"]')
            const date = document.getElementById('setDate')
            popup.style.display = 'inline-block'

            document.getElementsByClassName('popTitle')[0].innerText = 'EDIT'
            submit.innerText = 'CONFIRM EDIT'
            titleInput.value = myToDo[editIndex].title
            detailInput.value = myToDo[editIndex].description
            date.value = myToDo[editIndex].date

            if (myToDo[editIndex].priority == 'low') {
                document.getElementById('priority1').checked = true
            } else if (myToDo[editIndex].priority == 'medium'){
                document.getElementById('priority2').checked = true
            } else if (myToDo[editIndex].priority == 'high') {
                document.getElementById('priority3').checked = true
            }

            sidebar.style.display = 'none'

            submit.setAttribute('name', editIndex)

        
        
        }
            // console.log('this index= ' + getIndex)
            // return getIndex
    })
    // console.log('this index= ' + getIndex)
    // return getIndex
}



export { createCard, todoJob, myToDo }
