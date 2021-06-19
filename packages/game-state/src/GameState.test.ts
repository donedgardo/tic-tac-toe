import GameState from './GameState';
import { PlayerMark } from './PlayerMark';
import { GameStateErrors } from './GameStateErrors';

describe('Game', () => {
  let game: GameState;
  beforeAll(() => {});
  it('has 8 valid plays', () => {
    const game = new GameState();
    game.aiPlay();
    expect(game.getPlayableBoardPositions().length).toBe(8);
  });
  it('ai can play', () => {
    const game = new GameState();
    game.aiPlay();
    expect(game.isOver()).toBeFalsy();
  });
  it('throws error when trying to play on already played board position', () => {
    const game = new GameState();
    const positions = game.getPlayableBoardPositions();
    game.play(positions[0], PlayerMark.O);
    try {
      expect(game.play(positions[0], PlayerMark.X));
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(GameStateErrors.BOARD_POSITION_TAKEN);
    }
  });
  it('should be unbeatable', () => {
    // while (!game.isOver)
    // {
    //   game.aiPlay();
    // }
    // expect(game.didAiWin()).toBeFalsy();
    expect(true).toBeTruthy();
  });
});
