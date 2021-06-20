import GameState from './GameState';
import { PlayerMark } from './PlayerMark';

describe('Game State', function () {
  let game: GameState;
  beforeEach(() => {
    game = new GameState();
  });
  describe('is Over', () => {
    it('if is there are no more playable indexes', () => {
      for (let i = 0; i < 9; i++) {
        game.play(i, PlayerMark.O);
      }
      expect(game.isGameOver()).toBeTruthy();
    });
    it('if a player has marks on a set of a winning play', () => {
      [0, 1, 2].forEach((boardIndex) => game.play(boardIndex, PlayerMark.O));
      expect(game.isGameOver()).toBeTruthy();
    });
  });
  describe('getWinner', () => {
    it('should be null if no winner is in game', () => {
      const mark = PlayerMark.X;
      game.play(0, mark);
      game.play(3, mark);
      game.play(8, mark);
      expect(game.getWinner()).toBeNull();
    });
    it('should be the mark of the player of the winner', () => {
      const mark = PlayerMark.O;
      game.play(6, mark);
      game.play(7, mark);
      game.play(8, mark);
      expect(game.getWinner()).toBe(mark);
    });
  });
  describe('getBoard', () => {
    it('should return board state', () => {
      expect(game.getBoard().state).toStrictEqual([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ]);
    });
  });
});
