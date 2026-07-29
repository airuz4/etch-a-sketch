







let container = document.querySelector('.container');
let containerSize  = 500;
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;


function createGrid(number){
    let boxCount = number ** 2;
        for (let i = 0; i < boxCount; i++){
            let box = document.createElement('div');
            box.setAttribute('class','box');
            box.style.flex = `1 1 ${containerSize / number - 2}px`
            container.appendChild(box);
        }
}



function boxBlack(box) {
    box.style.backgroundColor = 'black';
}

container.addEventListener('mouseover',(e) => {
    let target = e.target;
    if (target && target.matches('.box')){
        boxBlack(target);
    }
});

let sizeBtn = document.querySelector('#sizeBtn');

sizeBtn.addEventListener(('click'), () => {
    while(container.firstChild)
        container.removeChild(container.firstChild);
    let input = Number(prompt("Enter a number from 1 - 100", ''));
    createGrid(input);
})
