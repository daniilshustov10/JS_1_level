function addGallery() {
    const gallery = document.querySelector('.gallery');
    const chooseColor = document.createElement('div');
    const panel = document.createElement('div');    
    const panelColorItems = document.createElement('div');
    const leftButton = document.createElement('button');
    const rightButton = document.createElement('button'); 

    chooseColor.classList.add('choose-color');
    panel.classList.add('panel');  
    panelColorItems.classList.add('panel-color-items');
    leftButton.classList.add('left-button');
    rightButton.classList.add('right-button');

    leftButton.innerHTML = '<';
    rightButton.innerHTML = '>';


    gallery.append(chooseColor);
    gallery.append(panel);
    panel.append(leftButton);
    panel.append(panelColorItems);
    panel.append(rightButton);

    const paletteColor = ['yellow', 'greenyellow', 'blue', 'red', 'brown', 'white', 'fuchsia', 'darkblue', 'plum', 'peru'];

    for (let i = 0; i < 10; i++) {
        if (i == 0) { 
            addColor(paletteColor[i]);
            document.querySelector('.choose-color').style.background = document.querySelector('.square').style.background;
            document.querySelector('.square').classList.add('active');
        } else {
            addColor(paletteColor[i]);
        }        
    }
}

addGallery();

function addColor(background) {
    const panelColorItems = document.querySelector('.panel-color-items');

    const color = document.createElement('div');
    color.classList.add('square');
    color.style.background = background;  
    panelColorItems.append(color);
}

var colorIndex = 1;

function currentColor(n) {
    showColor(colorIndex = n);
}

function plusColor() {
    showColor(colorIndex += 1);
}

function minusColor() {
    showColor(colorIndex -= 1);
}


function showColor(n) {
    let arrayColors = document.querySelectorAll('.square');
    let chooseColor = document.querySelector('.choose-color');
    let fieldChess = document.querySelectorAll('.light');

    if (n > arrayColors.length) {
        colorIndex = 1;
    }

    if (n < 1) {
        colorIndex = arrayColors.length;
    }

    for (let i = 0; i < arrayColors.length; i++) {
        arrayColors[i].className = arrayColors[i].className.replace("active", "");
    }

    for (let i = 0; i < fieldChess.length; i++) {
        fieldChess[i].style.background = arrayColors[colorIndex - 1].style.background;
    }

    chooseColor.style.background = arrayColors[colorIndex - 1].style.background;
    arrayColors[colorIndex - 1].classList.add('active')
}

document.querySelector('.left-button').onclick = () => minusColor();
document.querySelector('.right-button').onclick = () => plusColor();

let  colors = document.querySelectorAll('.square');
for (let i = 0; i < colors.length; i++) {
    colors[i].onclick = () => currentColor(i+1);
}









