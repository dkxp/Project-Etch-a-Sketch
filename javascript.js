// Create Div to represent Rows
const container = document.querySelector('.container');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const div6 = document.createElement('div');
const div7 = document.createElement('div');
const div8 = document.createElement('div');
const div9 = document.createElement('div');
const div10 = document.createElement('div');
const div11 = document.createElement('div');
const div12 = document.createElement('div');
const div13 = document.createElement('div');
const div14 = document.createElement('div');
const div15 = document.createElement('div');
const div16 = document.createElement('div');
div1.classList.add('divrow');
div2.classList.add('divrow');
div3.classList.add('divrow');
div4.classList.add('divrow');
div5.classList.add('divrow');
div6.classList.add('divrow');
div7.classList.add('divrow');
div8.classList.add('divrow');
div9.classList.add('divrow');
div10.classList.add('divrow');
div11.classList.add('divrow');
div12.classList.add('divrow');
div13.classList.add('divrow');
div14.classList.add('divrow');
div15.classList.add('divrow');
div16.classList.add('divrow');
container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);
container.appendChild(div4);
container.appendChild(div5);
container.appendChild(div6);
container.appendChild(div7);
container.appendChild(div8);
container.appendChild(div9);
container.appendChild(div10);
container.appendChild(div11);
container.appendChild(div12);
container.appendChild(div13);
container.appendChild(div14);
container.appendChild(div15);
container.appendChild(div16);


// Create Array for grid divs
const div1Array = [];
const div2Array = [];
const div3Array = [];
const div4Array = [];
const div5Array = [];
const div6Array = [];
const div7Array = [];
const div8Array = [];
const div9Array = [];
const div10Array = [];
const div11Array = [];
const div12Array = [];
const div13Array = [];
const div14Array = [];
const div15Array = [];
const div16Array = [];

// Create function to fill array with grid divs
function populateArray(array){
    for (let i = 0; i < 16; i++){
        array[i] = document.createElement('div');
        array[i].classList.add('divbox');
    }
}

// Run function to fill array with grid divs
populateArray(div1Array);
populateArray(div2Array);
populateArray(div3Array);
populateArray(div4Array);
populateArray(div5Array);
populateArray(div6Array);
populateArray(div7Array);
populateArray(div8Array);
populateArray(div9Array);
populateArray(div10Array);
populateArray(div11Array);
populateArray(div12Array);
populateArray(div13Array);
populateArray(div14Array);
populateArray(div15Array);
populateArray(div16Array);

// Add 16 boxes to each row by appending 16 array elem to each row
// Could use a nested for loop with div1/2/3... being replaced by an Array[i]
/* for (let j = 0; j < 16; j++){
    for (let i = 0; i < 16; i++){
        Array[j].appendChild(div1Array[i]);
    } ?? Not working but noted, maybe
    */
for (let j = 0; j < 16; j++){
    div1.appendChild(div1Array[j]);
    div2.appendChild(div2Array[j]);
    div3.appendChild(div3Array[j]);
    div4.appendChild(div4Array[j]);
    div5.appendChild(div5Array[j]);
    div6.appendChild(div6Array[j]);
    div7.appendChild(div7Array[j]);
    div8.appendChild(div8Array[j]);
    div9.appendChild(div9Array[j]);
    div10.appendChild(div10Array[j]);
    div11.appendChild(div11Array[j]);
    div12.appendChild(div12Array[j]);
    div13.appendChild(div13Array[j]);
    div14.appendChild(div14Array[j]);
    div15.appendChild(div15Array[j]);
    div16.appendChild(div16Array[j]);
}

// Add Event Listener for Hover to griddiv
const gridDiv = document.querySelectorAll('.divbox');

const divBoxTest = document.querySelector('.divbox');

divBoxTest.addEventListener('click', function(){
    divBoxTest.classList.add('hover');
    
})

for (let i = 0; i < gridDiv.length; i++){
    gridDiv[i].addEventListener('mousedown', function(e){
        gridDiv[i].classList.add('hover');
    })
}


