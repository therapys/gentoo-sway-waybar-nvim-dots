import config from "./gameConfig.js";
import { GameObject } from "./class/gameobject.js";


//PLAYER
class Player extends GameObject {
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

//BOMB
class Bomb extends GameObject {
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
