const fnet = require('./fnet1')

console.log('forward: f()')

fnet.call()

console.log(fnet.dump())

console.log('backward: grad()')

fnet.grad()

console.log(fnet.dump())
