const fnet = require('./fnet')
fnet.f()

console.log(fnet.net.dump())

fnet.grad()

console.log(fnet.net.dump())
