
// Set up basic webpage layout (header, sidebar, content)
function webContent() {
    const main = document.getElementById('main');
    const header = document.createElement('header');
    const container = document.createElement('div');
    const sidebar = document.createElement('div');
    const content = document.createElement('div')

    header.id = 'header'
    container.id = 'container'
    sidebar.className = 'sidebar'
    content.className = 'content'

    main.appendChild(header)
    main.appendChild(container)
    container.appendChild(sidebar)
    container.appendChild(content)

    header.innerText = 'ToDo App - expand sidebar btn'
    sidebar.innerText = 'Sidebar'

    // create new (todo, project) button
    const newButton = document.createElement('button')
    newButton.id = 'new'
    newButton.innerText = '+'
    sidebar.appendChild(newButton)

    // create popup with input for todo/project 
    const popinput = document.createElement('div')
    popinput.id = 'popup'
    const popcontent = document.createElement('div')
    popcontent.id = 'popcontent'

    popcontent.innerText = 'click to make new todo or project'

    main.appendChild(popinput)
    popinput.appendChild(popcontent)
}

// createNew button popup (allows user to create new todo or project)

function popup(){
    const newBTN = document.getElementById('new')
    const popup = document.getElementById('popup')
    
    newBTN.addEventListener('click', function() {
        popup.style.display = 'inline-block'  
    })

    // popup delete button
    const popdelete = document.createElement('button')
    popdelete.id = 'popdelete'

    popcontent.appendChild(popdelete)

    popdelete.onclick = function(){
        popup.style.display = 'none'
    }

    // delete popup if clicked outiside modal 
    window.onclick = function(e) {
        if (e.target == popup) {
            popup.style.display = 'none'
        }
    }
}

export { webContent, popup }