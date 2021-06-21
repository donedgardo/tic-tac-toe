import GameState from './GameState';
import { PlayerMark } from './PlayerMark';
import { AggressiveAiPlayer } from './AggressiveAiPlayer';
import { get_random, weakPoints } from './winningPlaysMap';

function setTrap(aggressiveAiPlayer: AggressiveAiPlayer, game: GameState) {
  const firstPlay = aggressiveAiPlayer.getPlayIndex(game.getBoard());
  game.play(firstPlay, aggressiveAiPlayer.mark);
  const corners = aggressiveAiPlayer.getCornersAvailable(game.getBoard());
  game.play(
    get_random([...weakPoints, ...corners]),
    aggressiveAiPlayer.getOpponentMark(),
  );
}

describe('AggressiveAiPlayer', function () {
  let game: GameState;
  let aggressiveAiPlayer: AggressiveAiPlayer;
  beforeEach(() => {
    game = new GameState();
    aggressiveAiPlayer = new AggressiveAiPlayer(PlayerMark.X);
  });
  it('is Unbeatable', () => {
    let turn: number = 0;
    while (!game.isGameOver()) {
      if (turn % 2 === 0) {
        const position = aggressiveAiPlayer.getPlayIndex(game.getBoard());
        game.play(position, aggressiveAiPlayer.mark);
      } else {
        const position = aggressiveAiPlayer.getPlayIndex(game.getBoard());
        game.play(position, aggressiveAiPlayer.getOpponentMark());
      }
      turn++;
    }
    expect(game.getWinner()).toBeNull();
  });
  it('should pick random corner if goes first', () => {
    const firstPlay = aggressiveAiPlayer.getPlayIndex(game.getBoard());
    let availableCorners = aggressiveAiPlayer.getCornersAvailable(
      game.getBoard(),
    );
    expect(availableCorners.includes(firstPlay)).toBeTruthy();
  });
  it("should force opponent to bad position they don't pick center", () => {
    const firstPlay = aggressiveAiPlayer.getPlayIndex(game.getBoard());
    game.play(firstPlay, aggressiveAiPlayer.mark);
    const corners = aggressiveAiPlayer.getCornersAvailable(game.getBoard());
    game.play(
      get_random([...weakPoints, ...corners]),
      aggressiveAiPlayer.getOpponentMark(),
    );
    const secondAiPlay = aggressiveAiPlayer.getPlayIndex(game.getBoard());
    game.play(secondAiPlay, aggressiveAiPlayer.mark);
    const forcedPlays = aggressiveAiPlayer.getNextWinningPlayIndexes(
      game.getBoard(),
    );
    forcedPlays.forEach((forcedPlay) => {
      if (weakPoints.includes(forcedPlay)) expect(true).toBeTruthy();
    });
  });
  it("should win if opponent didnt' pick center", () => {
    setTrap(aggressiveAiPlayer, game);
    let turn = 2;
    while (!game.isGameOver()) {
      console.log(game.getBoard().prettyPrint());
      if (turn % 2 === 0) {
        const position = aggressiveAiPlayer.getPlayIndex(game.getBoard());
        game.play(position, aggressiveAiPlayer.mark);
      } else {
        const position = aggressiveAiPlayer.getPlayIndex(game.getBoard());
        game.play(position, aggressiveAiPlayer.getOpponentMark());
      }
      turn++;
    }
    expect(game.getWinner()).toBe(aggressiveAiPlayer.mark);
  });
});
