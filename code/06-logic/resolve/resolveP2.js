const GAP = 0.01

let A  = {a:0.999 }
let aB = {a:0.001, b:0.993}
let AC = {a:0.991, c:0.995}

let p = {
  a:{A, AC},
  '-a':{aB},
}

let d = {A, aB, AC}

function unify(r1, r2, k) {
  if (r1[k] == null || r2[k] == null) return
  if ((r1[k] > 1-GAP && r2[k] < GAP) ||  (r1[k] < GAP && r2[k] > 1-GAP)) {
    let r = Object.assign({}, r1, r2)
    delete r[k]
    return r
  }
}

function resolve(r1, r2) {
  let r = []
  for (let k in r1) {
    let r0 = unify(r1, r2, k)
    if (r0 != null) r.push(r0)
  }
  return r;
}

function resolution() {
  // 考慮用動態規劃的方式！ 取 max, 類似 Viterbi Algorithm
}


function doResolve(r1, r2) {
  console.log('resolve(%j,%j)=%j', r1, r2, resolve(r1, r2))
}

doResolve(A, aB)
doResolve(aB, AC)
