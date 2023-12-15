class TicTacToeWinningChecker {
  winConditions: any[];

  constructor() {
    this.winConditions = [
      [
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 0, col: 2 },
      ],
      [
        { row: 1, col: 0 },
        { row: 1, col: 1 },
        { row: 1, col: 2 },
      ],
      [
        { row: 2, col: 0 },
        { row: 2, col: 1 },
        { row: 2, col: 2 },
      ],

      [
        { row: 0, col: 0 },
        { row: 1, col: 0 },
        { row: 2, col: 0 },
      ],
      [
        { row: 0, col: 1 },
        { row: 1, col: 1 },
        { row: 2, col: 1 },
      ],
      [
        { row: 0, col: 2 },
        { row: 1, col: 2 },
        { row: 2, col: 2 },
      ],

      [
        { row: 0, col: 0 },
        { row: 1, col: 1 },
        { row: 2, col: 2 },
      ],
      [
        { row: 0, col: 2 },
        { row: 1, col: 1 },
        { row: 2, col: 0 },
      ],
    ];
  }

  getBoardStateValue(row, col, boardState) {
    return boardState[row * 3 + col];
  }

  getLineState(winCondition, boardState) {
    const result = winCondition.map((cell) => {
      return this.getBoardStateValue(cell.row, cell.col, boardState);
    });

    return result;
  }

  determineWinner(boardState1) {
    this.winConditions.forEach((winCondition, winConditionsIndex) => {
      const lineState = this.getLineState(winCondition, boardState1);

      const isWin = lineState.every((cellState) => {
        return cellState === lineState[0];
      });
      if (isWin) {
        console.log(lineState[0], "win", winConditionsIndex);
      }
    });
  }
}

const boardState1 = [1, 1, 1, 0, 0, 0, 0, 0, 0];

const winningHelper = new TicTacToeWinningChecker();
winningHelper.determineWinner(boardState1);
