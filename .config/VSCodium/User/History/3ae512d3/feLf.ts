import config from "./gameConfig.js";
import { GameObject } from "./class/gameobject.js";

//EXPLOSION
// class Explosion {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   animateExplosion() {
//     // Animate boom, png here
//   }
//
//   destroyObjectsInPath() {
//     // Destroy stuff
//   }
// }

class PowerUp extends GameObject {
  _type: string;
  constructor(x: number, y: number) {
    super(x, y, true, true);
    this._type = "extraBomb";
  }

  // applyPowerUp(player) {
  //   // Apply to the player, do stuff
  // }
}

export { GameBoard, Player };
