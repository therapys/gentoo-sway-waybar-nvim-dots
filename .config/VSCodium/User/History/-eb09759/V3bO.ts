
export class GameObject {
    _x: number;
    _y: number;
    _walkable: boolean;
    _destructible: boolean;
    constructor(x: number, y: number, walkable: boolean, destructible: boolean) {
      this._x = x;
      this._y = y;
      this._walkable = walkable;
      this._destructible = destructible;
    }
  
    get x() {
      return this._x;
    }
  
    get y() {
      return this._y;
    }
  
    get walkable() {
      return this._walkable;
    }
  
    get destructible() {
      return this._destructible;
    }
  
    set x(value) {
      this._x = value;
    }
  
    set y(value) {
      this._y = value;
    }
}  