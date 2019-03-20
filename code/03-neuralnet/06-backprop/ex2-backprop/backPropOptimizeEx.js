const nn = require('../nn')
// const f = require('./fnet1')
const f = require('./fnet2')

nn.gradientDescendent(f, {x:1, y:2})
