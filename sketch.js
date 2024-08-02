const container = document.querySelector("#container");
function createGrid(numSide) {
    const width = 100 / numSide;
    for (let i = 0; i < (numSide ** 2); i++) {
        let item = document.createElement("div");
        item.setAttribute("class", "item");
        item.style.width = width + "%";
        item.addEventListener("mouseover", () => item.style.backgroundColor = "black");
        container.appendChild(item);
    }
}

function changeGrid() {
    let numSide;
    do {
        numSide = parseInt(prompt("How many squares do you want per side? (Enter a number between 1 and 100)"));
        
        if (!Number.isInteger(numSide)) {
            alert("Please enter a number.");
        } else if (numSide < 1) {
            alert("Please enter a number greater than 0.");
        } else if (numSide > 100){
            alert("Please enter a number less than 101.");
        }
    } while (!Number.isInteger(numSide) || numSide < 1 || numSide > 100);
    
    container.innerHTML = '';
    createGrid(numSide);
}

const button = document.querySelector("button");
button.addEventListener("click", changeGrid);
createGrid(16);