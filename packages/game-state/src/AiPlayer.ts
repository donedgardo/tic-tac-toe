import { Player } from './Player';
import { Board } from './Board';
import { PlayerMark } from './PlayerMark';

export abstract class AiPlayer extends Player {
  protected constructor(mark: PlayerMark) {
    super(mark);
  }

  getOpponentMark(): PlayerMark {
    return this.mark === PlayerMark.X ? PlayerMark.O : PlayerMark.X;
  }

  getNextWinningPlayIndexes(board: Board): number[] {
    let nextWinningPlays: number[] = [];
    const availablePlayIndexes = board.getEmptyIndexes();
    availablePlayIndexes.forEach((boardIndex) => {
      const aiWinningPlay = board.isWinningIndexForPlayer(
        this.mark,
        boardIndex,
      );
      if (aiWinningPlay) nextWinningPlays.push(boardIndex);
    });
    if (nextWinningPlays.length > 0) return nextWinningPlays;
    availablePlayIndexes.forEach((boardIndex) => {
      const opponentMark = this.getOpponentMark();
      const opponentHasWinningPlay = board.isWinningIndexForPlayer(
        opponentMark,
        boardIndex,
      );
      if (opponentHasWinningPlay) nextWinningPlays.push(boardIndex);
    });
    return nextWinningPlays;
  }
}
