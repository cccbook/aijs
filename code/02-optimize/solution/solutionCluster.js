var Solution = require("./solution");         // 引入解答類別
var R = require("j6")
// 問題：若有一個很平，sd 很大，那麼另一個移動或伸展可能暫時都沒什麼用，這時難道就應該結束了？

// rnorm(10,5,2)= [7.21, 6.52, 5.15, 7.01, 8.80, 2.20, 6.01, 5.98, 4.36, 5.86]
// rnorm(10,0,1)= [-0.45, -0.77, -0.47, -1.49, 0.72, 0.82, 0.84, -0.32, -0.82, 0.49]

// rnorm(20,5,2)= [7.92, 5.87, 4.28, 4.54, 5.42, 5.01, 7.51, 2.43, 4.38, 6.74, 5.88, 4.03, 4.29, 6.94, 5.46, 0.91, 6.49, 5.18, 3.72, 6.25]
// rnorm(20,0,1)= [1.15, -1.18, 0.27, -1.38, 0.29, -0.73, -1.62, -0.53, 1.25, -0.49, 0.96, 0.32, -0.90, -0.14, 0.21, -0.35, -0.91, -0.47, 1.37, -0.39]
// var d1 = [7.92, 5.87, 4.28, 4.54, 5.42, 5.01, 7.51, 2.43, 4.38, 6.74, 5.88, 4.03, 4.29, 6.94, 5.46, 0.91, 6.49, 5.18, 3.72, 6.25]
// var d2 = [1.15, -1.18, 0.27, -1.38, 0.29, -0.73, -1.62, -0.53, 1.25, -0.49, 0.96, 0.32, -0.90, -0.14, 0.21, -0.35, -0.91, -0.47, 1.37, -0.39]

var d1 = [7.21, 6.52, 5.15, 7.01, 8.80, 2.20, 6.01, 5.98, 4.36, 5.86]
var d2 = [-0.45, -0.77, -0.47, -1.49, 0.72, 0.82, 0.84, -0.32, -0.82, 0.49]
var samples = d1.concat(d2)

function randInt(a, b) {
  return a + Math.floor(Math.random()*(b-a))
}

function P(d, s) {
  return R.dnorm(s, d.mu, d.sd)
}

Solution.init = function (len) {
  let dists = []
  for (let i=0; i<len; i++) {
    dists[i] = { mu: randInt(-5, 5), sd: randInt(1, 5) }
  }
  return dists
}

function clone(src) {
  return JSON.parse(JSON.stringify(src));
}

Solution.prototype.neighbor = function() {    // 單變數解答的鄰居函數。
  // let dists = this.v.slice()
  let dists = clone(this.v)
  let step = this.step * (Math.random() - 0.5)
  let di = randInt(0, dists.length)
  let attr = randInt(0, 2)
  switch (attr) {
    case 0:
      dists[di].mu += step
      break
    case 1:
      dists[di].sd += step
      break
  }
  return new Solution(dists)
}

Solution.prototype.energy = function() {      // 能量函數
  let score = 0
  let dists = this.v
  for (let s of samples) {
    let pmax = 0.000001
    for (let d of dists) {
      let p = P(d, s)
      // console.log('P(%j,%d)=%d', d, s, p)
      if (p > pmax) {
        pmax = p
      }
    }
    let entropy = Math.log(pmax)
    score += entropy
    // console.log('pmax=%d entropy=%d', pmax, entropy)
  }
  return -1 * score
}

Solution.prototype.toString = function() {    // 將解答轉為字串，以供印出觀察。
  return "energy(" + JSON.stringify(this.v) + ")="+this.energy().toFixed(9);
}

module.exports = Solution                     // 將解答類別匯出。