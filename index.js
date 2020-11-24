const container = document.querySelector(".container")
const resetButton = document.querySelector('.reset');
const gridButton = document.querySelector('.grid');
const rainbowButton = document.querySelector('.rainbow')
let gridSize = 20
 gridSizeSquared = 400

cssVar('--gridsize',gridSize);
createDiv();
let divAll = document.querySelectorAll('.box')
        divAll.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.classList.add('highlight')
        })
    })


//Functions
function cssVar(rootVar,value) {
    document.documentElement.style.setProperty(rootVar, value);
}

function eraseColor() {
    let divAll = document.querySelectorAll('.box');
    divAll.forEach((div) => {
        div.classList.remove('highlight');
    })
}

function gridSizePrompt() {
    clearGrid();
    let input = prompt("Input size of grid");
    gridSize = Number(input);
    gridSizeSquared = gridSize**2;
    cssVar('--gridsize',gridSize);
    createDiv();
    let divAll = document.querySelectorAll('.box')
        divAll.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.classList.add('highlight')
        })
    })
}

function clearGrid() {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function createDiv(){
    for (i=0;i<gridSizeSquared;i++) {
        let div = document.createElement('div')
        div.id ="box"+i;
        div.classList.add('box')
        container.appendChild(div)
    }
}

function turnRainbow() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    cssVar('--highlightColor',randomColor)
}

function turnBlack() {
    cssVar('--highlightColor','black')
}



//buttons
resetButton.addEventListener('click', eraseColor);
gridButton.addEventListener('click', gridSizePrompt);
rainbowButton.addEventListener('click', turnRainbow);
rainbowButton.addEventListener('dblclick', turnBlack);