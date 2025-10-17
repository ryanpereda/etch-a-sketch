let container = document.querySelector(".container")
let resetButton = document.querySelector(".reset")
let resizeButton = document.querySelector(".resize")
let DEFAULT = 16
let previous = DEFAULT

function generateGrid(size) {
    previous = size
    for (let i = 0; i < size; i++) {
        let divRow = document.createElement("div")
        divRow.className = "divrow"
        for (let j = 0; j < size; j++) {
            let divSquare = document.createElement("div")
            divSquare.className = "divsquare"
            divRow.appendChild(divSquare)
            divSquare.addEventListener('mouseenter', () => {
                divSquare.style.cssText = 'background-color: black;'
            })
        }
        container.appendChild(divRow)
    }
}

function clearGrid() {
    container.replaceChildren()
}

resetButton.onclick = () => {
    clearGrid()
    generateGrid(previous)
}

resizeButton.onclick = () => {
    let number = parseInt(prompt("Enter a number between 1 and 100:", "16"));
    if (0 < number && number < 101) {
        clearGrid()
        generateGrid(number)
    } else {
        alert("Input not between 1 and 100.")
    }
}

generateGrid(DEFAULT)

