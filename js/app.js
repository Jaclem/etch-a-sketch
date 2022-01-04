const divs = document.querySelectorAll('div');



const squareCreate = function(){

    let divContainer = document.createElement('container');

    divContainer.setAttribute('class', 'divContainer');
    document.body.appendChild(divContainer);

    // loops through and creates / appends 256 child divs
    for(let i = 1; i <= 256; i++){
        let childDivs = document.createElement('div');

        childDivs.setAttribute('class', 'squares');
        divContainer.appendChild(childDivs);
    }
}

const squareColor = function(){
    let squares = document.querySelectorAll('.squares');
    let isDrawing = false;
    let x = 0;
    let y = 0;

    squares.forEach(item => {
        item.addEventListener('mousedown', (e)=> {
            x = e.offsetX;
            y = e.offsetY;
            
            if(x > 0 && y > 0){
                item.style.backgroundColor = "lightgray";
                isDrawing = true;
            }            
        });

        item.addEventListener('mousemove', () => {
            if (isDrawing === true) {
                x = 0;
                y = 0;
                
                item.style.backgroundColor = "lightgray";               
            }
        });

        item.addEventListener('mouseup', () => {
            x = 0;
            y = 0;
            isDrawing = false;
        });

    });
}

squareCreate();
squareColor();

