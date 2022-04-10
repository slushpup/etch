let width = 16;

const div = document.querySelector(".container");
const btn = document.querySelector(".reset");

playGame();
function drawBoard(){
    for (let i = 0; i < width; i++) {
        row = document.createElement('div');
        row.id = `${i}`;
        row.classList.add('row');
        for (let j = 0; j < width; j++) {
            item = document.createElement('div');
            item.style.backgroundColor = 'white';
            item.classList.add('column')
            // item.textContent =`${j}${i}`;
            // console.log(item.textContent)
            row.appendChild(item);
        }
        div.appendChild(row)  
    }
}

function clearBoard(){
    while (div.firstChild) {
        div.firstChild.remove();
    }
}

function playGame(){
    drawBoard();
    box = document.querySelectorAll(".column");
    box.forEach((item) => {
        item.addEventListener('mouseover', function(e) {
            // console.log(e.target);
            if (e.target.style.backgroundColor === 'white') {
                // let color = randomColor();
                // e.target.style.backgroundColor = color;
                e.target.style.backgroundColor = 'black';
            }
 
        })
    })
}

btn.addEventListener('click', function() {
    box.forEach(item => {
        item.style.backgroundColor = 'white';
    })
    width = parseInt(prompt("Enter width: ", width ));
    if (width === null || isNaN(width)) {
        return;
    }
    else if (width > 100){
        width = 100;
    }
    clearBoard();
    playGame();
});

// const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
// function randomColor(){
//     let r = randomBetween(0, 255);
//     let g = randomBetween(0, 255);
//     let b = randomBetween(0, 255);
//     let rgb = `rgb(${r},${g},${b})`;
//     return rgb;
// }