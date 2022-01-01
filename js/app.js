const squareCreate = function(){

    let divContainer = document.createElement('container');

    divContainer.setAttribute('class', 'divContainer');
    document.body.appendChild(divContainer);

    // loops through and creates / appends 256 child divs
    for(let i = 1; i <= 256; i++){
        let childDivs = document.createElement('div');
        divContainer.appendChild(childDivs);
    }
}

squareCreate();
