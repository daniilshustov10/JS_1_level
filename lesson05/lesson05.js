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
    let chess = document.querySelector('.chess');

    for (let i = 0; i < 8; i ++) {
        if (i % 2 == 0) {
            for (let j = 0; j < 8; j++) {
                if (j % 2 == 0) {
                    let brownField = document.createElement('div');
                    brownField.className = 'brownField';
                    chess.append(brownField);
                } else {
                    let blackField = document.createElement('div');
                    blackField.className = 'blackField';
                    chess.append(blackField);
                }
            }
        } else {
            for (let j = 0; j < 8; j++) {
                if (j % 2 == 0) {
                    let blackField = document.createElement('div');
                    blackField.className = 'blackField';
                    chess.append(blackField);
                } else {
                    let brownField = document.createElement('div');
                    brownField.className = 'brownField';
                    chess.append(brownField);
                }
            }
        }
    }
   
}

generateChessBoard();



function generateGallery() {
    let gallery = document.querySelector('.gallery');

    let galleryColors = document.createElement('div');
    galleryColors.className = 'galleryColors';
    gallery.append(galleryColors);

    let color = ['yellow', 'black', 'blue', 'red', 'brown', 'green', 'fuchsia', 'darkblue', 'plum', 'peru'];
    
    for (let i = 0; i < 10; i++) {
        let colorSquare = document.createElement('div');
        colorSquare.className = 'colorSquare';
        colorSquare.style.background = color[i];
        galleryColors.append(colorSquare);
    }

    let chooseColorSquare = document.createElement('div');
    chooseColorSquare.className = 'chooseColorSquare';
    gallery.append(chooseColorSquare);
}

generateGallery();