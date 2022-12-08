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
}

// creates new card todo appended to div content (should this be under DOM??)
function newLine() {
    const content = document.getElementById('content')
    const container = document.createElement('div')
    const check = document.createElement('input')
    const title = document.createElement('div')
    const detailBTN = document.createElement('button')
    const due = document.createElement('div')
    const editBTN = document.createElement('button')
    const deleteBTN = document.createElement('button')

    container.className = 'container'
    check.setAttribute('type', 'checkbox')
    title.className = 'todo'
    detailBTN.setAttribute('type', 'button')
    editBTN.setAttribute('type', 'button')
    deleteBTN.setAttribute('type', 'button')

    title.innerText = myToDo[myToDo.length - 1].title
    detailBTN.innerText = 'Details'
    due.innerText = myToDo[myToDo.length - 1].date
    editBTN.innerText = 'Edit'
    deleteBTN.innerText = 'Delete'

    content.appendChild(container)
    container.appendChild(check)
    container.appendChild(title)
    container.appendChild(detailBTN)
    container.appendChild(due)
    container.appendChild(editBTN)
    container.appendChild(deleteBTN)

}

function addToDo() {
    createNew()
    newLine()
}

function createCard(){
    const submit = document.getElementById('submit')

    submit.addEventListener('click', addToDo)
}

export { createCard }