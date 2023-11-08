/*
* abs - abstract.
*/

import { blockType } from "../../../util/enums/blocktype";
import { GameObject } from "../../gameobject";

export class Block extends GameObject {
    constructor(x: number, y: number, type: blockType) {
      let walkable = blockType === blockType.EMPTY
      super(x, y, walkable, destructible);
    }
  }