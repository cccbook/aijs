module.exports = class Gate {
  constructor(o, x, y, f, gfx, gfy) {
    this.p = {o:o, x:x, y:y, f:f, gfx:gfx, gfy:gfy||gfx}
  }

  forward() {
    let {o, x, y, f} = this.p
    o.v = f(x.v, y.v)
  }

  backward() {
    let {o,x,y,gfx,gfy} = this.p
    x.g = gfx(o.v)
    y.g = gfy(o.v)
  }
}
