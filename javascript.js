// Create Rows
const container = document.querySelector('.container');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
div1.classList.add('div1');
div2.classList.add('div2');
container.appendChild(div1);
container.appendChild(div2);

const div2box = document.createElement('div');
div2box.classList.add('div2box');

const div2Array = []

let i = 0;

function populateArray(array){
    for (let i = 0; i < 16; i++){
        array[i] = document.createElement('div');
        array[i].classList.add('div2box');
    }
}

populateArray(div2Array);

let j = 0;
for (let j = 0; j < 16; j++){
    div2.appendChild(div2Array[j]);
}


// Split Row in Half
const div1box1 = document.createElement('div');
const div1box2 = document.createElement('div');
const div1box3 = document.createElement('div');
const div1box4 = document.createElement('div');
const div1box5 = document.createElement('div');
const div1box6 = document.createElement('div');
const div1box7 = document.createElement('div');
const div1box8 = document.createElement('div');
const div1box9 = document.createElement('div');
const div1box10 = document.createElement('div');
const div1box11 = document.createElement('div');
const div1box12 = document.createElement('div');
const div1box13 = document.createElement('div');
const div1box14 = document.createElement('div');
const div1box15 = document.createElement('div');
const div1box16 = document.createElement('div');

const div2box1 = document.createElement('div');
const div2box2 = document.createElement('div');
const div2box3 = document.createElement('div');
const div2box4 = document.createElement('div');
const div2box5 = document.createElement('div');
const div2box6 = document.createElement('div');
const div2box7 = document.createElement('div');
const div2box8 = document.createElement('div');
const div2box9 = document.createElement('div');
const div2box10 = document.createElement('div');
const div2box11 = document.createElement('div');
const div2box12 = document.createElement('div');
const div2box13 = document.createElement('div');
const div2box14 = document.createElement('div');
const div2box15 = document.createElement('div');
const div2box16 = document.createElement('div');

div1box1.classList.add('div1box1');
div1box2.classList.add('div1box2');
div1box3.classList.add('div1box3');
div1box4.classList.add('div1box4');
div1box5.classList.add('div1box5');
div1box6.classList.add('div1box6');
div1box7.classList.add('div1box7');
div1box8.classList.add('div1box8');
div1box9.classList.add('div1box9');
div1box10.classList.add('div1box10');
div1box11.classList.add('div1box11');
div1box12.classList.add('div1box12');
div1box13.classList.add('div1box13');
div1box14.classList.add('div1box14');
div1box15.classList.add('div1box15');
div1box16.classList.add('div1box16');


div2box1.classList.add('div2box1');


div1.appendChild(div1box1);
div1.appendChild(div1box2);
div1.appendChild(div1box3);
div1.appendChild(div1box4);
div1.appendChild(div1box5);
div1.appendChild(div1box6);
div1.appendChild(div1box7);
div1.appendChild(div1box8);
div1.appendChild(div1box9);
div1.appendChild(div1box10);
div1.appendChild(div1box11);
div1.appendChild(div1box12);
div1.appendChild(div1box13);
div1.appendChild(div1box14);
div1.appendChild(div1box15);
div1.appendChild(div1box16);




