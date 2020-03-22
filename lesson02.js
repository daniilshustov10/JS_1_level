// task 1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  - используется префиксная форма инкремента. Выведет значение, увеличенное на 1
d = b++; alert(d);           // 1 - используется постфиксная форма инкремента. Значение увеличивается на 1, но выводится старое значение
c = (2+ ++a); alert(c);      // 5 - a будет равно 3 (префиксная форма инкремента) + 2 = 5
d = (2+ b++); alert(d);      // 4 - b будет равно 2 (постфиксная форма инкремента) + 2 = 4
alert(a);                    // 3 - итоговое значение a, т.к. а два раза увеличивали на 1
alert(b);                    // 3 - итоговое значение b, т.к. b два раза увеличивали на 1


// task 2

var a = 2;
var x = 1 + (a *= 2);   // х = 5

// task 3

let a = 3;
let b = 20;
if (a >= 0 && b >= 0) {
    alert("Разность a и b равна" + " " +  (a-b));
} else if (a < 0 && b < 0) {
    alert("Произведение a и b равно" + " " + (a*b));
} else {
    alert("Сумма a и b равна" + " " + (a+b));
}

// task 4

 let a = 10;
    switch (a) {
        case 0:
            console.log(0);
        case 1:
            console.log(1);
        case 2:
            console.log(2);
        case 3:
            console.log(3);
        case 4:
            console.log(4);
        case 5:
            console.log(5);
        case 6:
            console.log(6);
        case 7:
            console.log(7);
        case 8:
            console.log(8);
        case 9:
            console.log(9);
        case 10:
            console.log(10);
        case 11:
            console.log(11);
        case 12:
            console.log(12);
        case 13:
            console.log(13);
        case 14:
            console.log(14);
        case 15:
            console.log(15);
    }

//task 4 (использование цикла for)

function getRandom(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

for (let a = getRandom(0, 15); a <= 15; a++) {
    console.log(a);
}

// task 5

function summa(a, b) {
    return a + b;
}

function raznost(a, b) {
    return a - b;
}

function proizvedenie(a, b) {
    return a * b;
}

function delenie(a, b) {
    return a/b;
}

// task 6

function mathOperation(arg1, arg2, operation) {
    let result;
    switch (operation) {
        case summa:
            result = summa(arg1, arg2);
            break;
        case raznost:
            result = raznost(arg1, arg2);
            break;
        case proizvedenie:
            result = proizvedenie(arg1, arg2);
            break;
        case delenie:
            result = delenie(arg1, arg2);
            break;      
    }
    return result;
}


// task 7

//Сравнить null и 0. Попробуйте объяснить результат.

// Нестрогое равенство и сравнение работают по-разному. Операторы сравнения 
//преобразуют null в число 0, а нестрогое равенство не приводит null к 0 (оно равно только undefined и ничему другому)
// поэтому мы получим
 null > 0       //false (приводит к 0, 0 > 0 - false)
 null == 0      //false (null равно только undefined - false)
 null >= 0      // true (приводит к 0, 0 >= 0 - true)

// task 8

function power(val, pow) {
    if (pow == 0) {
        return 1;
    } else if (pow < 0) {
        return 1/(power(val, Math.abs(pow)-1) * val);
    } else {
        return power(val, pow - 1) * val;
    }
}

// task 9

// -0  приведется к false

//task 10

    //к числу



