const F = module.exports = {}

F.f = function (net) {
  return function (p) {
    F.setValues(net, p)
    let o = net.forward()
    return o.v
  }
}

F.grad = function (net) {
  return function (f, p) {
    F.f(p)
    net.backward()
    return F.getGrads(net, p)
  }
}

F.setValues = function (net, p) {
  for (let k in p) {
    net.inputs[k].v = p[k]
  }
}

F.getGrads = function (net, p) {
  let grads = {}
  for (let k in p) {
    grads[k] = net.inputs[k].g
  }
  return grads
}
