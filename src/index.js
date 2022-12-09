import './styles.css'
import { deletepop, popup } from './DOM.js' 
import { createCard } from './todo.js'


// webContent()
popup()
deletepop()
createCard()

function hasClass(elem, className) {
    return elem.classList.contains(className)
}

document.addEventListener('click', function(e) {
    if(hasClass(e.target, 'check')) {
        e.target.parentElement.style.textDecoration = 'line-through'
        let container = document.getElementById('todoContainer')
    } if (e.target.checked == false) {
        e.target.parentElement.style.textDecoration = 'none'
    }
})


