import Turn from './Turn';
import { BoardPosition } from './BoardPosition';
import { BoardState } from './BoardState';
import { PlayerMark } from './PlayerMark';
import { GameStateErrors } from './GameStateErrors';

const defaultBoardState: BoardState = {
  A: null,
  B: null,
  C: null,
  D: null,
  E: null,
  F: null,
  G: null,
  H: null,
  I: null,
};

export default class GameState {
  private turns: Turn[] = [];
  private boardState: BoardState = defaultBoardState;

  constructor(args: {} = {}) {}

  isOver(): boolean {
    return this.turns.length === 9;
  }

  aiPlay() {
    let position: BoardPosition;
    position = this.getOffensivePlay();
    this.play(position, PlayerMark.X);
  }

  getPlayableBoardPositions(): BoardPosition[] {
    const validPlays = [];
    for (const position in this.boardState) {
      if (this.boardState[position as BoardPosition] === null)
        validPlays.push(BoardPosition[position as BoardPosition]);
    }
    return validPlays;
  }

  play(position: BoardPosition, playerMark: PlayerMark) {
    console.log('BoardState', this.boardState);
    console.log('Turns', this.turns);
    console.log(`${playerMark} playing on`, position);
    if (this.isBoardPositionTaken(position)) {
      throw new Error(GameStateErrors.BOARD_POSITION_TAKEN);
      return;
    }
    this.turns.push(new Turn({ position, playerMark }));
    this.boardState[position] = playerMark;
  }

  didAiWin() {
    return false;
  }

  getOffensivePlay(): BoardPosition {
    const cornersAvailable = this.getCornersAvailable();
    return cornersAvailable[0];
  }

  private getDefensivePlay(): BoardPosition {
    return BoardPosition.E;
  }

  private getCornersAvailable(): BoardPosition[] {
    const corners = [
      BoardPosition.A,
      BoardPosition.C,
      BoardPosition.G,
      BoardPosition.I,
    ];
    const availableCorners = corners.filter(
      (position) => !this.isBoardPositionTaken(position),
    );
    return availableCorners;
  }

  private isBoardPositionTaken(position: BoardPosition) {
    return this.boardState[position] !== null;
  }
}
