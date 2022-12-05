
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
    const popdelete = document.getElementById('popdelete')
    const popup = document.getElementById('popup')
    
    popdelete.onclick = function(){
        popup.style.display = 'none'
    }   

    window.onclick = function(e) {
        if (e.target == popup) {
            popup.style.display = 'none'
            }    
        }
    }



export { popup, deletepop }