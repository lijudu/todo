import './styles.css'
import { deletepop, popup, deleteDeet } from './DOM.js' 
import { createCard, todoJob, myToDo, idIncrement, projectIncrement } from './todo.js'
import { inbox, today, newproject, fillproject } from './inbox.js'


// webContent()
popup()
deletepop()
createCard()
todoJob()
deleteDeet()
inbox()
today()
newproject()
fillproject()

// // add todos to local storage
// function addlocalstorage(myToDo) {
//     localStorage.setItem('todo', JSON.stringify(myToDo))
// }

// const test1 = JSON.parse(localStorage.getItem('todo'))

// console.log(test1)


