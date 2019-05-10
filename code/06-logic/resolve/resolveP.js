const GAP = 0.01

let r1 = {a:0.999 }
let r2 = {a:0.001, b:0.993}
let r3 = {a:0.991, c:0.995}

function unify(r1, r2, x) {
  let r = Object.assign({}, r1, r2)
  delete r[x]
  return r
}

function resolve(r1, r2) {
  let r = []
  for (let k in r1) {
    if (r2[k] == null) continue
    if (r1[k] > 1-GAP && r2[k] < GAP) r.push(unify(r1, r2, k))
    if (r1[k] < GAP && r2[k] > 1-GAP) r.push(unify(r1, r2, k))
  }
  return r;
}


function doResolve(r1, r2) {
  console.log('resolve(%j,%j)=%j', r1, r2, resolve(r1, r2))
}

doResolve(r1, r2)
doResolve(r2, r3)
