
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

    // create popup modal that is display:none by default
    const popinput = document.createElement('div')
    popinput.id = 'popup'
    const popcontent = document.createElement('div')
    popcontent.id = 'popcontent'

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

    // format popup modal content - should popup be own function?
    const poptitle = document.createElement('div')
    poptitle.className = 'poptitle'
    poptitle.innerText = 'Create New Todo or Project'
    popcontent.appendChild(poptitle)


    const popbelow = document.createElement('div')
    popbelow.className = 'popbelow'
    poptitle.appendChild(popbelow)

    const popsidebar = document.createElement('div')
    popsidebar.className = 'popsidebar'
    popsidebar.innerText = 'newToDoBTN'
    popbelow.appendChild(popsidebar)

    // popup input section (appended to popbelow)
    const popinput = document.createElement('div')
    popinput.className = 'popinput'

    popinput.innerText = 'main content'

    popbelow.appendChild(popinput)

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