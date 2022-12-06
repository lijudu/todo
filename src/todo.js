

// object contructor for todo
function Todo(title, description, priority, date) {
    this.title = title
    this.description = description
    this.priority = priority
    this.date = date
    this.info(()=>{
        console.log(title, author, priority)
    })
}

// new todo (title, description, duedate priority) 
function createNewTD(){
    const content = document.getElementById('content')
    const submit = document.getElementById('submit')

    const titleInput = document.getElementById('titleInput').value

    console.log(titleInput)
}
