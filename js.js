let container = document.querySelector(".container")

let divRow = document.createElement("div")
divRow.className = "divrow"

for (let i = 0; i < 10; i++) {
    let divSquare = document.createElement("div")
    divSquare.className = "divsquare"
    divSquare.textContent = i
    divRow.appendChild(divSquare)
}

container.appendChild(divRow)
