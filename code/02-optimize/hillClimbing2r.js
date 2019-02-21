function f (x, y) { return -1 * ( x*x -2*x + y*y +2*y - 8 ) }

var h = 0.01

function hillClimbing (f, x, y) {
  let failCount = 0
  while (failCount < 100000) {
    let fxy = f(x,y)
    let dx = (Math.random()-0.5) * h
    let dy = (Math.random()-0.5) * h
    if (f(x + dx, y + dy) >= fxy) {
      x = x + dx
      y = y + dy
      console.log('f(%s, %s)=%s', x.toFixed(4), y.toFixed(4), fxy.toFixed(4))
    } else {
      failCount ++;
    }
  }
  return {x:x, y:y, fxy: f(x,y)}
}

hillClimbing(f, 0.0, 0.0)
