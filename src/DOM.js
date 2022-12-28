import startOfToday from 'date-fns/startOfToday'
import format from 'date-fns/format'


// popup input modal 
function popup(){
    const newBTN = document.getElementById('new')
    const popup = document.getElementById('popup')
    const submit = document.getElementById('submit')
    const titleInput = document.getElementById('titleInput')
    const detailInput = document.getElementById('detailInput')
    const priority = document.getElementById('priority')
    const date = document.getElementById('setDate')
    const file = document.getElementById('file')
    
    const today = startOfToday()
    const newdate = format(new Date(today), 'yyyy-MM-dd')
    date.setAttribute('min', newdate)
    
    newBTN.addEventListener('click', function() {
        popup.style.display = 'inline-block'  
        document.getElementsByClassName('popTitle')[0].innerText = 'CREATE NEW'
        submit.innerText = 'ADD TODO'
        titleInput.value = ""
        detailInput.value = ""
        // priority.value = 'low'
        date.value = ""

        detailInput.style.display = 'inline-block'
        // priority.style.display = 'inline-block'
        date.style.display = 'inline-block'
        file.style.display = 'inline-block'

    })

}

// popup delete button & delete if clicked outside
function deletepop(){
    const popdelete = document.getElementById('popDelete')
    const popup = document.getElementById('popup')
    const submit = document.getElementById('submit')
    
    // delete if x button clicked
    popdelete.onclick = function(){
        popup.style.display = 'none'
    }   
    // delete if clicked outside modal
    window.onclick = function(e) {
        if (e.target == popup) {
            popup.style.display = 'none'
            }    
        }
    // delete if submit button clicked 
    submit.onclick = function(){
        popup.style.display = 'none'
    }
}

function deleteDeet(){
    const deet = document.getElementById('deet')
    const deetDel = document.getElementById('deetDelete')

    // delete if x button clicked
    deetDel.onclick = function(){
        deet.style.display = 'none'
    }
    
}

export { popup, deletepop, deleteDeet }