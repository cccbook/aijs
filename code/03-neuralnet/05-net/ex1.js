const nn = require('./nn')
const net = new nn.Net()

let x = net.variable(1)
let y = net.variable(3)
let x2 = net.mul(x, x)
let y2 = net.mul(y, y)
let o  = net.add(x2, y2)

console.log('net.forward()=', net.forward())
o.g = 0.1
// o.g = 1

console.log('net.backwward()')

net.backward()
console.log('x=', x, 'y=', y, 'o=', o)
console.log('do/dx = x.g/o.g = ', x.g/o.g, 'do/dy = y.g/o.g=', y.g/o.g)
console.log('x2=', x2, 'y2=', y2)

/* 說明： x.g 的意義

x.g = do/dx         o.g = do/do    */
