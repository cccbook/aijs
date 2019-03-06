const nn = require('../nn')
const f = require('./fnet1')

nn.optimize(f, {x:2, y:1})
