const container = document.getElementById('grid')

const mouseMovement = document.createElement('div')
mouseMovement.setAttribute('id', mouseMovement);
mouseMovement.classList.add('mouseMovement');

mouseMovement.insertBefore(mouseMovement, body.firstChild);

createGrid ();

function createGrid(){
    for(i = 0; i < 16; i++){
        const square = createSquare ();
        mouseMovement.appendChild(square);
    }

}

function createSquare (){
    const div = document.createElement('div');
    div.classList.add('square');
    return div;

}