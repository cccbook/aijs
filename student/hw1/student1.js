function f (x) { return x*x*x*x - 10*x*x*x + 20*x*x +5*x +7 }

var dx = 0.01

function hillClimbing (f, x) {
  while (true) {
    //console.log('f(%s)=%s', x.toFixed(4), f(x).toFixed(4))
    if (f(x + dx) <= f(x)) {
      x = x + dx
    } else if (f(x - dx) <= f(x)) {
      x = x - dx
    } else {
      return x
    }
  }
}


var lx =0.0
for(var i =0 ;i<=10;i++){         //連續測試10次
    if(Math.floor(Math.random()*2)){            
        x =hillClimbing(f, 10*Math.random())       // 隨機取10>x>0
    }else{
        x =hillClimbing(f, -10*Math.random())       // 隨機取0>x>-10
    }
    if(f(x) <= f(lx))
    lx = x
}
console.log('f(%s)=%s',lx.toFixed(4), f(lx).toFixed(4))