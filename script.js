
let container = document.querySelector('.container');
let boxSize = 20;

function createBox() {
    let box = document.createElement('div');
    box.setAttribute('class','box');
    return box;
}


function createGrid(number){
    let gridSize = number * boxSize;
    container.style.width = `${gridSize}px`;
    container.style.height = `${gridSize}px`;

    let boxCount = number ** 2;
        for (let width = 0; width < boxCount; width++){
            container.appendChild(createBox());
        }
}

createGrid(4);

function boxBlack(box) {
    box.setAttribute('style', 'background-color: black');
}

container.addEventListener('mouseover',(e) => {
    let target = e.target;
    if (target && target.matches('.box')){
        boxBlack(target);
    }
});