var Solution = require("./solution");         // 引入解答類別

var courses = [
  {teacher: '  ', name:'　　', hours: -1},
  {teacher: '甲', name:'機率', hours: 2},
  {teacher: '甲', name:'線代', hours: 3},
  {teacher: '甲', name:'離散', hours: 3},
  {teacher: '乙', name:'視窗', hours: 3},
  {teacher: '乙', name:'科學', hours: 3},
  {teacher: '乙', name:'系統', hours: 3},
  {teacher: '乙', name:'計概', hours: 3},
  {teacher: '丙', name:'軟工', hours: 3},
  {teacher: '丙', name:'行動', hours: 3},
  {teacher: '丙', name:'網路', hours: 3},
  {teacher: '丁', name:'媒體', hours: 3},
  {teacher: '丁', name:'工數', hours: 3},
  {teacher: '丁', name:'動畫', hours: 3},
  {teacher: '丁', name:'電子', hours: 4},
  {teacher: '丁', name:'嵌入', hours: 3},
  {teacher: '戊', name:'網站', hours: 3},
  {teacher: '戊', name:'網頁', hours: 3},
  {teacher: '戊', name:'演算', hours: 3},
  {teacher: '戊', name:'結構', hours: 3},
  {teacher: '戊', name:'智慧', hours: 3},
]

var teachers = ['甲', '乙', '丙', '丁', '戊']
var rooms = ['A', 'B']
var slots = [
  'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17',
  'A21', 'A22', 'A23', 'A24', 'A25', 'A26', 'A27',
  'A31', 'A32', 'A33', 'A34', 'A35', 'A36', 'A37',
  'A41', 'A42', 'A43', 'A44', 'A45', 'A46', 'A47',
  'A51', 'A52', 'A53', 'A54', 'A55', 'A56', 'A57',
  'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17',
  'B21', 'B22', 'B23', 'B24', 'B25', 'B26', 'B27',
  'B31', 'B32', 'B33', 'B34', 'B35', 'B36', 'B37',
  'B41', 'B42', 'B43', 'B44', 'B45', 'B46', 'B47',
  'B51', 'B52', 'B53', 'B54', 'B55', 'B56', 'B57',
]
var cols = 7

function randInt(a, b) {
  return a + Math.floor(Math.random()*(b-a))
}

function randSlot() {
  return randInt(0, slots.length)
}

function randCourse() {
  return randInt(0, courses.length)
}

Solution.init = function () {
  let fills = []
  for (let i=0; i<slots.length; i++) {
    fills[i] = randCourse()
  }
  return fills
}

Solution.prototype.neighbor = function() {    // 單變數解答的鄰居函數。
  let fills = this.v.slice(0)
  if (randInt(0, 2) === 0) { // 任選一個改變 
    let i = randSlot()
    fills[i] = randCourse()
  } else { // 任選兩個交換
    let i = randSlot()
    let j = randSlot()
    let t = fills[i]
    fills[i] = fills[j]
    fills[j] = t
  }
  return new Solution(fills)                  // 建立新解答並傳回。
}

Solution.prototype.energy = function() {      // 能量函數
  let courseCounts = new Array(courses.length)
  let fills = this.v
  let score = 0
  courseCounts.fill(0, 0, courses.length)
  for (let si=0; si<slots.length; si++) {
    courseCounts[fills[si]] ++
    if (si < slots.length-1 && fills[si] == fills[si+1] /*連續上課:好*/ && si%7 != 6 /*隔天:不好*/ && si%7 != 3 /*跨越中午:不好*/)
      score -= 0.1
    if (si % 7 == 0 && fills[si] != 0) /* 早上 8:00 不好*/
      score += 0.1
  }
  for (let ci=0; ci<courses.length; ci++) {
    if (courses[ci].hours >= 0)
      score = score + Math.abs(courseCounts[ci]-courses[ci].hours)
  }
  return score
}

Solution.prototype.toString = function() {    // 將解答轉為字串，以供印出觀察。
  let outs = [], fills = this.v
  for (let i=0; i<slots.length; i++) {
    let c = courses[fills[i]]
    // console.log('i=%d fills[i]=%d c=%j', i, fills[i], c)
    if (i%7==0) outs.push('\n')
    outs.push(slots[i] + ':' + c.name)
  }
  return 'score=' + this.energy().toFixed(3) + outs.join(' ') + '\n\n'
}

module.exports = Solution;                    // 將解答類別匯出。

/*
var courses = [
  {teacher: '  ', name:'　 ',  hours: -1},
  {teacher: '甲', name:'甲1', hours: 3},
  {teacher: '甲', name:'甲2', hours: 3},
  {teacher: '甲', name:'甲3', hours: 3},
  {teacher: '乙', name:'乙1', hours: 3},
  {teacher: '乙', name:'乙2', hours: 3},
  {teacher: '乙', name:'乙3', hours: 3},
  {teacher: '乙', name:'乙4', hours: 3},
  {teacher: '丙', name:'丙1', hours: 3},
  {teacher: '丙', name:'丙2', hours: 3},
  {teacher: '丙', name:'丙3', hours: 3},
  {teacher: '丁', name:'丁1', hours: 3},
  {teacher: '丁', name:'丁2', hours: 3},
  {teacher: '丁', name:'丁3', hours: 3},
  {teacher: '丁', name:'丁4', hours: 2},
  {teacher: '丁', name:'丁5', hours: 2},
  {teacher: '戊', name:'戊1', hours: 3},
  {teacher: '戊', name:'戊2', hours: 3},
  {teacher: '戊', name:'戊3', hours: 3},
  {teacher: '戊', name:'戊4', hours: 5},
  {teacher: '戊', name:'戊5', hours: 4},
]
*/