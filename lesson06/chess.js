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

const board = [
    {color: "dark", figure: figures.black.rook, active: false}, {color: "light", figure: figures.black.knight, active: false}, {color: "dark", figure: figures.black.bishop, active: false}, {color: "light", figure: figures.black.king, active: false}, {color: "dark", figure: figures.black.queen, active: false}, {color: "light", figure: figures.black.bishop, active: false}, {color: "dark", figure: figures.black.knight, active: false}, {color: "light", figure: figures.black.rook, active: false},
    {color: "light", figure: figures.black.pawn, active: false}, {color: "dark", figure: figures.black.pawn, active: false}, {color: "light", figure: figures.black.pawn, active: false}, {color: "dark", figure: figures.black.pawn, active: false}, {color: "light", figure: figures.black.pawn, active: false}, {color: "dark", figure: figures.black.pawn, active: false}, {color: "light", figure: figures.black.pawn, active: false}, {color: "dark", figure: figures.black.pawn, active: false},
    {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false},
    {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false},
    {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false},
    {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false}, {color: "light", figure: null, active: false}, {color: "dark", figure: null, active: false},
    {color: "dark", figure: figures.white.pawn, active: false}, {color: "light", figure: figures.white.pawn, active: false}, {color: "dark", figure: figures.white.pawn, active: false}, {color: "light", figure: figures.white.pawn, active: false}, {color: "dark", figure: figures.white.pawn, active: false}, {color: "light", figure: figures.white.pawn, active: false}, {color: "dark", figure: figures.white.pawn, active: false}, {color: "light", figure: figures.white.pawn, active: false},
    {color: "light", figure: figures.white.rook, active: false}, {color: "dark", figure: figures.white.knight, active: false}, {color: "light", figure: figures.white.bishop, active: false}, {color: "dark", figure: figures.white.king, active: false}, {color: "light", figure: figures.white.queen, active: false}, {color: "dark", figure: figures.white.bishop, active: false}, {color: "light", figure: figures.white.knight, active: false}, {color: "dark", figure: figures.white.rook, active: false},   
];





function addChess(options) {
    const {
        color, 
        figure,
        index,
        active,
    } = options;

    const chess = document.querySelector('.chess');

    const field = document.createElement('div');
    field.classList.add('field');

    field.addEventListener('click', () => eventMove(index));
    
    
    if (figure) field.innerHTML = figure;
    if (color) field.classList.add(color);
    if (active) field.classList.add('activeField');

    chess.append(field);  
}

function getChessBoard() {
    board.forEach(function(item, index) {
        
        const options = {
            color: item.color,
            figure: item.figure,
            index: index,
            active: item.active,
        }

        addChess(options);
    });
}
    
function eventMove(index) {

    let currentActiveIndex;

    const isActiveCell = board.filter(function(item, indexActiveField) {
       if (item.active) currentActiveIndex = indexActiveField;
        return item.active;
    });

   if (!isActiveCell[0] && board[index].figure) {
       board[index].active = true;
    } 

    if (isActiveCell[0]) {        
        board[index].figure = board[currentActiveIndex].figure;
        board[currentActiveIndex].figure = null;
        board[currentActiveIndex].active = false;      
    } 

    
    redrawBoard();   
}

function redrawBoard() {
    let chess = document.querySelector('.chess');
    chess.innerHTML = '';
    getChessBoard();
}

getChessBoard();