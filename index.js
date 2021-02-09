const readline = require("readline");
const Board = require('./board');
const {GAME_COLORS, INIT_ROW,INIT_COL, GAME_MAX_TURNS} = require('./constants');

const gameBoard = new Board();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const getUserInput = () => {
    console.log(gameBoard.board);

    rl.question(`Enter Color (${GAME_COLORS}):`, (userChoise) => {
        if(gameBoard.turnNumber === GAME_MAX_TURNS) {
            return rl.close();
        }

        if(GAME_COLORS.indexOf(userChoise) !== -1) {
            gameBoard.increaseGameTurns();
            gameBoard.spreadColor(userChoise, INIT_ROW, INIT_COL, gameBoard.board[0]);
        }
        
        getUserInput();
    });
}

getUserInput();