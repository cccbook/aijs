const nn = require('../nn')
const net = new nn.Net()
// f(x,y) = (x-3)^2 + (y-2)^2
let x = net.variable(2)
let y = net.variable(1)
let n3 = net.constant(-3)
let n2 = net.constant(-2)
let x_3 = net.add(x, n3)
let y_2 = net.add(y, n2)
let x2 = net.mul(x_3, x_3)
let y2 = net.mul(y_2, y_2)
let o  = net.add(x2, y2)

net.watch({x,y,x2,y2,o})

module.exports = new nn.FNet(net, {x:x, y:y})
