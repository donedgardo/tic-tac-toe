import { Board } from './Board';
import { PlayerMark } from './PlayerMark';
import { AiPlayer } from './AiPlayer';

export class AggressiveAiPlayer extends AiPlayer {
  constructor(mark: PlayerMark) {
    super(mark);
  }
  getPlayIndex(board: Board): number {
    if (board.isEmpty()) return this.getCornersAvailable(board)[0];
    const nextWinningPlay = this.getNextWinningPlayIndex(board);
    if (nextWinningPlay) return nextWinningPlay;
    return board.getEmptyIndexes()[0];
  }

  private getCornersAvailable(board: Board): number[] {
    return [0, 2, 6, 8].filter((i) => board.isBoardIndexEmpty(i));
  }
}
