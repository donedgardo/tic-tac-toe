import GameState from './GameState';
import {PlayerMark} from './PlayerMark';
import {AiPlayer} from './AiPlayer';
import {corners, get_random, oppositeCornerMap, weakPoints} from './winningPlaysByPositionMap';

function setTrap(aggressiveAiPlayer: AiPlayer, game: GameState) {
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
  let aggressiveAiPlayer: AiPlayer;
  let secondAiPlayer: AiPlayer;
  beforeEach(() => {
    game = new GameState();
    aggressiveAiPlayer = new AiPlayer(PlayerMark.X);
    secondAiPlayer = new AiPlayer(PlayerMark.O);

  });
  it('is Unbeatable', () => {
    let turn: number = 0;
    while (!game.isGameOver()) {
      if (turn % 2 === 0) {
        const position = aggressiveAiPlayer.getPlayIndex(game.getBoard());
        game.play(position, aggressiveAiPlayer.mark);
      } else {
        const position = secondAiPlayer.getPlayIndex(game.getBoard());
        game.play(position, secondAiPlayer.mark);
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
  })
  it.each([corners])('should play opposite corner of i% if opponent played in the middle second turn', (corner) => {
    game.play(corner, aggressiveAiPlayer.mark);
    game.play(4, aggressiveAiPlayer.getOpponentMark());
    expect(aggressiveAiPlayer.getPlayIndex(game.getBoard())).toBe(oppositeCornerMap[corner])
  })
  it('should not loose to a fork trap', () => {
    game.play(1, aggressiveAiPlayer.getOpponentMark());
    game.play(aggressiveAiPlayer.getPlayIndex(game.getBoard()), aggressiveAiPlayer.mark)
    game.play(3, aggressiveAiPlayer.getOpponentMark());
    expect(aggressiveAiPlayer.getPlayIndex(game.getBoard())).toBe(0)
  })
})
