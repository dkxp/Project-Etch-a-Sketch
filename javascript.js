// Create Div Rows
const container = document.querySelector('.container');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
div1.classList.add('divrow');
div2.classList.add('divrow');
div3.classList.add('divrow');
container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);


// Create Arrays
const div1Array = [];
const div2Array = [];
const div3Array = [];


// Create function to fill array with 16 divs/boxes
function populateArray(array){
    for (let i = 0; i < 16; i++){
        array[i] = document.createElement('div');
        array[i].classList.add('divbox');
    }
}
// Run above functions
populateArray(div1Array);
populateArray(div2Array);
populateArray(div3Array);

// Add 16 boxes to each row by appending 16 array elem to each row
for (let j = 0; j < 16; j++){
    div1.appendChild(div1Array[j]);
    div2.appendChild(div2Array[j]);
    div3.appendChild(div3Array[j]);
}