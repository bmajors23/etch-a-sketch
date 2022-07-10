const container = document.querySelector(".container");
let box;
let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    box = document.createElement("div");
    box.classList.add("columns");
    container.appendChild(box);
    for (let j = 0; j < gridSize; j++) {
        innerBox = document.createElement("div");
        innerBox.classList.add("boxes");
        box.appendChild(innerBox);
        }
    }
