import { PlayerMark } from './PlayerMark';

export type BoardState = {
  A: PlayerMark | null;
  B: PlayerMark | null;
  C: PlayerMark | null;
  D: PlayerMark | null;
  E: PlayerMark | null;
  F: PlayerMark | null;
  G: PlayerMark | null;
  H: PlayerMark | null;
  I: PlayerMark | null;
};
