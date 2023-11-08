import { GameObject } from "./gameobject";
import config from "../gameConfig";

export class GameBoard {
    _rows: number;
    _cols: number;
    _grid: GameObject[][];
    _bombs: Bomb[];
    constructor(useDefaultBoard = true) {
      this._rows = config.ROWS;
      this._cols = config.COLUMNS;
      this._grid = [];
      this._bombs = [];
      this._grid = this.generateBoard(useDefaultBoard);
    }
  
    generateBoard(useDefaultBoard: boolean) {
      const grid: GameObject[][] = [];
  
      let template = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ];
  
      if (!useDefaultBoard) {
        for (let i = 0; i < this._rows; i++) {
          template[i] = [];
          for (let j = 0; j < this._cols; j++) {
            const randomValue = Math.random();
            if (randomValue < 0.4) {
              template[i][j] = 1;
            } else if (randomValue < 0.6) {
              template[i][j] = 2;
            } else {
              template[i][j] = 0;
            }
          }
        }
      }
  
      for (let i = 0; i < this._rows; i++) {
        grid[i] = [];
        for (let j = 0; j < this._cols; j++) {
          const cellValue = template[i][j];
          if (cellValue === 1) {
            grid[i][j] = new IndestructibleBlock(i, j);
          } else if (cellValue === 2) {
            grid[i][j] = new DestructibleBlock(i, j);
          } else {
            grid[i][j] = new EmptyBlock(i, j);
          }
        }
      }
  
      return grid;
}