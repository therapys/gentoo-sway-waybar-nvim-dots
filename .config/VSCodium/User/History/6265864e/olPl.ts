import { GameObject } from "./gameobject";
import config from "../gameConfig";
import { Bomb } from "./impl/entity/bomb";
import { PowerUp } from "./impl/misc/powerup";

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
  
    isWalkable(x: number, y: number) {
      return this._grid[x][y].walkable;
    }
  
    placeBomb(player: Player, x: number, y: number) {
      if (this.isWalkable(x, y)) {
        this._grid[x][y] = new Bomb(player, x, y);
      }
    }
  
    detonateBomb(bomb: Bomb) {
      for (let dx = -bomb.range; dx <= bomb.range; dx++) {
        for (let dy = -bomb.range; dy <= bomb.range; dy++) {
          const newX = bomb.x + dx;
          const newY = bomb.y + dy;
  
          if (this.isValidPosition(newX, newY)) {
            const object = this._grid[newX][newY];
  
            if (object.destructible) {
              this._grid[newX][newY] = new EmptyBlock(newX, newY); // destroy block, replace with empty space
            }
          }
        }
      }
    }
  
    isValidPosition(x: number, y: number) {
      return x >= 0 && x < this._rows && y >= 0 && y < this._cols;
    }
}