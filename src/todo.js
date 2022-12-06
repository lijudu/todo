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
    // get date selection

    const newToDo = new Todo(title, detail)
    myToDo.push(newToDo)
    console.log(myToDo)
}

function createCard(){
    const submit = document.getElementById('submit')

    submit.addEventListener('click', createNew)
}

export { createCard }