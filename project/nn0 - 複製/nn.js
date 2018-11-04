const nn = module.exports = {}

nn.step = 0.01

nn.clone = function (o) {
  return {...o}
}

// 函數 f 對變數 k 的偏微分: df / dk
nn.df = function (f, p, k) {
  let p1 = nn.clone(p)
  p1[k] -= nn.step
  return (f(p1) - f(p)) / nn.step
}

// 函數 f 在點 p 上的梯度
nn.grad = function (f, p) {
  let gp = {}
  for (let k in p) {
    gp[k] = nn.df(f, p, k)
  }
  return gp
}

nn.padd = function (p1, p2) {
  let p = {}
  for (let k in p1) {
    p[k] = p1[k] + p2[k]
  }
  return p
}

nn.psub = function (p1, p2) {
  return nn.padd(p1, nn.pneg(p2))
}

nn.pmul = function (p1, c) {
  let p = {}
  for (let k in p1) {
    p[k] = p1[k] * c
  }
  return p
}

nn.pneg = function (p) {
  return nn.pmul(p, -1)
}

nn.pnorm = function (p) {
  let norm = 0
  for (let k in p) {
    norm += p[k] * p[k]
  }
  return norm
}

nn.optimize = function (f, p0) {
  let p = nn.clone(p0)
  while (true) {
    console.log('p=', p)
    let gp = nn.grad(f, p)
    let norm = nn.pnorm(gp)
    console.log('  norm=', norm)
    if (norm < 0.00001) {
      break
    }
    let gstep = nn.pmul(gp, -1 * nn.step)
    p = nn.padd(p, gstep)
  }
  return p
}
