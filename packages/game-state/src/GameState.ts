import { Board } from './Board';
import { PlayerMark } from './PlayerMark';

export default class GameState {
  private board: Board;
  private isOver: boolean = false;
  private playerWinner: PlayerMark | null = null;
  constructor() {
    this.board = new Board();
  }
  play(boardIndex: number, playerMark: PlayerMark) {
    if (this.board.isWinningIndexForPlayer(playerMark, boardIndex)) {
      this.isOver = true;
      this.playerWinner = playerMark;
    }
    this.board.play(boardIndex, playerMark);
    if (this.board.getEmptyIndexes().length === 0) this.isOver = true;
  }
  isGameOver(): boolean {
    return this.isOver;
  }
  getWinner() {
    return this.playerWinner;
  }

  getBoard() {
    return this.board;
  }
}
