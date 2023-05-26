// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {

    for (let i = 0; i < 9; i++) {

        const set = new Set();

        for (let j = 0; j < 9; j++) {
            const current = board[j][i];
            if (current === ".") continue;
            if (set.has(current)) return false;
            set.add(current)
        }
    }

    for (row of board) {
        const set = new Set();

        for (number of row) {
            if (number === ".") continue;
            if (set.has(number)) return false;
            set.add(number)
        }
    };

    const map = {};

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            const number = board[i][j]
            const grid = Math.floor(i / 3).toString() + Math.floor(j / 3).toString();

            if (number === ".") continue;
            if (!map[grid]) map[grid] = new Set();
            if (map[grid].has(number)) return false;

            map[grid].add(number)
        }
    }

    return true;
};