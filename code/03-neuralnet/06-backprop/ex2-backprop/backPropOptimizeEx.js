const nn = require('../nn')
const f = require('./fnet1')

nn.gradientDescendent(f, {x:2, y:1})
