
const webContent = (() => {
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
    sidebar.innerText = 'Sidebar - home/today/upcoming/projects'

})();


export { webContent }