const slider1 = document.querySelector('#slider1');
const sliderValue1 = document.querySelector('#sliderValue1');
const container = document.querySelector('.container');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const colorPicker = document.querySelector('#colorPicker');
const btn6 = document.querySelector('#btn6');

const grid = document.createElement('div');
grid.setAttribute('class', 'grid');

let n;
let blockSize;
let colorValue = 'black';

colorPicker.addEventListener('input', function(){
    colorValue = colorPicker.value;
});

slider1.addEventListener('input', function(){
    n = slider1.value;
    sliderValue1.textContent = `${n}  x  ${n}`;
    createGrid(n*n);
});

createGrid(1*1);

function createGrid(n){

    grid.innerHTML = '';    
    a = Math.sqrt(n);

    for (let i=0; i < n; i++){
        const blocks = document.createElement('div');
        blocks.setAttribute('id', 'block');

        blockSize = (500/a) - 2; // 500 is the width of the container(grid) and 2 is the border width

        blocks.style.width = `${blockSize}px`;
        blocks.style.height = `${blockSize}px`;

        btn3.addEventListener('click', function() {
            changeColour(blocks);
        });

        btn4.addEventListener('click', function() { 
            eraser(blocks);
        });

        btn6.addEventListener('click', function() {
            randomColour(blocks);
        });
        
        reset(blocks);

        grid.appendChild(blocks);     
    }
    container.appendChild(grid);
}

function changeColour(e){
    e.addEventListener('mouseover', function(){
        e.style.backgroundColor = colorValue;
    });
}

function reset(e){
    btn2.addEventListener('click', function(){
        e.style.backgroundColor = 'white';
    });
}

function eraser(e){
    e.addEventListener('mouseover', function(){
        e.style.backgroundColor = 'white';
    });
}

function randomColour(e){
    e.addEventListener('mouseover', function(){
        e.style.backgroundColor = `rgb(${Math.floor(Math.random() * 156) + 100}, ${Math.floor(Math.random() * 156) + 100}, ${(Math.random() * 156) + 100})`;
    });
}




