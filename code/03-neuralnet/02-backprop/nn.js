// const G = require('./lib/grad')
const nn = module.exports = {
  Node: require('./lib/node'),
  Gate: require('./lib/gate'),
  Net: require('./lib/net'),
}
const pv = nn.pv = require('./lib/pvector')
const FNet = nn.FNet = require('./lib/fnet')

nn.step = 0.01

// 函數 f 對變數 k 的偏微分: df(p) / dk
nn.df = function (f, p, k, h=nn.step) {
  let p1 = pv.clone(p)
  p1[k] += h
  return (f(p1) - f(p)) / h
}

// 函數 f 在點 p 上的梯度	∇f(p)
nn.fgrad = function (f, p) {
  let gp = {}
  for (let k in p) {
    gp[k] = nn.df(f, p, k) // 對變數 k 取偏導數後，放入梯度向量 gp 中
  }
  return gp
}

nn.call = function (f, p) {
  if (f instanceof Function) {
    return f(p)
  } else if (f instanceof FNet) {
    return f.f(p)
  } else {
    throw Error('nn.call: f should be in {Function, FNet}')
  }
}

nn.grad = function (f, p) {
  if (f instanceof Function) {
    return nn.fgrad(f, p)
  } else if (f instanceof FNet) {
    return f.grad(p)
  } else {
    throw Error('nn.grad: f should be in {Function, FNet}')
  }
}

// 使用梯度下降法尋找函數最低點
nn.gradientDescendent = function (f, p0) {
  let p = pv.clone(p0)
  while (true) {
    console.log('p=', pv.str(p), 'f(p)=', nn.call(f, p))
    let gp = nn.grad(f, p) // 計算梯度 gp
    console.log('  gp=', gp)
    // break;
    let norm = pv.norm(gp) // norm = 梯度的長度 (步伐大小)
    if (norm < 0.00001) {  // 如果步伐已經很小了，那麼就停止吧！
      break
    }
    let gstep = pv.mul(gp, -1 * nn.step) // gstep = 逆梯度方向的一小步
    p = pv.add(p, gstep) // 向 gstep 方向走一小步
  }
  return p // 傳回最低點！
}

nn.optimize = nn.gd = nn.gradientDescendent
