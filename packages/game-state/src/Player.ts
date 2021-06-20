import { PlayerMark } from './PlayerMark';
import { Board } from './Board';

export abstract class Player {
  mark: PlayerMark;
  protected constructor(mark: PlayerMark) {
    this.mark = mark;
  }

  abstract getPlayIndex(board: Board): number;
}
