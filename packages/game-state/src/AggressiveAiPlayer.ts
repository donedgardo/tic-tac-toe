import { Board } from './Board';
import { PlayerMark } from './PlayerMark';
import { AiPlayer } from './AiPlayer';
import {corners, get_random, oppositeCornerMap, weakPoints} from './winningPlaysByPositionMap';

export class AggressiveAiPlayer extends AiPlayer {
  constructor(mark: PlayerMark) {
    super(mark);
  }
  getPlayIndex(board: Board): number {
    const randomCorner = this.getRandomAvailableCorner(board);
    if (board.isEmpty() && randomCorner !== null) return randomCorner;

    const nextWinningPlays = this.getNextWinningPlayIndexes(board);
    if (nextWinningPlays.length > 0) return nextWinningPlays[0];

    const crossWinningPlay = this.getCrossWinPlay(board);
    if (crossWinningPlay !== null) return crossWinningPlay;

    if(this.shouldPlayOppositeCorner(board)) {
      const cornersTaken = board.getPlayerMarkIndexes(this.mark)
      return oppositeCornerMap[cornersTaken[0]]
    }

    if (this.shouldPlayMiddle(board)) return 4;
    if(this.shouldAvoidGettingTrapped(board)) return this.getRandomAvailableWeakPosition(board)

    const trapIndex = this.getTrap(board);
    if (trapIndex !== null) return trapIndex;

    return randomCorner || get_random(board.getEmptyIndexes());
  }

  private shouldPlayMiddle(board: Board) {
    return !this.wentFirst(board) && board.isBoardIndexEmpty(4);
  }

  private shouldPlayOppositeCorner(board: Board) {
    return this.wentFirst(board) && board.getEmptyIndexes().length === 7 && !board.isBoardIndexEmpty(4);
  }

  getCornersAvailable(board: Board): number[] {
    return corners.filter((i) => board.isBoardIndexEmpty(i));
  }

  getRandomAvailableCorner(board: Board): number | null {
    const availableCorners = this.getCornersAvailable(board);
    if (availableCorners.length === 0) return null;
    const randomCorner = get_random(availableCorners);
    return randomCorner;
  }

  private wentFirst(board: Board): boolean {
    return board.getEmptyIndexes().length % 2 !== 0;
  }

  private getTrap(board: Board): number | null {
    let trapIndex: number | null = null;
    const availableCorners = this.getCornersAvailable(board);
    availableCorners.forEach((corner) => {
      if (trapIndex !== null) return;
      const predictionBoard = new Board(board.getState());
      predictionBoard.play(corner, this.mark);
      let winningIndexes = this.getNextWinningPlayIndexes(predictionBoard);
      if (winningIndexes.length === 0) return;
      if (weakPoints.some((weakPoint) => winningIndexes.includes(weakPoint))) {
        trapIndex = corner;
        return;
      }
    });
    return trapIndex;
  }

  private getCrossWinPlay(board: Board): number | null {
    let crossWinPlay: number | null = null;
    const availableCorners = this.getCornersAvailable(board);
    availableCorners.forEach((corner) => {
      const predictionBoard = new Board(board.getState());
      predictionBoard.play(corner, this.mark);
      const winningIndexes = this.getNextWinningPlayIndexes(predictionBoard);
      if (winningIndexes.length < 2) return;
      crossWinPlay = corner;
    });
    return crossWinPlay;
  }

  private shouldAvoidGettingTrapped(board: Board) {
    return !this.wentFirst(board) && board.getEmptyIndexes().length === 6
  }

  private getRandomAvailableWeakPosition(board: Board): number | null {
    const availableWeakPoints = weakPoints.filter((weakPoint) => board.isBoardIndexEmpty(weakPoint))
    return get_random(availableWeakPoints)
  }
}
