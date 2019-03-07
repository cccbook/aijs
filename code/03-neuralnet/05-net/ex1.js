const nn = require('./nn')
const net = new nn.Net()

let x = net.variable(2)
let y = net.variable(1)
let x2 = net.mul(x, x)
let y2 = net.mul(y, y)
let o  = net.add(x2, y2)

console.log('net.forward()=', net.forward())
o.g = 1

console.log('net.backwward()')

net.backward()
console.log('x=', x, 'y=', y, 'o=', o)
console.log('x2=', x2, 'y2=', y2)


