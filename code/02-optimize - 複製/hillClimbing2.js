function f (x, y) { return -1 * ( x*x -2*x + y*y +2*y - 8 ) }

var h = 0.01

function hillClimbing (f, x, y) {
  while (true) {
    let fxy = f(x,y)
    console.log('f(%s, %s)=%s', x.toFixed(4), y.toFixed(4), fxy.toFixed(4))
    if (f(x + h, y) >= fxy) {
      x = x + h
    } else if (f(x - h, y) >= fxy) {
      x = x - h
    } else if (f(x, y+h) >= fxy) {
      y = y + h
    } else if (f(x, y-h) >= fxy) {
      y = y - h
    } else {
      break
    }
  }
}

hillClimbing(f, 0.0, 0.0)
