const container = document.querySelector(".container");
let box;
let slider = document.getElementById("sliderID");
let gridSize = slider.value;
const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () => {
    clear();
})
createGrid();


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
                box.setAttribute("style", "background-color: black");
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
        box.setAttribute("style", "background-color: black");
    });
};