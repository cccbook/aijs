var KNN = require('./knn')
var QA = [
  {Q: [0, 0], A: ['L']},
  {Q: [0, 1], A: ['L']},
  {Q: [1, 0], A: ['L']},
  {Q: [1, 1], A: ['H']},
  {Q: [8, 0], A: ['H']},
  {Q: [8, 1], A: ['H']},
  {Q: [9, 0], A: ['H']},
  {Q: [9, 1], A: ['H']}
]

KNN.loadQA(QA)
var k = 3
KNN.answer([1,2], 3)

