import { GameObject } from "../../gameobject";
import { Player } from "./player";
import config from "../../../gameConfig";

export class Bomb extends GameObject {
  _player: Player;
  _timer: number;
  _range: number;
  _exploded: boolean;

  constructor(player: Player, x: number, y: number) {
    super(x, y, false, true);
    this._player = player;
    this._timer = config.BOMB_TIMER;
    this._range = player.bombRange;
    this._exploded = false;
  }

  get range() {
    return this._range;
  }

  get exploded() {
    return this._exploded;
  }

  set exploded(value: boolean) {
    this._exploded = value;
  }

  handleExplosion() {
    if (this.exploded) return;
    this.exploded = true;
  }
}