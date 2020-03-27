'use strict'

// task 1a

function getlinkVideo() {
    let arrayOfLinks = [];
    let allVideos = document.querySelectorAll('#video-title-link');
    for (let i = 0; i < allVideos.length; i++) {
        arrayOfLinks.push(allVideos[i].href);
    }
    return arrayOfLinks;
}

console.log(getlinkVideo());

// task 1b  

// https://geekbrains.ru/lessons/60271 (отсюда брал данные)

function getObjectStudents() {
    let objectOfStudents = {};
    let allStudents = document.querySelectorAll('.mates-list__mate-name-block');
    for (let i = 0; i < allStudents.length; i++) {
        objectOfStudents[allStudents[i].innerHTML] = allStudents[i].href;
    }
    return objectOfStudents;
}

console.log(getObjectStudents());

// шахматы и галерея

function generateChessBoard() {
    let brownField = document.createElement('div');
    brownField.className = 'brownField';

    let blackField = document.createElement('div');
    blackField.className = 'blackField';

    let numberField = 0;
    while (numberField < 64) {
        if (numberField % 2 == 0) {
            chess.appendChild('brownField');
        } else {
            chess.appendChild('blackField');
        }
    }
}

generateChessBoard();


