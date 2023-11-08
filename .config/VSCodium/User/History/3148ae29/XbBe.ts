import { Block } from "./abs";
import config from "../../../gameConfig";
import { PowerUp } from "../misc/powerup";

export class DestructibleBlock extends Block {
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