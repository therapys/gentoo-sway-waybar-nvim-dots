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

// Block
class Block extends GameObject {
  constructor(x: number, y: number, destructible: boolean, walkable: boolean) {
    super(x, y, walkable, destructible);
  }
}

class DestructibleBlock extends Block {
  _powerUpSpawnChance: number;
  constructor(x: number, y: number) {
    super(x, y, true, false);
    this._powerUpSpawnChance = config.POWERUP_SPAWN_CHANCE;
  }

  destroy() {
    const randomValue = Math.random();
    if (randomValue < this._powerUpSpawnChance) {
      return new PowerUp(this.x, this.y);
    }
    return new EmptyBlock(this.x, this.y);
  }
}

class IndestructibleBlock extends Block {
  constructor(x: number, y: number) {
    super(x, y, false, false);
  }
}

class EmptyBlock extends Block {
  constructor(x: number, y: number) {
    super(x, y, false, true);
  }
}

export { GameBoard, Player };
