import startOfToday from 'date-fns/startOfToday'
import format from 'date-fns/format'


// popup input modal 
function popup(){
    const newBTN = document.getElementById('new')
    const popup = document.getElementById('popup')
    const submit = document.getElementById('submit')
    const titleInput = document.getElementById('titleInput')
    const priority = document.getElementsByClassName('priority')[0]
    const duedate = document.getElementsByClassName('duedate')[0]
    const file = document.getElementsByClassName('filetodo')[0]
    
    const date = document.getElementById('setDate')

    
    newBTN.addEventListener('click', function() {
        popup.style.display = 'inline-block'  
        document.getElementsByClassName('popTitle')[0].innerText = 'CREATE NEW'
        submit.innerText = 'ADD TODO'
        titleInput.value = ""
        // priority.value = 'low'
        duedate.value = ""

        priority.style.display = 'inline-block'
        duedate.style.display = 'inline-block'
        file.style.display = 'inline-block'

        const today = startOfToday()
        const newdate = format(new Date(today), 'yyyy-MM-dd')
        date.setAttribute('min', newdate)

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

export { popup, deletepop }