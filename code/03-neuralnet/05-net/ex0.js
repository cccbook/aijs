const nn = require('./nn')
const net = new nn.Net()

let x = net.variable(1)
let y = net.variable(2)
let o  = net.mul(x, y)

console.log('net.forward()=', net.forward())
console.log('net.backwward()')
net.backward()
console.log('x=', x, 'y=', y, 'o=', o)
console.log('gfx = x.g/o.g = ', x.g/o.g, 'gfy = y.g/o.g=', y.g/o.g)
