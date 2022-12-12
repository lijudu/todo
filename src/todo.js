
// define array of todos
let myToDo = [];

// object contructor for todo
function Todo(title, description, priority, date) {
    this.title = title
    this.description = description
    this.priority = priority
    this.date = date
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

    const newToDo = new Todo(title, detail, priority, date)
    myToDo.push(newToDo)
    console.log(myToDo)
    return myToDo
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

    todoContainer.id = 'todoContainer'
    leftcontainer.className = 'check-container'
    check.setAttribute('type', 'checkbox')
    check.setAttribute('class', 'check')
    title.className = 'todo'
    detailBTN.setAttribute('type', 'button')

    detailBTN.id = myToDo[myToDo.length - 1].title
    detailBTN.className = 'detail'
    detailBTN.name = 'detail'

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
}



function addToDo() {
    createNew()
    newLine()
}

function createCard(){
    const submit = document.getElementById('submit')

    submit.addEventListener('click', addToDo)
}

function todoJob() {
    function hasClass(elem, className) {
        return elem.classList.contains(className)
    }
    
    // strikethrough when checkbox checked
    document.addEventListener('click', function(e) {
        if(hasClass(e.target, 'check')) {
            e.target.parentElement.style.textDecoration = 'line-through'
            let container = document.getElementById('todoContainer')
    
        } if (e.target.checked == false) {
            e.target.parentElement.style.textDecoration = 'none'
        }
        // // pop up detiail modal when detailBTN clicked
        // if(hasClass(e.target, 'detail')){
        //     let mandu = e.target.name
        //     const item = myToDo.findIndex(item => item.title === mandu)
        //     console.log(mandu)
        //     console.log(item)
        // }
    })

}




export { createCard, todoJob, myToDo }