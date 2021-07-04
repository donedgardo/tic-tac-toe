import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, queryByTestId, render, RenderResult} from '@testing-library/react';
import TicTacToeGame from '~/components/TicTacToeBoard/TicTacToeGame';
import { PlayerMark } from '@tic-tac-toe/game-state';

describe('TicTacToeGame component', () => {
  let gameRender: RenderResult;
  beforeEach(() => {
    gameRender = render(
      <TicTacToeGame
        aiPlayerMark={PlayerMark.O}
        mainPlayerMark={PlayerMark.X}
      />,
    );
  });
  it('should make ai go first by default', () => {
    let didFindAiPlay = false;
    const { getByTestId } = gameRender;
    for (let i = 0; i < 9; i++) {
      const position = getByTestId(`${i}-${PlayerMark.O}`);
      if (position.getAttribute('class') === 'hidden') didFindAiPlay = true;
    }
    expect(didFindAiPlay).toBeTruthy();
  });
  it('main player can play', () => {
    const { getByTestId } = gameRender;
    fireEvent.click(getByTestId(`Position-${4}`));
    const position = getByTestId(`${4}-${PlayerMark.X}`);
    expect(position).not.toHaveClass('hidden');
  });
  it('ai player plays after main player ', () => {
    const { getByTestId } = gameRender;
    const aiPlays: number[] = [];
    fireEvent.click(getByTestId(`Position-${4}`));
    for (let i = 0; i < 9; i++) {
      const position = getByTestId(`${i}-${PlayerMark.O}`);
      if (position.getAttribute('class') !== 'hidden'){
        aiPlays.push(i);
      }
    }
    expect(aiPlays.length).toBe(1);
  });
});

describe('Game over', () => {
  let gameRender: RenderResult;
  beforeEach(() => {
    gameRender = render(
      <TicTacToeGame
        aiPlayerMark={PlayerMark.O}
        mainPlayerMark={PlayerMark.X}
      />
    );
    endGame(gameRender)
  });
  it('should show New game button', () => {
    const { getByTestId} = gameRender;
    expect(getByTestId('New Game Button')).toBeInTheDocument()
  });
  it('should restart game when clicking new game button', () => {
    const { getByTestId } = gameRender;
    fireEvent.click(getByTestId('New Game Button'))
    const emptyIndexes = []
    for (let i = 0; i < 9; i++) {
      const position = getByTestId(`Position-${i}`)
      const className = position.getAttribute('class')
      if (className !== 'hidden') {
        emptyIndexes.push(i);
      }
    }
    expect(emptyIndexes.length).toBeGreaterThanOrEqual(8)
  })
});

const endGame = (render: RenderResult) => {
  const {queryByTestId, getByTestId} = render;
  while(!queryByTestId('New Game Button')) {
    for (let i = 0; i < 9; i++) {
      const position = getByTestId(`Position-${i}`)
      if (position.getAttribute('class') !== 'hidden')
        fireEvent.click(position)
    }
  }
}