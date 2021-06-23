import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, RenderResult } from '@testing-library/react';

import TicTacToeBoard from './TicTacToeBoard';
import GameState, {
  WINNING_PLAY_LABELS,
} from '@tic-tac-toe/game-state';

const indexPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
describe('TicTacToeBoard component', () => {
  let game: GameState;
  let boardRender: RenderResult;
  let mockedPositionClicked = jest.fn(() => null);
  beforeEach(() => {
    game = new GameState();
    boardRender = render(
      <TicTacToeBoard
        boardState={game.getBoard().getState()}
        onPositionClicked={mockedPositionClicked}
      />,
    );
  });
  it('loads the Board svg', () => {
    const { getByTestId } = boardRender;
    expect(getByTestId('TicTacToeBoard')).toBeInTheDocument();
  });
  it.each(indexPositions)('has index position i%', (a) => {
    const { getByTestId } = boardRender;
    expect(getByTestId(`Position-${a}`));
  });
  it.each(indexPositions)('i% index is empty', (a) => {
    const { queryByTestId } = boardRender;
    expect(queryByTestId(`${a}-X`)).toHaveClass('hidden');
    expect(queryByTestId(`${a}-O`)).toHaveClass('hidden');
  });
  it.each(Object.keys(WINNING_PLAY_LABELS))(
    'has no %s winning play',
    (winningPlay) => {
      const { queryByTestId } = boardRender;
      expect(queryByTestId(`${winningPlay}`)).toHaveClass('hidden');
    },
  );

  describe('clicking on position', () => {
    it.each([indexPositions])('should call function with %i', (index) => {
      const { getByTestId } = boardRender;
      const position = getByTestId(`Position-${index}`);
      fireEvent.click(position);
      expect(mockedPositionClicked).toHaveBeenCalledWith(index);
    });
  });
});

describe('Winning Board', () => {
  const game = new GameState;
  it.each([Object.keys(WINNING_PLAY_LABELS)])(
      'should show winning lane for s%',
      (winLane) => {
        const winBoardRender = render(
            <TicTacToeBoard
                boardState={game.getBoard().getState()}
                winLane={winLane as WINNING_PLAY_LABELS}
            />,
        );
        const { getByTestId } =winBoardRender
        expect(getByTestId(winLane)).not.toHaveClass('hidden')
      },
  );
})
