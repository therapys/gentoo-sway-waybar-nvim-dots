import { Block } from "./abs";

export class IndestructibleBlock extends Block {
    constructor(x: number, y: number) {
      super(x, y, false, false);
    }
  }