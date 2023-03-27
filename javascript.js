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

// Pick a random color from array of colors and store in variable randomColor
const colorArray = ['#ff0000', '#00ff00', '#0000ff',
'#ff3333', '#ffff00', '#ff6600'];

let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

//Clicking color button removes .hover class and sets dynamicColor to true
let dynamicColor = false;

/*colorButton.addEventListener('click', function(e){
    dynamicColor = true;
    blackColorBoxes = document.querySelectorAll('.hover');
    for (i = 0; i < blackColorBoxes.length; i++){
        blackColorBoxes[i].classList.remove('hover');
        blackCOlorBoxes[i].removeEventListener('mouseover', )
    }
})*/



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

// Function that adds event listener as we need
// it to be removed, when dynamic color box button is pressed

function addMouseOverEvent(){
    let gridSize = document.querySelectorAll('.divbox');
    for (let i = 0; i < gridSize.length; i++){
        gridSize[i].addEventListener('mouseover', function(e){
            gridSize[i].classList.add('hover');
            })
        }
}

addMouseOverEvent();


// Add a button to the top of the screen to get box size
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










