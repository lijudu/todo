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

document.getElementById('headtitle').addEventListener('click', function(){  
    document.getElementsByClassName('sidebar')[0].style.width = '175px';
    document.getElementById('content').style.marginLeft = "175px";
})

document.getElementById('content').addEventListener('click', function(){
    document.getElementsByClassName('sidebar')[0].style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
})