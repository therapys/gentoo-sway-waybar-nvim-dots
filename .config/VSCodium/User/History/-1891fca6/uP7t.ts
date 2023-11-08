import config from "../../gameConfig";
import { GameObject } from "../gameobject";
import { GameBoard } from "../gameboard";

export class Player extends GameObject {
  _name: string;
  _bombs: number;
  _bombRange: number;
  _alive: boolean;
  _speed: number;
  constructor(x: number, y: number, playerName: string) {
    super(x, y, config.PLAYER_CAN_PASS_PLAYERS, true);
    this._name = playerName;
    this._bombs = config.PLAYER_BOMB_COUNT;
    this._bombRange = config.PLAYER_BOMB_RANGE;
    this._alive = true;
    this._speed = config.PLAYER_SPEED;
  }

  get speed() {
    return this._speed;
  }

  get bombRange() {
    return this._bombRange;
  }

  get alive() {
    return this._alive;
  }

  set bombRange(value) {
    this._bombRange = value;
  }

  move(board: GameBoard, direction: "up" | "down" | "left" | "right") {
    if (this.alive) {
      let newX = this.x;
      let newY = this.y;

      if (direction === "up") {
        newX -= 1;
      } else if (direction === "down") {
        newX += 1;
      } else if (direction === "left") {
        newY -= 1;
      } else {
        newY += 1;
      }

      if (board.isWalkable(newX, newY)) {
        this.x = newX;
        this.y = newY;
      }
    }
  }

  plantBomb() {
    if (this._bombs > 0) {
      this._bombs--;
      return new Bomb(this, this.x, this.y);
    }
    return null;
  }

  increaseBombRange() {
    this.bombRange++;
  }

  // TODO: this will probably be handled by the game engine
  // handleInput(input) {
  //   if (this.alive) {
  //     switch (input) {
  //       case "up":
  //       case "down":
  //       case "left":
  //       case "right":
  //         this.move(input);
  //         break;
  //       case "space":
  //         this.plantBomb();
  //         break;
  //     }
  //   }
  // }

  hitWithExplosion() {
    this._alive = false;
  }
}