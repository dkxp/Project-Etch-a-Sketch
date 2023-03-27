// Create Div to represent Rows
const container = document.querySelector('.container');
const rowArray = [];
const outerArray = [];
const innerArray = [];
let userInputSize = 16; 

// Add a button to make mouse hover box color dynamic
let colorButton = document.createElement('button');
colorButton.setAttribute('id', 'btn');
colorButton.textContent = 'Dynamic Colors';
container.insertBefore(colorButton, container.firstChild);



// Fill Array representing rows with userinput # of rows (divrow)
function createRows(array){
    for (let i = 0; i < userInputSize; i++){
        array[i] = document.createElement('div');
        array[i].classList.add('divrow');
        container.appendChild(array[i]);
    }
}

createRows(rowArray);

// Append each row (divrow) with userinput # of boxes
function fillOuterWithInnerArrays(array){
    for (let i = 0; i < userInputSize; i++){
        array[i] = innerArray;
    }
}

fillOuterWithInnerArrays(outerArray);

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

// Function that adds event listener 

function addMouseOverEvent(){
    let gridSize = document.querySelectorAll('.divbox');
    for (let i = 0; i < gridSize.length; i++){
        gridSize[i].addEventListener('mouseover', function(e){
            gridSize[i].classList.add('hover');
            })
        }
}

addMouseOverEvent();

// Change Grid Size
let boxSizeButton = document.createElement('button');
boxSizeButton.setAttribute('id', 'btn');
boxSizeButton.textContent = 'Change Grid Size';
boxSizeButton.addEventListener('click', function(e){
    userInputSize = prompt('Enter Box Size (max 100):', '');
    if (userInputSize <= 100 && userInputSize > 0){
        while (container.childNodes.length > 2){
            container.removeChild(container.lastChild);
        }   
        createRows(rowArray);
        fillOuterWithInnerArrays(outerArray);
        fillInnerArrayWithDivs(outerArray);
        addMouseOverEvent();
    }
})
container.insertBefore(boxSizeButton, container.firstChild);


//Clicking color button adds new class/s with many colors
let dynamicColor = false;

colorButton.addEventListener('click', function(e){
    dynamicColor = true;
    let gridSize = document.querySelectorAll('.divbox');
    for (i = 0; i < gridSize.length; i++){
        gridSize[i].classList.remove('hover');
    }
    makeColorsDynamic();
})

// Pick a random color from array of colors and store in variable randomColor
const colorArray = ['#ff0000', '#00ff00', '#0000ff',
'#ff3333', '#ffff00', '#ff6600'];

let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

let gridSize = document.querySelectorAll('.divbox');

function makeColorsDynamic() {for (let i = 0; i < gridSize.length; i++){
    let gridSize = document.querySelectorAll('.divbox');
    gridSize[i].addEventListener('mouseover', function(e){
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        gridSize[i].style.backgroundColor = randomColor;
        })
    }
}







