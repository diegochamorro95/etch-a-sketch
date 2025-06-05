const container = document.querySelector("#squares-container");

let rowNumber = 16;
let columnNumber = 16;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(rows, columns) {
    container.innerHTML = ''; 
    const squareSize = 960 / columns;

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < columns; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
             
              square.addEventListener('mouseover', function() {
                  square.style.backgroundColor = getRandomColor();
                });
              square.addEventListener('mouseout', function () {
                setTimeout(() => { square.style.backgroundColor = "white";  }, 250);  
                });
                
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}


createGrid(rowNumber, columnNumber);

const customButton = document.querySelector('.customBtn');


customButton.addEventListener("click", function () {
    const rowSize = parseInt(prompt("Enter the number of rows: "), 10);
    const columnSize = parseInt(prompt("Enter the number of columns:"), 10);
    if (Number.isInteger(rowSize) && rowSize > 0 && rowSize < 100 && Number.isInteger(columnSize) && columnSize > 0 && columnSize < 100) {
        createGrid(rowSize, columnSize);
    } else {
        alert("Please enter valid positive integers for both rows and columns.");
    }
});
