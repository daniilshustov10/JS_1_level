function addChess(background) {
    const chess = document.querySelector('.chess');

    const field = document.createElement('div');
    field.classList.add('field');
    if (background) {
        field.classList.add(background);
    }
    chess.append(field);
}
  
const color = {
    one: 'light',
    two: 'dark'
}

for (let i = 0; i < 64; i++) {
    if (i % 8 == 0) {
        color.one = (color.one == 'light') ? 'dark' : 'light';
        color.two = (color.one == 'light') ? 'dark' : 'light';
    }
    const colorClass = (i % 2 != 0) ? color.one : color.two;
    addChess(colorClass);
}


const figures = {
    black: {
        king: '&#9818',
        rook: '&#9820',
        bishop: '&#9821',
        queen: '&#9819',
        knight: '&#9822',
        pawn: '&#9823',
  
    },
    white: {
        king: '&#9812',
        rook: '&#9814',
        bishop: '&#9815',
        queen: '&#9813',
        knight: '&#9816',
        pawn: '&#9817',
    }
  };

const positionBlackFigures = [
    figures.black.rook, figures.black.knight, figures.black.bishop, figures.black.queen, 
    figures.black.king,  figures.black.bishop, figures.black.knight, figures.black.rook,
    figures.black.pawn, figures.black.pawn, figures.black.pawn, figures.black.pawn,
    figures.black.pawn, figures.black.pawn, figures.black.pawn,figures.black.pawn];

const positionWhiteFigures = [
    figures.white.pawn, figures.white.pawn, figures.white.pawn, figures.white.pawn,
    figures.white.pawn, figures.white.pawn, figures.white.pawn,figures.white.pawn,
    figures.white.rook, figures.white.knight, figures.white.bishop, figures.white.queen, 
    figures.white.king,  figures.white.bishop, figures.white.knight, figures.white.rook
    ];

function arrangeChess() {
    const fields = document.querySelectorAll('.field');

    for (let i = 0; i < 16; i++) {
        fields[i].innerHTML = positionBlackFigures[i];
    }
    
    for (let i = 0; i < 16; i++) {
        fields[i+48].innerHTML = positionWhiteFigures[i];
    }
}

arrangeChess();

