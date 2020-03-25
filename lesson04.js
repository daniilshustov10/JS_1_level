'use strict'

// task 1

function convertToObject(number) { //для чисел от -999 до 999
    let obj = {};
   
    if (number > 999) {
        console.log('Число больше 999 ', obj);
    } 
   
    else if (number >= 0 && number <= 999) {
        obj.units = number % 10;
        obj.dozens = (Math.floor(number/10)) % 10;
        obj.hundred = Math.floor(number/100);
        console.log(obj);
    } 
    
    else if (number >= -999 && number < 0) {
        obj.units = Math.abs(number) % 10;
        obj.dozens = (Math.floor(Math.abs(number)/10)) % 10;
        obj.hundred = Math.floor(Math.abs(number)/100);
        console.log('Число отрицательное ', obj);
    } 
    
    else {
        console.log('Число отрицательное и меньше -999 ', obj);
    }
}

convertToObject(345); 

// task 2

function Fruit(color, form) {
    this.color = color;
    this.form = form;
    this.showFruit = function() {
        console.log(this.color + ' ' + this.form);
    };
}

// test (task 2)

let banan = new Fruit('желтый', 'длинный');
console.log(banan.color);
console.log(banan.form);
banan.showFruit();

// task 3

function comparison (a, b) {
    let result = false;  
    if (a === b)  {
        result = true;
    }  

    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length == b.length) {
            let compareResult = [];
            for (let i = 0; i < a.length; i++) {
                compareResult.push(comparison(a[i], b[i]));
            }
            if (compareResult.indexOf(false) == -1) {
                result = true;
            }
         }
    }

    if (typeof a == "object" && typeof b == "object") {
        let keysObjectA = Object.keys(a);
        let keysObjectB = Object.keys(b);
        if (keysObjectA.length == keysObjectB.length) {
            let compareResult = [];
            for (let i = 0; i < keysObjectA.length; i++) {
                compareResult.push(comparison(keysObjectA[i], keysObjectB[i]));
            }
            if (compareResult.indexOf(false) == -1) {
                let valuesObjectA = Object.values(a);
                let valuesObjectB = Object.values(b);
                if (valuesObjectA.length == valuesObjectB.length) {
                    let compareResult = []; 
                    for (let i = 0; i < valuesObjectA.length; i++) {
                        compareResult.push(comparison(valuesObjectA[i], valuesObjectB[i]));
                    }
                    if (compareResult.indexOf(false) == -1) {
                        result = true;
                    }
                }
            }
        }

    }
    return result;
}


