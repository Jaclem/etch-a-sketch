const divs = document.querySelectorAll('div');


const squareCreate = function(num){
    let divContainer = document.getElementById('draw-pad');
    divContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;


    for(let i = 0; i < num * num; i++){
        let childDivs = document.createElement('div');
        childDivs.setAttribute('class', 'squares');
        divContainer.appendChild(childDivs);
    }

}

squareCreate(44);

// const squareColor = function(){
//     let squares = document.querySelectorAll('.squares');
//     const reset = document.querySelector('.reset-btn');

//     let isDrawing = false;
//     let x = 0;
//     let y = 0;

//     squares.forEach(item => {
//         item.addEventListener('mousedown', (e)=> {
//             x = e.offsetX;
//             y = e.offsetY;
            
//             if(x > 0 && y > 0){
//                 item.classList.add('colored');
//                 isDrawing = true;
//             }            
//         });

//         item.addEventListener('mousemove', () => {
//             if (isDrawing === true) {
//                 x = 0;
//                 y = 0;
                
//                 item.classList.add('colored');              
//             }
//         });

//         item.addEventListener('mouseup', () => {
//             x = 0;
//             y = 0;
//             isDrawing = false;
//         });

//         reset.addEventListener('click', () => {
//             item.classList.remove('colored');
//         });
//     });

// }
// // random comment

// squareColor();

