
// popup input modal 
function popup(){
    const newBTN = document.getElementById('new')
    const popup = document.getElementById('popup')
    
    newBTN.addEventListener('click', function() {
        popup.style.display = 'inline-block'  
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
        deet.style.display = 'none'
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