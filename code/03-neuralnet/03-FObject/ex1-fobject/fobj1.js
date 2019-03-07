let FObject = require('../lib/fobj')

let f = new FObject(function (p) {
  let {x,y} = p
  return x*x+y*y
})

module.exports = f
