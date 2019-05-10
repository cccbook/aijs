const h = 0.001

function df(f, x, n) {
  if (n===0) return f(x)
  return (df(f,x+h,n-1)-df(f,x,n-1))/h
}

function f(x) {
  return Math.exp(x)
  // return Math.sin(x)
}

for (let n=0; n<=15; n++) {
  console.log('df(f,1,%d)=', n, df(f, 1, n))
}
