let h = 0.000001

function f(x,y) { return x*y }

// 函數 f 在點 (x,y) 上的梯度, 數值微分算法
function g1(f, x, y) {
  let gx = (f(x+h, y)-f(x,y))/h
  let gy = (f(x,y+h)-f(x,y))/h
  return [gx, gy]
}

// function f(x,y) { return x*y }

function dfx(x,y) { return y }

function dfy(x,y) { return x }

// 函數 f 在點 (x,y) 上的梯度, 自動微分算法
function g2(f, x, y) {
  return [dfx(x, y), dfy(x,y)]
}

console.log('g1(f,3,2) = ', g1(f, 3, 2))
console.log('g2(f,3,2) = ', g2(f, 3, 2))

