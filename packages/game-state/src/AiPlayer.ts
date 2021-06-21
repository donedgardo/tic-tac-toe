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
    const opponentMark = this.getOpponentMark();

    availablePlayIndexes.forEach((boardIndex) => {
      const aiWinningPlay = board.isWinningIndexForPlayer(
        this.mark,
        boardIndex,
      );
      const opponentHasWinningPlay = board.isWinningIndexForPlayer(
        opponentMark,
        boardIndex,
      );
      if (opponentHasWinningPlay || aiWinningPlay)
        nextWinningPlays.push(boardIndex);
    });
    return nextWinningPlays;
  }
}
