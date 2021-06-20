import { Board } from './Board';
import { PlayerMark } from './PlayerMark';
import { AiPlayer } from './AiPlayer';

export class DefensiveAiPlayer extends AiPlayer {
  constructor(mark: PlayerMark) {
    super(mark);
  }
  getPlayIndex(board: Board): number {
    const nextWinningPlay = this.getNextWinningPlayIndex(board);
    if (nextWinningPlay) return nextWinningPlay;
    if (board.isBoardIndexEmpty(4)) return 4;
    return board.getEmptyIndexes()[0];
  }
}
