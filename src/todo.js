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

// input content for new todo (title, description, duedate priority) 

// add input into new content section on maincontent 