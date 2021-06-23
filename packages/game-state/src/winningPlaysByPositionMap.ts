export const TOP_ROW: number[] = [0, 1, 2];
export const MIDDLE_ROW: number[] = [3, 4, 5];
export const BOTTOM_ROW: number[] = [6, 7, 8];
export const DIAGONAL_DOWN: number[] = [0, 4, 8];
export const DIAGONAL_UP: number[] = [2, 4, 6];
export const LEFT_COLUMN: number[] = [0, 3, 6];
export const MIDDLE_COLUMN: number[] = [1, 4, 7];
export const RIGHT_COLUMN: number[] = [2, 5, 8];

export enum WINNING_PLAY_LABELS {
  TOP_ROW = 'TOP_ROW',
  MIDDLE_ROW = 'MIDDLE_ROW',
  BOTTOM_ROW = 'BOTTOM_ROW',
  DIAGONAL_DOWN = 'DIAGONAL_DOWN',
  DIAGONAL_UP = 'DIAGONAL_UP',
  LEFT_COLUMN = 'LEFT_COLUMN',
  MIDDLE_COLUMN = 'MIDDLE_COLUMN',
  RIGHT_COLUMN = 'RIGHT_COLUMN',
}


type WinningPlay = {
  label: WINNING_PLAY_LABELS;
  values: number[];
};
export const winningPlaysByPositionMap: { [key: number]: Array<WinningPlay> } =
  {
    0: [
      { label: WINNING_PLAY_LABELS.TOP_ROW, values: TOP_ROW },
      { label: WINNING_PLAY_LABELS.LEFT_COLUMN, values: LEFT_COLUMN },
      { label: WINNING_PLAY_LABELS.DIAGONAL_DOWN, values: DIAGONAL_DOWN },
    ],
    1: [
      { label: WINNING_PLAY_LABELS.TOP_ROW, values: TOP_ROW },
      { label: WINNING_PLAY_LABELS.MIDDLE_COLUMN, values: MIDDLE_COLUMN },
    ],
    2: [
      { label: WINNING_PLAY_LABELS.TOP_ROW, values: TOP_ROW },
      { label: WINNING_PLAY_LABELS.RIGHT_COLUMN, values: RIGHT_COLUMN },
      { label: WINNING_PLAY_LABELS.DIAGONAL_UP, values: DIAGONAL_UP },
    ],
    3: [
      { label: WINNING_PLAY_LABELS.LEFT_COLUMN, values: LEFT_COLUMN },
      { label: WINNING_PLAY_LABELS.MIDDLE_ROW, values: MIDDLE_ROW },
    ],
    4: [
      { label: WINNING_PLAY_LABELS.DIAGONAL_UP, values: DIAGONAL_UP },
      { label: WINNING_PLAY_LABELS.DIAGONAL_DOWN, values: DIAGONAL_DOWN },
      { label: WINNING_PLAY_LABELS.MIDDLE_COLUMN, values: MIDDLE_COLUMN },
      { label: WINNING_PLAY_LABELS.MIDDLE_ROW, values: MIDDLE_ROW },
    ],
    5: [
      { label: WINNING_PLAY_LABELS.RIGHT_COLUMN, values: RIGHT_COLUMN },
      { label: WINNING_PLAY_LABELS.MIDDLE_ROW, values: MIDDLE_ROW },
    ],
    6: [
      { label: WINNING_PLAY_LABELS.LEFT_COLUMN, values: LEFT_COLUMN },
      { label: WINNING_PLAY_LABELS.DIAGONAL_UP, values: DIAGONAL_UP },
      { label: WINNING_PLAY_LABELS.BOTTOM_ROW, values: BOTTOM_ROW },
    ],
    7: [
      { label: WINNING_PLAY_LABELS.BOTTOM_ROW, values: BOTTOM_ROW },
      { label: WINNING_PLAY_LABELS.MIDDLE_COLUMN, values: MIDDLE_COLUMN },
    ],
    8: [
      { label: WINNING_PLAY_LABELS.BOTTOM_ROW, values: BOTTOM_ROW },
      { label: WINNING_PLAY_LABELS.RIGHT_COLUMN, values: RIGHT_COLUMN },
      { label: WINNING_PLAY_LABELS.DIAGONAL_DOWN, values: DIAGONAL_DOWN },
    ],
  };

export const weakPoints = [1, 3, 5, 7];

export const corners = [0, 2, 6, 8];

export const oppositeCornerMap: {[key:number]: number} = {0: 8, 2:6, 6:2, 8:0 }

export function get_random<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

