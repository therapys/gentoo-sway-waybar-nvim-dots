/*
* abs - abstract.
*/

import { blockType } from "../../../util/enums/blocktype";
import { GameObject } from "../../gameobject";

export class Block extends GameObject {
    type: blockType;
    constructor(x: number, y: number, type: blockType) {
      let walkable = type === blockType.EMPTY;
      let destructible = type === blockType.DESCTRUCTIBLE;
      super(x, y, walkable, destructible);

      this.type = type;
    }

    destroy() {
      //Check if is indestructible.
      if(this.type === blockType.INDESTRUCTIBLE) return null;


    }
  }