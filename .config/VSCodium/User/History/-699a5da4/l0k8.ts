import { Block } from "./abs";

export class EmptyBlock extends Block {
    constructor(x: number, y: number) {
      super(x, y, false, true);
    }
  }