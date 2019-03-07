
const f = require('./fobj1')

console.log('df(f(x:1,y:1), x) = ', f.df({x:1, y:2}, 'x'))

console.log('grad(f(x:1,y:1))=', f.grad({x:1, y:2}))
