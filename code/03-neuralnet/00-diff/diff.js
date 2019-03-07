function f(x) {
  return x*x
}

let dx = 0.001

function diff(f, x) {
  let df = f(x+dx)-f(x)
  return df/dx
}

console.log('diff(f,2)=', diff(f, 2))

