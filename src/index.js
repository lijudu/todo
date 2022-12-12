import './styles.css'
import { deletepop, popup } from './DOM.js' 
import { createCard, todoJob, myToDo } from './todo.js'


// webContent()
popup()
deletepop()
createCard()
todoJob()


function hasClass(elem, className) {
    return elem.classList.contains(className)
}

document.addEventListener('click', function(e) {
    if (hasClass(e.target, 'detail')) {
        const detail = e.target.id
        const getIndex = myToDo.findIndex(item => item.title === detail)
        console.log(getIndex)
        console.log(detail)
    }
}, false)

