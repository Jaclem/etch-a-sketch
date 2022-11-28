const defaultColor = 'black';
const reset = document.querySelector('.reset');
const drawPad = document.getElementById('draw-pad');

let mouseDown = false;

// create drawing squares in a grid for the canvas (drawing pad)

const squareCreate = function(num){
    let divContainer = document.getElementById('draw-pad');
    divContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;


    for(let i = 0; i < num * num; i++){
        let childDivs = document.createElement('div');
        childDivs.setAttribute('class', 'squares');
        divContainer.appendChild(childDivs);
    }

}

squareCreate(16);

// add functionality to the coloring effect of the canvas

document.body.addEventListener('mousedown', (e)=>{
    e.preventDefault();
    square = e.target;

    if(e.target.parentElement == drawPad){
        squareColor(square);
        mouseDown = true;
    }     
});

document.body.addEventListener('mouseup', (e)=> {
    square = e.target;
    mouseDown = false;  
     
});

drawPad.addEventListener('mousemove', (e)=> {
    square = e.target;

    if(mouseDown == true && e.target.parentElement == drawPad){
        squareColor(square);
    } 
});

const squareColor = function(square) {
    square.style.backgroundColor = defaultColor;
}

// https://stackoverflow.com/questions/71377320/css-js-mousedown-getting-stuck-during-drag-event


