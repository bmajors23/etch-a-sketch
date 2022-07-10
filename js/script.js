const container = document.querySelector(".container");
let box;
let slider = document.getElementById("sliderID");
let gridSize = slider.value;
let penColor = "black";
const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () => {
    clear();
})
const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const greenBtn = document.getElementById("greenBtn");
const yellowBtn = document.getElementById("yellowBtn");
const blackBtn = document.getElementById("blackBtn");
createGrid();

redBtn.addEventListener("click", () => {
    penColor = "red";
})
blueBtn.addEventListener("click", () => {
    penColor = "blue";
})
greenBtn.addEventListener("click", () => {
    penColor = "green";
})
yellowBtn.addEventListener("click", () => {
    penColor = "yellow";
})
blackBtn.addEventListener("click", () => {
    penColor = "red";
})

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        box = document.createElement("div");
        box.classList.add("columns");
        container.appendChild(box);
        for (let j = 0; j < gridSize; j++) {
            innerBox = document.createElement("div");
            innerBox.classList.add("boxes");
            box.appendChild(innerBox);
            };
        };
        const boxes = document.querySelectorAll(".boxes");
        boxes.forEach(box => {
            box.addEventListener("mouseover", () => {
                box.setAttribute("style", `background-color: ${penColor}`);
            });
        });
};
  
slider.oninput = function() {
  gridSize = this.value;
  destroyGrid();
  createGrid();
}

const columns = document.querySelectorAll(".columns");

function destroyGrid() {
while (container.firstChild) {
    container.removeChild(container.firstChild);
};
};

function clear() {
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => {
        box.setAttribute("style", "background-color: none");
    });
};