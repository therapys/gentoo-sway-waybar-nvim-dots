/*
* abs - abstract.
*/

import config from "../../../gameConfig";
import { blockType } from "../../../util/enums/blocktype";
import { GameObject } from "../../gameobject";
import { PowerUp } from "../misc/powerup";
import { EmptyBlock } from "./empty";

export class Block extends GameObject {
    type: blockType;
    _powerUpSpawnChance: number;
    constructor(x: number, y: number, type: blockType) {
      let destructible = type === blockType.DESCTRUCTIBLE;
      super(x, y, false, destructible);

      this.type = type;
      this._powerUpSpawnChance = config.POWERUP_SPAWN_CHANCE;
    }

    destroy() {
      //Check if is indestructible.
      if(this.type === blockType.INDESTRUCTIBLE) return null;
      
      if(Math.random() < this._powerUpSpawnChance) {
        return new PowerUp(this.x, this.y);
      } 
      
      return new EmptyBlock(this.x, this.y);
    
    }
  }