const divs = document.querySelectorAll('div');


const squareCreate = function(num){
    num *= num;

    let divContainer = document.createElement('container');
    let resetButton = document.createElement('button');

    divContainer.setAttribute('class', 'divContainer');
    resetButton.setAttribute('class', 'reset-btn')
    resetButton.textContent = "Reset";

    divContainer.appendChild(resetButton);
    document.body.appendChild(divContainer);

    // loops through and creates / appends 256 child divs
    for(let i = 1; i <= num; i++){
        let childDivs = document.createElement('div');

        childDivs.setAttribute('class', 'squares');
        divContainer.appendChild(childDivs);
    }

}

squareCreate(16);

const squareColor = function(){
    let squares = document.querySelectorAll('.squares');
    const reset = document.querySelector('.reset-btn');

    let isDrawing = false;
    let x = 0;
    let y = 0;

    squares.forEach(item => {
        item.addEventListener('mousedown', (e)=> {
            x = e.offsetX;
            y = e.offsetY;
            
            if(x > 0 && y > 0){
                item.classList.add('colored');
                isDrawing = true;
            }            
        });

        item.addEventListener('mousemove', () => {
            if (isDrawing === true) {
                x = 0;
                y = 0;
                
                item.classList.add('colored');              
            }
        });

        item.addEventListener('mouseup', () => {
            x = 0;
            y = 0;
            isDrawing = false;
        });

        reset.addEventListener('click', () => {
            item.classList.remove('colored');
        });
    });

}
// random comment

squareColor();

