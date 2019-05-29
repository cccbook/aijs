let KNN = module.exports = {}

KNN.loadQA = function (QA) {
  KNN.QA = QA
}

KNN.kNearestNeighbors = function (item, k = 1, distance=KNN.distance) {
  var QA = KNN.QA
  var d = []
  for (var i = 0; i < QA.length; i++) {
    let qad = {dist: distance(item, QA[i].Q), qa: QA[i]}
    d.push(qad)
  }
  d.sort((o1, o2) => o1.dist - o2.dist)
  return d.slice(0, k)
}

KNN.countMap = function (kneighbors) {
  let aCount = {}
  for (let i=0; i<kneighbors.length; i++) {
    let A = kneighbors[i].qa.A
    aCount[A] = (aCount[A] == null) ? 1 : aCount[A] + 1
  }
  return aCount
}

KNN.maxLabel = function (countMap) {
  let label = null, max = 0
  for (let k in countMap) {
    let count = countMap[k]
    if (count > max) {
      label = k
      max = count
    }
  }
  return label
}

KNN.answer = function (item, k = 1, distance=KNN.distance) {
  let kneighbors = KNN.kNearestNeighbors(item, k, distance)
  console.log('kneighbors=%j', kneighbors)
  let countMap = KNN.countMap(kneighbors)
  console.log('countMap=%j', countMap)
  let label = KNN.maxLabel(countMap)
  console.log('label = ', label)
  return countMap
}

KNN.distance = function (a, b) {
  let len = a.length, d = 0
  for (let i=0; i<len; i++) {
    let di = a[i]-b[i]
    d += di * di
  }
  return d
}

return KNN
