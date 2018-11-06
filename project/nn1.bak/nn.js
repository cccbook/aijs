const G = require('./lib/grad')

const nn = module.exports = Object.assign(G, {
  pv: require('./lib/pvector'),
  Node: require('./lib/node'),
  Gate: require('./lib/gate'),
  Net: require('./lib/net'),
  netf: require('./lib/netf')
})

nn.optimize = nn.gd = nn.gradientDescendent
