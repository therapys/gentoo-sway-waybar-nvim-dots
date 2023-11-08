/*
* abs - abstract.
*/

import { blockType } from "../../../util/enums/blocktype";
import { GameObject } from "../../gameobject";

export class Block extends GameObject {
    constructor(x: number, y: number, type: blockType) {
      let walkable = type === blockType.EMPTY;
      let destructible = type === blockType.DESCTRUCTIBLE;
      super(x, y, walkable, destructible);
    }

    destroy() {
      if(type === blockType.INDESTRUCTIBLE)
    }
  }