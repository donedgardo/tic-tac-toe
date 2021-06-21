import { Board } from './Board';
import { PlayerMark } from './PlayerMark';
import { AiPlayer } from './AiPlayer';
import { corners, get_random, weakPoints } from './winningPlaysMap';

export class AggressiveAiPlayer extends AiPlayer {
  constructor(mark: PlayerMark) {
    super(mark);
  }
  getPlayIndex(board: Board): number {
    const randomCorner = this.getRandomAvailableCorner(board);
    if (board.isEmpty() && randomCorner !== null) {
      console.log('returning random corner');
      return randomCorner;
    }

    const nextWinningPlays = this.getNextWinningPlayIndexes(board);
    if (nextWinningPlays.length > 0) {
      console.log('returning next winning play');
      return nextWinningPlays[0];
    }

    const crossWinningPlay = this.getCrossWinPlay(board);
    if (crossWinningPlay !== null) {
      console.log('returning cross win play');
      return crossWinningPlay;
    }

    if (this.shouldStopTrap(board) && board.isBoardIndexEmpty(4)) {
      console.log('stop trap');
      return 4;
    }

    const trapIndex = this.getTrap(board);
    if (trapIndex !== null) {
      console.log('setting trap');
      return trapIndex;
    }

    return randomCorner || board.getEmptyIndexes()[0];
  }

  private shouldStopTrap(board: Board) {
    return board.getPlayerMarkIndexes(this.getOpponentMark()).length === 1;
  }

  getCornersAvailable(board: Board): number[] {
    return corners.filter((i) => board.isBoardIndexEmpty(i));
  }

  getRandomAvailableCorner(board: Board): number | null {
    return get_random(this.getCornersAvailable(board)) || null;
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
      console.log(`Checking ${corner} for cross play`);
      const predictionBoard = new Board(board.getState());
      predictionBoard.play(corner, this.mark);
      const winningIndexes = this.getNextWinningPlayIndexes(predictionBoard);
      if (winningIndexes.length < 2) return;
      console.log(
        `Found cross winning play with prediction board \n${predictionBoard.prettyPrint()}`,
      );
      crossWinPlay = corner;
    });
    return crossWinPlay;
  }
}
