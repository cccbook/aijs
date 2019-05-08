/*
function f(n) {
  if (n === 1) return 1
  return n * f(n-1)
}
*/

function f(n) {
  if (n === 1) return 1
  console.log('n=', n)
  let fn = n * f(n-1)
  console.log('fn=', fn)
  return fn
}

console.log('f(5)=', f(5))
