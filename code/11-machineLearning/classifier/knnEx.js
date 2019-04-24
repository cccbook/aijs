var KNN = require('./knn')
var QA = [
  {Q: [0, 0], A: ['L']},
  {Q: [0, 1], A: ['L']},
  {Q: [1, 0], A: ['L']},
  {Q: [1, 1], A: ['L']},
  {Q: [8, 0], A: ['H']},
  {Q: [8, 1], A: ['H']},
  {Q: [9, 0], A: ['H']},
  {Q: [9, 1], A: ['H']}
]

KNN.loadQA(QA)

var distance = function (a, b) {
  let len = a.length, d = 0
  for (let i=0; i<len; i++) {
    let di = a[i]-b[i]
    d += di * di
  }
  return d
}

var k = 3
var neighbors = KNN.kNearestNeighbors([1, 2], distance, k)
console.log(JSON.stringify(neighbors))
