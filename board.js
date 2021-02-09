const { BOARD_ROWS, BOARD_COLS, GAME_COLORS, DIRECTIONS, INIT_ROW, INIT_COL} = require('./constants');

class Board {
    constructor() {
        this.board = new Array(BOARD_ROWS * BOARD_COLS).fill();
        this.turnNumber = 0;
        this.paintBoardRandomly();
    }

    increaseGameTurns = () => {
        this.turnNumber++;
    }

    paintBoardRandomly = () => {
        this.board = this.board.map(() => GAME_COLORS[Math.floor(Math.random() * GAME_COLORS.length)]);
    }

    /**
     * This whole function should be promise so when the recursin happend is happend async and the callstack isnt throwing maximum call error
     */
    spreadColor = (color, col, row, baseColor) => {
        if((row !== INIT_ROW && col !== INIT_COL) || this.board[row * BOARD_ROWS + col] !== baseColor) {
            return;
        }

        this.board[row * BOARD_ROWS + col] = color;

        for (const direction of Object.keys(DIRECTIONS)) {
            this.spreadColor(color, col + DIRECTIONS[direction].col, row + DIRECTIONS[direction].row, baseColor);
        };
    }
}

module.exports = Board;