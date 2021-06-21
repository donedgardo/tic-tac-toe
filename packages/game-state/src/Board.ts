import { BoardState } from './BoardState';
import { PlayerMark } from './PlayerMark';
import { GameStateErrors } from './GameStateErrors';
import { winningPlaysMap } from './winningPlaysMap';

export class Board {
  private readonly state: BoardState;
  constructor(
    state: BoardState = [null, null, null, null, null, null, null, null, null],
  ) {
    this.state = [...state];
  }
  getState() {
    return this.state;
  }

  getEmptyIndexes(): number[] {
    const emptyIndexes: number[] = [];
    for (let i = 0; i < this.state.length; i++) {
      if (this.isBoardIndexEmpty(i)) emptyIndexes.push(i);
    }
    return emptyIndexes;
  }

  isBoardIndexEmpty(index: number) {
    return this.state[index] === null;
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
