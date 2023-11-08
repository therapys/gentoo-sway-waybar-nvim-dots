/*
* abs - abstract.
*/

import { blockType } from "../../../util/enums/blocktype";
import { GameObject } from "../../gameobject";

export class Block extends GameObject {
    constructor(x: number, y: number, type: blockType) {
      super(x, y, walkable, destructible);
    }
  }