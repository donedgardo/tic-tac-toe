import { Player } from './Player';
import { Board } from './Board';
import { PlayerMark } from './PlayerMark';
import {corners, get_random, oppositeCornerMap, weakPoints} from "./winningPlaysByPositionMap";

export class AiPlayer extends Player {
  constructor(mark: PlayerMark) {
    super(mark);
  }

  getPlayIndex(board: Board): number {
    const randomCorner = this.getRandomAvailableCorner(board);
    if (board.isEmpty() && randomCorner !== null) return randomCorner;

    const nextWinningPlays = this.getNextWinningPlayIndexes(board);
    if (nextWinningPlays.length > 0) return nextWinningPlays[0];

    const myCrossWinningPlay = this.getCrossWinPlayForPlayer(board, this.mark);
    if (myCrossWinningPlay !== null) return myCrossWinningPlay;

    const opponentCrossWinningPlay = this.getCrossWinPlayForPlayer(board, this.getOpponentMark());
    if (opponentCrossWinningPlay !== null) return this.getOpponentCrossPlayCounter(opponentCrossWinningPlay, board);

    if(this.shouldPlayOppositeCorner(board)) {
      const cornersTaken = board.getPlayerMarkIndexes(this.mark)
      return oppositeCornerMap[cornersTaken[0]]
    }

    if (this.shouldPlayMiddle(board)) return 4;

    const trapIndex = this.getTrap(board);
    if (trapIndex !== null) return trapIndex;

    return randomCorner || get_random(board.getEmptyIndexes());
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

  getOpponentMark(): PlayerMark {
    return this.mark === PlayerMark.X ? PlayerMark.O : PlayerMark.X;
  }

  getNextWinningPlayIndexes(board: Board): number[] {
    const myNextWinningPlays = this.getNextWinningPlaysForPlayer(board, this.mark)
    if (myNextWinningPlays.length > 0) return myNextWinningPlays;
    const opponentNextWinningPlays = this.getNextWinningPlaysForPlayer(board, this.getOpponentMark())
    return opponentNextWinningPlays
  }

  private getNextWinningPlaysForPlayer(board:Board, mark: PlayerMark): number[] {
    return this.getPlayerWinningPlays(board, mark);
  }

  private shouldPlayMiddle(board: Board) {
    return !this.wentFirst(board) && board.isBoardIndexEmpty(4);
  }

  private shouldPlayOppositeCorner(board: Board) {
    return this.wentFirst(board) && board.getEmptyIndexes().length === 7 && !board.isBoardIndexEmpty(4);
  }

  private getPlayerWinningPlays(board: Board, mark: PlayerMark) {
    let myNextWinningPlays: number[] = [];
    const availablePlayIndexes = board.getEmptyIndexes();
    availablePlayIndexes.forEach((boardIndex) => {
      const myWinningPlay = board.isWinningIndexForPlayer(
          mark,
          boardIndex,
      );
      if (myWinningPlay) myNextWinningPlays.push(boardIndex);
    });
    return myNextWinningPlays
  }

  private getOpponentCrossPlayCounter(opponentCrossWinningPlay: number, board: Board): number {
    const availablePlayIndexes = board.getEmptyIndexes();
    let counterPlay: number = null;
    availablePlayIndexes.filter(i=> i !== opponentCrossWinningPlay).some(possibleCounter => {
      const predictionBoard = new Board(board.getState());
      predictionBoard.play(possibleCounter, this.mark);
      predictionBoard.play(opponentCrossWinningPlay, this.getOpponentMark());
      const opponentWinningPlays = this.getNextWinningPlaysForPlayer(predictionBoard, this.getOpponentMark())
      if(opponentWinningPlays.length < 2){
        counterPlay = possibleCounter
        return true
      }
    })
    if(counterPlay !== null) return counterPlay;
    return availablePlayIndexes[0]
  }

  private getCrossWinPlayForPlayer(board: Board, mark: PlayerMark): number | null {
    let crossWinPlay: number | null = null;
    const availablePlays = board.getEmptyIndexes();
    availablePlays.forEach((play) => {
      const predictionBoard = new Board(board.getState());
      predictionBoard.play(play, mark);
      const winningIndexes = this.getNextWinningPlaysForPlayer(predictionBoard, mark);
      if (winningIndexes.length < 2) return;
      crossWinPlay = play;
    });
    return crossWinPlay;
  }

}
