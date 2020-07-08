// быки и коровы

function getRandomNumber() {
    let result = '';
    let digits = '0123456789';

    for (let i = 0; i < 4; i++) {
        let indexRandomNumber = Math.floor(Math.random()*digits.length);
        let randomNumber = digits[indexRandomNumber];
        result = result + randomNumber;
        digits = digits.replace(randomNumber, '');
    }
    return result;
}

function bullsAndCows() {
    let secretNumber = getRandomNumber();
    let question = 'Попытайтесь угадать четырехзначное число';
    let answer = prompt(question);

    if (answer === null) {
        alert('жалко, что вы покидаете игру. Ответ ' + secretNumber);
    }

    while (answer !== secretNumber) {
        let bulls = 0;
        let cows = 0;
        for (let i = 0; i < 4; i++) {
            if (answer[i] === secretNumber[i]) {
                bulls += 1;
            } else if (secretNumber.includes(answer[i])) {
                cows += 1;
            }
        }
        question = `${question}
        Предыдущая попытка:
        Быки - ${bulls}, коровы - ${cows}
        `;
        answer = prompt(question);
    }
    alert("Вы победили");
}


bullsAndCows();


// rle-сжатие

function rle(value) {
    let result = '';

    for (let i = 0; i < value.length; i++) {
        let currentValue = value[i];
        let numberRepeat = 1;
        while (currentValue === value[i+1]) {
            numberRepeat += 1;
            i++;
        }
        result += (numberRepeat > 1)
        ? currentValue + numberRepeat 
        : currentValue;
    }

    console.log(result);
}

rle('aaabbbcccdddeeeaaavvvddd');
