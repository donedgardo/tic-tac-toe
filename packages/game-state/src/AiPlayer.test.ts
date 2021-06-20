import GameState from './GameState';
import { PlayerMark } from './PlayerMark';
import { AggressiveAiPlayer } from './AggressiveAiPlayer';
import { DefensiveAiPlayer } from './DefensiveAiPlayer';

describe('AiPlayer', function () {
  let game: GameState;
  let aggressiveAiPlayer: AggressiveAiPlayer;
  beforeEach(() => {
    game = new GameState();
    aggressiveAiPlayer = new AggressiveAiPlayer(PlayerMark.X);
  });
  describe('getOpponentMark', () => {
    it('should be O when mark is X', () => {
      expect(aggressiveAiPlayer.getOpponentMark()).toBe(PlayerMark.O);
    });
  });
  it('is Unbeatable', () => {
    const defensiveAiPlayer = new DefensiveAiPlayer(PlayerMark.O);
    let turn: number = 0;
    while (!game.isGameOver()) {
      console.log(game.getBoard().prettyPrint());
      if (turn % 2 === 0) {
        const position = aggressiveAiPlayer.getPlayIndex(game.getBoard());
        game.play(position, aggressiveAiPlayer.mark);
      } else {
        const position = defensiveAiPlayer.getPlayIndex(game.getBoard());
        game.play(position, defensiveAiPlayer.mark);
      }
      turn++;
    }
    expect(game.getWinner()).toBeNull();
  });
});
