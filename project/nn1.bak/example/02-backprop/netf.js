const nn = require('../../nn')
const F = nn.netf
const net = new nn.Net()

let {x, y} = net.inputs({x:2, y:1})
let x2 = net.mul(x, x)
let y2 = net.mul(y, y)
let o  = net.add(x2, y2)
net.outputs({o})

net.watch({x,y,x2,y2,o})

module.exports = {
  f: F.f(net),
  grad: F.grad(net),
  net: net
}

// const fnet = module.exports = new nn.FNet(net, {x:x, y:y})
