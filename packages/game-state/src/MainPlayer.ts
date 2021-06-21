import { Player } from './Player';
import { PlayerMark } from './PlayerMark';
import { Board } from './Board';

export class MainPlayer extends Player {
  constructor(mark: PlayerMark) {
    super(mark);
  }

  getPlayIndex(board: Board): number {
    return 0;
  }
}
