const defaultColor = 'black';
const reset = document.getElementById('reset');
const drawPad = document.getElementById('draw-pad');
const colorInput = document.getElementById('color-picker');
const slider = document.getElementById('slider-range');
const output = document.getElementById('output');

let mouseDown = false;
let colorClicked = false;
let drawPadClear = false;
let drawPadSize = slider.value;

output.innerHTML = drawPadSize;

// create drawing squares in a grid for the canvas (drawing pad)

const squareCreate = function(num){
    const divWithClass = document.querySelectorAll('div.squares')
    const divsExist = divWithClass.length > 0;

    drawPad.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    // Checks if divs already exist in the pad and if they do it removes them before below function adds them
    if(divsExist == true){
        divWithClass.forEach(pad => {
            pad.remove();
        })
    }

    for(let i = 0; i < num * num; i++){
        let childDivs = document.createElement('div');
        childDivs.setAttribute('class', 'squares');
        drawPad.appendChild(childDivs);
    }
}

// squareCreate(16);

// function allows users to draw and determines the color of the brush

const draw = function(square) {
    let colorPicked = colorInput.value;

    if(colorClicked == false){
        square.style.backgroundColor = defaultColor;
    } else {
        square.style.backgroundColor = colorPicked;
    }
}

const start = function(val) {
    output.innerHTML = val;
    squareCreate(val);
}
// event listeners //

window.onload = () => {
    let val = slider.value;
    squareCreate(val);
};

// add functionality to the coloring effect of the canvas

drawPad.addEventListener('mousedown', (e)=>{
    e.preventDefault();
    square = e.target;

    if(e.target.parentElement == drawPad){
        draw(square);
        mouseDown = true;
    }     
});

document.addEventListener('mouseup', (e)=> {
    square = e.target;
    mouseDown = false;  
});

drawPad.addEventListener('mousemove', (e)=> {
    square = e.target;

    if(mouseDown == true && e.target.parentElement == drawPad){
        draw(square);
    } 
});

colorInput.addEventListener('input', ()=> { colorClicked = true;});

reset.addEventListener('click', ()=> {
    let val = slider.value;
    squareCreate(val);
});

slider.addEventListener('input', ()=> {
    let inputVal = slider.value;
    start(inputVal);
})


// https://stackoverflow.com/questions/71377320/css-js-mousedown-getting-stuck-during-drag-event


