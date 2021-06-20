import { BoardState } from './BoardState';
import { PlayerMark } from './PlayerMark';
import { GameStateErrors } from './GameStateErrors';

export class Board {
  state: BoardState = [null, null, null, null, null, null, null, null, null];

  getEmptyIndexes(): number[] {
    const playablePositions: number[] = [];
    for (let i = 0; i < this.state.length; i++) {
      if (this.isBoardIndexEmpty(i)) playablePositions.push(i);
    }
    return playablePositions;
  }

  isBoardIndexEmpty(i: number) {
    return this.state[i] === null;
  }

  play(index: number, mark: PlayerMark) {
    if (!this.isBoardIndexEmpty(index))
      throw new Error(GameStateErrors.BOARD_POSITION_TAKEN);
    this.state[index] = mark;
  }

  getPlayerMarkIndexes(mark: PlayerMark): number[] {
    const playerMarkIndexes: number[] = [];
    for (let i = 0; i < this.state.length; i++) {
      if (this.isPlayerMarkOnIndex(mark, i)) playerMarkIndexes.push(i);
    }
    return playerMarkIndexes;
  }

  isPlayerMarkOnIndex(mark: PlayerMark, index: number) {
    return this.state[index] === mark;
  }

  isWinningIndexForPlayer(playerMark: PlayerMark, boardIndex: number) {
    let isWinningIndex = false;
    const TOP_ROW = [0, 1, 2];
    const MIDDLE_ROW = [3, 4, 5];
    const BOTTOM_ROW = [6, 7, 8];
    const DIAGONAL_DOWN = [0, 4, 8];
    const LEFT_COLUMN = [0, 3, 6];
    const MIDDLE_COLUMN = [1, 4, 7];
    const RIGHT_COLUMN = [2, 5, 8];
    const DIAGONAL_UP = [2, 4, 6];
    const winningPlaysMap: { [key: number]: Array<number[]> } = {
      0: [TOP_ROW, LEFT_COLUMN, DIAGONAL_DOWN],
      1: [TOP_ROW, MIDDLE_COLUMN],
      2: [TOP_ROW, RIGHT_COLUMN, DIAGONAL_UP],
      3: [LEFT_COLUMN, MIDDLE_ROW],
      4: [DIAGONAL_UP, DIAGONAL_DOWN, MIDDLE_COLUMN, MIDDLE_ROW],
      5: [RIGHT_COLUMN, MIDDLE_ROW],
      6: [LEFT_COLUMN, DIAGONAL_UP, BOTTOM_ROW],
      7: [BOTTOM_ROW, MIDDLE_COLUMN],
      8: [BOTTOM_ROW, RIGHT_COLUMN, DIAGONAL_DOWN],
    };
    winningPlaysMap[boardIndex].some((winningPlays) => {
      const boardStateAtWinningPlay = winningPlays.map((winningPlayIndex) => {
        if (winningPlayIndex === boardIndex) return playerMark;
        return this.state[winningPlayIndex];
      });
      isWinningIndex = boardStateAtWinningPlay.every(
        (mark) => mark === playerMark,
      );
      return isWinningIndex;
    });
    return isWinningIndex;
  }

  isEmpty(): boolean {
    return this.getEmptyIndexes().length === 9;
  }

  prettyPrint() {
    let print = ``;
    for (let i = 0; i < this.state.length; i = i + 3) {
      print += `${this.getSymbol(i)}|${this.getSymbol(i + 1)}|${
        this.getSymbol(i + 2) || ' '
      }\n`;
    }
    return print;
  }

  private getSymbol(index: number): string {
    return this.state[index] || ' ';
  }
}
