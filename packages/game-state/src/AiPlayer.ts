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

  protected getNextWinningPlayIndex(board: Board) {
    let nextWinningPlay = null;
    const availablePlayIndexes = board.getEmptyIndexes();
    const opponentMark = this.getOpponentMark();

    availablePlayIndexes.some((boardIndex) => {
      const aiWinningPlay = board.isWinningIndexForPlayer(
        this.mark,
        boardIndex,
      );
      const opponentHasWinningPlay = board.isWinningIndexForPlayer(
        opponentMark,
        boardIndex,
      );
      if (opponentHasWinningPlay || aiWinningPlay) nextWinningPlay = boardIndex;
      return opponentHasWinningPlay || aiWinningPlay;
    });
    return nextWinningPlay;
  }
}
