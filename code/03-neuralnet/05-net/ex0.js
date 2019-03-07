const nn = require('./nn')
const net = new nn.Net()

let x = net.variable(1)
let y = net.variable(2)
let o  = net.mul(x, y)

console.log('net.forward()=', net.forward())
o.g = 1

console.log('net.backwward()')

net.backward()
console.log('x=', x, 'y=', y, 'o=', o)
console.log('do/dx = x.g/o.g = ', x.g/o.g, 'do/dy = y.g/o.g=', y.g/o.g)
