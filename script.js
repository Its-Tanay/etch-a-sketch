const slider1 = document.querySelector('#slider1');
const sliderValue1 = document.querySelector('#sliderValue1');
const container = document.querySelector('.container');

const grid = document.createElement('div');
grid.setAttribute('class', 'grid');

let n;
let blockSize;

slider1.addEventListener('input', function(){
    n = slider1.value;
    sliderValue1.textContent = `${n}  x  ${n}`;
    
    createGrid(n*n);
});

createGrid(16*16);

function createGrid(n){
    grid.innerHTML = '';    
    a = Math.sqrt(n);

    for (let i=0; i < n; i++){
        const blocks = document.createElement('div');
        blocks.setAttribute('id', 'block');

        blockSize = (500/a) - 2; // 500 is the width of the container(grid) and 2 is the border width

        blocks.style.width = `${blockSize}px`;
        blocks.style.height = `${blockSize}px`;

        console.log(blockSize);
        grid.appendChild(blocks); 
    }
    container.appendChild(grid);
}







