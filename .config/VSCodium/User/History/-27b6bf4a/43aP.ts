import { GameObject } from "../../gameobject";

export class PowerUp extends GameObject {
    _type: string;
    constructor(x: number, y: number) {
      super(x, y, true, true);
      this._type = "extraBomb";
    }
  
    // applyPowerUp(player) {
    //   // Apply to the player, do stuff
    // }
  }