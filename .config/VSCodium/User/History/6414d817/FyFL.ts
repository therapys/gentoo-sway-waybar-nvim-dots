import { GameObject } from "../../gameobject";

export class Block extends GameObject {
    constructor(x: number, y: number, destructible: boolean, walkable: boolean) {
      super(x, y, walkable, destructible);
    }
  }