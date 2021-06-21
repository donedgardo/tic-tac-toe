const TOP_ROW = [0, 1, 2];
const MIDDLE_ROW = [3, 4, 5];
const BOTTOM_ROW = [6, 7, 8];
const DIAGONAL_DOWN = [0, 4, 8];
const LEFT_COLUMN = [0, 3, 6];
const MIDDLE_COLUMN = [1, 4, 7];
const RIGHT_COLUMN = [2, 5, 8];
const DIAGONAL_UP = [2, 4, 6];
export const winningPlaysMap: { [key: number]: Array<number[]> } = {
  0: [TOP_ROW, LEFT_COLUMN, DIAGONAL_DOWN],
  1: [TOP_ROW, MIDDLE_COLUMN],
  2: [TOP_ROW, RIGHT_COLUMN, DIAGONAL_UP],
  3: [LEFT_COLUMN, MIDDLE_ROW],
  4: [DIAGONAL_UP, DIAGONAL_DOWN, MIDDLE_COLUMN, MIDDLE_ROW],
  5: [RIGHT_COLUMN, MIDDLE_ROW],
  6: [LEFT_COLUMN, DIAGONAL_UP, BOTTOM_ROW],
  7: [BOTTOM_ROW, MIDDLE_COLUMN],
  8: [BOTTOM_ROW, RIGHT_COLUMN, DIAGONAL_DOWN],
};

export const weakPoints = [1, 3, 5, 7];

export const corners = [0, 2, 6, 8];

export function get_random<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}
