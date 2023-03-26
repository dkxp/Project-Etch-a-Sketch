// Create Rows
const container = document.querySelector('.container');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
div1.classList.add('div1');
div2.classList.add('div2');
div3.classList.add('div3');
container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);



const div1Array = [];
const div2Array = [];
const div3Array = [];



function populateArray(array){
    for (let i = 0; i < 16; i++){
        array[i] = document.createElement('div');
        array[i].classList.add('divbox');
    }
}

populateArray(div1Array);
populateArray(div2Array);
populateArray(div3Array);


for (let j = 0; j < 16; j++){
    div1.appendChild(div1Array[j]);
    div2.appendChild(div2Array[j]);
    div3.appendChild(div3Array[j]);
}







