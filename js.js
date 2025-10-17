let container = document.querySelector(".container")

for (let i = 0; i < 16; i++) {
    let divRow = document.createElement("div")
    divRow.className = "divrow"
    for (let j = 0; j < 16; j++) {
        let divSquare = document.createElement("div")
        divSquare.className = "divsquare"
        divSquare.textContent = i
        divRow.appendChild(divSquare)
        divSquare.addEventListener('mouseenter', () => {
            divSquare.style.cssText = 'background-color: black;'
        })
    }
    container.appendChild(divRow)
}
