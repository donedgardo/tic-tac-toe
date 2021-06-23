import React, { useCallback, useEffect, useMemo, useState } from 'react';
import TicTacToeBoard from '~/components/TicTacToeBoard/TicTacToeBoard';
import GameState, {
  AggressiveAiPlayer,
  BoardState,
  PlayerMark,
  WINNING_PLAY_LABELS,
} from '@tic-tac-toe/game-state';

type TicTacToeGameProps = {
  aiPlayerMark: PlayerMark;
  mainPlayerMark: PlayerMark;
};

const TicTacToeGame = ({
  aiPlayerMark,
  mainPlayerMark,
}: TicTacToeGameProps) => {
  const [game, setGame] = useState<GameState>(new GameState());
  const aiPlayer = useMemo<AggressiveAiPlayer>(
    () => new AggressiveAiPlayer(aiPlayerMark),
    [aiPlayerMark],
  );
  const [boardState, setBoardState] = useState<BoardState>();
  const [winLane, setWinLane] = useState<WINNING_PLAY_LABELS | undefined>(
    undefined,
  );
  const [winner, setWinner] = useState<PlayerMark|null>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [firstPlayer, setFirstPlayer] = useState<PlayerMark>(aiPlayer.mark);

  useEffect(() => {
      startGame()
  }, []);

  const updateBoardState = useCallback(() => {
    setBoardState([...game.getBoard().getState()]);
    setWinLane(game.getWinningPlayEnum());
    setIsGameOver(game.isGameOver());
    setWinner(game.getWinner());
  }, [game])

  const resetGame = useCallback(() => {
    game.reset()
    startGame()
  }, [game, firstPlayer, winner, mainPlayerMark, aiPlayer.mark])

  const startGame= useCallback(()=> {
    if(winner === aiPlayer.mark) {
      setFirstPlayer(aiPlayer.mark)
      aiPlay()
    }
    if(winner === null && firstPlayer === mainPlayerMark)
    {
      setFirstPlayer(aiPlayer.mark)
      aiPlay()
    } else if( winner === null && firstPlayer===aiPlayer.mark) {
      setFirstPlayer(mainPlayerMark)
    }
    updateBoardState()
  }, [winner, firstPlayer, mainPlayerMark, aiPlayer])

  const aiPlay = useCallback(() => {
    const aiPlayIndex = aiPlayer.getPlayIndex(game.getBoard());
    game.play(aiPlayIndex, aiPlayerMark);
    updateBoardState()
  }, [game])

  const onPlayerClickPosition = useCallback((index) => {
    game.play(index, mainPlayerMark);
    const isGameOver = game.isGameOver()
    updateBoardState()
    if(isGameOver) return;
    aiPlay()
  }, [game]);

  return (
    <>
      <TicTacToeBoard
        boardState={boardState}
        winLane={winLane}
        onPositionClicked={onPlayerClickPosition}
      />
      {isGameOver ? (
        <button onClick={resetGame} data-testid={'New Game Button'}>New Game</button>
      ) : null}
    </>
  );
};

export default TicTacToeGame;
