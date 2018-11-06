const netf = require('./netf')

netf.f({x:2, y:1})

console.log(netf.net.dump())

netf.grad()

console.log(netf.net.dump())
