const GAP = 0.01

let A  = {a:0.999 }
let aB = {a:0.001, b:0.993}
let AC = {a:0.991, c:0.995}

let index = {
  a:{A, AC},
  '-a':{aB},
}

let P = {A, aB, AC}

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

// ?? 考慮用動態規劃的方式！ 取 max, 類似 Viterbi Algorithm
// 差異：
// 1. Viterbi 假設是 Markov Chain, 但此處是一般機率 (非馬可夫)
// 2. Viterbi 有觀察序列，此處改用邏輯式集合 (最大為 2^n)，但可以用 monte carlo tree search 方式控制
//    r1 r2 ..... rn
// r1 
// r2 
// ...
function resolution(Vars) {
  let len = Vars.length
  let M = new Array(len)
  for (let i=0; i<len; i++) {
    M[i] = new Array(len)
    M[i][0] = P[Vars[i]]
    M[0][i] = P[Vars[i]]
  }
  for (let i=1; i<len; i++) {
    for (let j=1; j<len; j++) {
      M[i][j] = argmax(M[i][j-1], M[]
    }
  }
}

function doResolve(r1, r2) {
  console.log('resolve(%j,%j)=%j', r1, r2, resolve(r1, r2))
}

doResolve(A, aB)
doResolve(aB, AC)
