import './styles.css'
import { deletepop, popup } from './DOM.js' 
import { createCard, todoJob } from './todo.js'
import { inbox, today, newproject, fillproject } from './inbox.js'


// webContent()
popup()
deletepop()
createCard()
todoJob()
inbox()
today()
newproject()
fillproject()

let sideopen = true
let background = window.matchMedia('(max-width: 800px)')

document.getElementById('headtitle').addEventListener('click', function(){
    if (sideopen == true) {
            document.getElementsByClassName('sidebar')[0].style.width = '0';
            document.getElementById('content').style.marginLeft = '0';
            sideopen = false
        } else if (sideopen == false) {
            document.getElementsByClassName('sidebar')[0].style.width = '175px';
            document.getElementById('content').style.marginLeft = "175px";
            sideopen = true
        }
    })

window.addEventListener('resize', function() {
    if(this.window.innerWidth > 800 ) {
        document.getElementsByClassName('sidebar')[0].style.width = '175px';
        document.getElementById('content').style.marginLeft = "175px";
    } else {
        document.getElementsByClassName('sidebar')[0].style.width = '0';
        document.getElementById('content').style.marginLeft = '0';
    }
})