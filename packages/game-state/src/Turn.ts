import { BoardPosition } from './BoardPosition';
import { PlayerMark } from './PlayerMark';

export default class Turn {
  public playerMark: PlayerMark;
  public position: BoardPosition;
  constructor({
    playerMark,
    position,
  }: {
    playerMark: PlayerMark;
    position: BoardPosition;
  }) {
    console.log('Turn constructor');
    this.playerMark = playerMark;
    this.position = position;
  }
}
