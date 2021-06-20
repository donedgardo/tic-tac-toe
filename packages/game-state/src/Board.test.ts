import { PlayerMark } from './PlayerMark';
import { GameStateErrors } from './GameStateErrors';
import { Board } from './Board';

describe('Game Board', function () {
  let board: Board;
  beforeEach(() => {
    board = new Board();
  });
  it('has 9 valid play indexes', () => {
    expect(board.getEmptyIndexes().length).toBe(9);
  });
  it('can add to a player mark to the correct board index', () => {
    const positions = board.getEmptyIndexes();
    board.play(positions[0], PlayerMark.O);
    expect(board.isBoardIndexEmpty(positions[0])).toBeFalsy();
  });
  it('can adds the correct player mark to board index', () => {
    const positions = board.getEmptyIndexes();
    board.play(positions[0], PlayerMark.X);
    expect(board.isPlayerMarkOnIndex(PlayerMark.X, positions[0])).toBe(true);
  });
  it('throws error when trying to play on already played board position', () => {
    const positions = board.getEmptyIndexes();
    board.play(positions[0], PlayerMark.O);
    try {
      expect(board.play(positions[0], PlayerMark.X));
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(GameStateErrors.BOARD_POSITION_TAKEN);
    }
  });
  it('can pretty print board', () => {
    board.play(0, PlayerMark.O);
    board.play(1, PlayerMark.X);
    expect(board.prettyPrint()).toBe('O|X| \n | | \n | | \n');
  });
});
