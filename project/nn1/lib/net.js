const F = require('./function')
const Node = require('./node')
const Gate = require('./gate')

module.exports = class Net {

  constructor () {
    this.gates = []
  }

  variable (v, g) {
    return new Node(v, g)
  }

  op (x, y, f, gfx, gfy) {
    let o = new Node()
    let g = new Gate(o, x, y, f, gfx, gfy)
    this.gates.push(g)
    this.o = o
    return o
  }

  add (x, y) { return this.op(x, y, F.add, F.gadd) }

  mul (x, y) { return this.op(x, y, F.mul, F.gmul, F.gmuly) }

  forward() {
    for (let gate of this.gates) {
      gate.forward()
    }
    return this.o
  }

  backward() {
    this.o.g = 1
    for (let i=this.gates.length-1; i>=0; i--) {
      let gate = this.gates[i]
      gate.backward()
    }
  }

  watch (nodes) {
    this.nodes = nodes
  }

  dump() {
    return this.nodes
  }
}



