// Create Div to represent Rows
const container = document.querySelector('.container');
const rowArray = [];
const outerArray = [];
const innerArray = [];
let userInputSize = 16; // Use this as button user input size later

function createRows(array){
    for (let i = 0; i < userInputSize; i++){
        array[i] = document.createElement('div');
        array[i].classList.add('divrow');
        container.appendChild(array[i]);
    }
}

// Fill Rows with Array
createRows(rowArray);

function fillOuterWithInnerArrays(array){
    for (let i = 0; i < userInputSize; i++){
        array[i] = innerArray;
    }
}

fillOuterWithInnerArrays(outerArray);

// Fill Rows with Boxes
function fillInnerArrayWithDivs(array){
    for (let i = 0; i < userInputSize; i++){
        for (let j = 0; j < userInputSize; j++){
            array[i][j] = document.createElement('div');
            array[i][j].classList.add('divbox');
            rowArray[i].appendChild(outerArray[i][j]);
        }
    }
}

fillInnerArrayWithDivs(outerArray);

// Hover changes box color
const individualBox = document.querySelectorAll('.divbox');
for (let i = 0; i < individualBox.length; i++){
    individualBox[i].addEventListener('mouseover', function(e){
        individualBox[i].classList.add('hover');
    })
}

// Add a button to the top of the screen 
let boxSizeButton = document.createElement('button');
boxSizeButton.setAttribute('id', 'btn');
boxSizeButton.textContent = 'Change Grid Size';
boxSizeButton.addEventListener('click', function(e){
    prompt('Enter Box Size (max 100):', '');
})
container.insertBefore(boxSizeButton, container.firstChild);








