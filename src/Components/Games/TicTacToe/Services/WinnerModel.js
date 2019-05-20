export default class WinnerModel {
  get a() {
    return this._a;
  }

  get b() {
    return this._b;
  }

  get c() {
    return this._c;
  }

  get winner() {
    return this._winner;
  }

  hasSquare(i) {
    return ([this.a, this.b, this.c].includes(i));
  }

  constructor(a, b, c, winner) {
    this._a = a;
    this._b = b;
    this._c = c;
    this._winner = winner;
  }
};
