const container = document.querySelector(".container")
const gridSize= 16 **2
for (i=0;i<gridSize;i++) {
    let div = document.createElement('div')
    div.id ="box"+i;
    div.classList.add('box')
    container.appendChild(div)
}

const divAll = document.querySelectorAll('.box')
divAll.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add('highlight')
    })
})
