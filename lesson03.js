'use strict'
// task 1

let i = 2; 
while (i <= 100) {
    let k = [];
    for (let j = 2; j <= i; j++) {
        if (i % j == 0) {
            k.push(j);
        }
    }
    if (k.length == 1) {
        console.log(k[0]);
    }
    i++;
}

// task 2

let basket = [20, 35, 89, 93, 34, 56];

function sum(a, b) {
    return a + b;
}

function countBasketPrice(arr) {
    return arr.reduce(sum);
}

console.log(countBasketPrice(basket));

// task 3

for (let i = 0; i <= 9; console.log(i), i++);

// task 4

let n = 1;
let x = 'x'; 
while (n <= 20) {
    console.log(x);
    n++;
    x += 'x';
}

//task 5

function rle(value) {
    for (let i = 0, number; i < value.length; i += number) {
        number = 0;
        for (let j of value) {
            if (value[i] == j) {
                number += 1;
            }
        }
        if (number == 1) {
            console.log(value[i]);
        } else {
            console.log(value[i] + number);
        }
    }
}

rle('BCCDDDAXXXX');


