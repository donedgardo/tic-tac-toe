import {Board} from './Board';
import {PlayerMark} from './PlayerMark';
import {WINNING_PLAY_LABELS} from "./winningPlaysByPositionMap";

export default class GameState {
  private board: Board;
  private isOver: boolean = false;
  private winningPlay: WINNING_PLAY_LABELS | null = null;
  private playerWinner: PlayerMark | null = null;
  constructor() {
    this.board = new Board();
  }
  play(boardIndex: number, playerMark: PlayerMark) {
    const winningPlayLabel = this.board.isWinningIndexForPlayer(playerMark, boardIndex);
    if (winningPlayLabel) {
      this.isOver = true;
      this.playerWinner = playerMark;
      this.winningPlay = winningPlayLabel
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

  getWinningPlayEnum(): WINNING_PLAY_LABELS | null {
    return this.winningPlay;
  }

  reset() {
    this.board = new Board();
    this.isOver = false;
    this.winningPlay = null
    this.playerWinner = null
  }
}
