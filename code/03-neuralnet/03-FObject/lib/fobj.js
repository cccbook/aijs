const pv = require('./pvector')

class FObject {
  constructor(f) { this.f = f }

  call(p) { return this.f(p) }

  // 函數 f 對變數 k 的偏微分: df(p) / dk
  df (p, k, h=0.01) {
    let f = this.f
    let p1 = pv.clone(p)
    p1[k] += h
    return (f(p1) - f(p)) / h
  }

  // 函數 f 在點 p 上的梯度	∇f(p)
  grad (p) {
    let gp = {}
    for (let k in p) {
      gp[k] = this.df(p, k) // 對變數 k 取偏導數後，放入梯度向量 gp 中
    }
    return gp
  }
}

module.exports = FObject