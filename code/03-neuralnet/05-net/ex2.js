// f(x,y) = (x-3)^2 + (y-2)^2
const nn = require('./nn')
const net = new nn.Net()

let x = net.variable(1)
let y = net.variable(3)
let x2 = net.mul(x, x)
let y2 = net.mul(y, y)
let o  = net.add(x2, y2)

console.log('net.forward()=', net.forward())
console.log('net.backward()')

net.backward()
console.log('x=', x, 'y=', y, 'o=', o)
console.log('gfx = x.g/o.g = ', x.g/o.g, 'gfy = y.g/o.g=', y.g/o.g)
console.log('x2=', x2, 'y2=', y2)

/* 說明： x.g 的意義

x.g = do/dx         o.g = do/do    */
