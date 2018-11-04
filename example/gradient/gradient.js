const step = 0.01

function clone (o) {
  return {...o}
}

function f (p) {
  let x = p.x, y = p.y
  return -1 * (x * x + y * y)
}

// 函數 f 對變數 k 的偏微分: df / dk
function df (f, p, k) {
  let p1 = clone(p)
  p1[k] -= step
  return (f(p1) - f(p)) / step
}

// 函數 f 在點 p 上的梯度
function grad(f, p) {
  let gp = {}
  for (let k in p) {
    gp[k] = df(f, p, k)
  }
  return gp
}

console.log('df(f(x:1,y:1), x) = ', df(f, {x:1, y:1}, 'x'))

console.log('grad(f)=', grad(f, {x:1, y:1}))
