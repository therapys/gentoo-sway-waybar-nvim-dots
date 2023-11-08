import { GameObject } from "../../gameobject";
import { Block } from "./abs";

export class EmptyBlock extends GameObject {
    constructor(x: number, y: number) {
      super(x, y, false, true);
    }
  }