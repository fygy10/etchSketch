const container = document.getElementById('grid')
const mouseMovement = document.createElement('div')
mouseMovement.classList.add('mouseMovement');
container.insertBefore(mouseMovement, container.firstChild);

createGrid ();

function createGrid(){
    for(i = 0; i <= 1600; i++){
        const square = createSquare ();
        mouseMovement.appendChild(square);
    }
}

function createSquare (){
    const content = document.createElement('div');
    content.classList.add('square');
    return content;    
}