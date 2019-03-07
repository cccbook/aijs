const pv = require('./pvector')

// 使用梯度下降法尋找函數最低點
let gradientDescendent = function (f, p0, step=0.01) {
  let p = pv.clone(p0)
  while (true) {
    console.log('p=', pv.str(p), 'f(p)=', f.call(p))
    let gp = f.grad(p) // 計算梯度 gp
    let norm = pv.norm(gp) // norm = 梯度的長度 (步伐大小)
    console.log('  gp=', gp, ' norm=', norm)
    if (norm < 0.00001) {  // 如果步伐已經很小了，那麼就停止吧！
      break
    }
    let gstep = pv.mul(gp, -1 * step) // gstep = 逆梯度方向的一小步
    p = pv.add(p, gstep) // 向逆梯度方向走一小步
  }
  return p // 傳回最低點！
}

module.exports = gradientDescendent
