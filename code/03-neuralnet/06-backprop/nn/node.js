class Node {}

class Variable extends Node {
  constructor(v = 0, g = 0) {
    super()
    this.v = v // 輸出值 (f(x))
    this.g = g // 梯度值 (偏微分)
  }
}

class Constant extends Node {
  constructor(v = 0) {
    super()
    this._v = v // 輸出值 (f(x))
  }

  get v() { return this._v; }
  set v(value) { }
  get g() { return 0; }
  set g(value) { }
}

module.exports = { Variable: Variable, Constant: Constant }

