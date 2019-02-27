var Solution = require("./solution");         // 引入解答類別

class SolutionNumber extends Solution {
  neighbor() {    // 單變數解答的鄰居函數。
    var x = this.v, dx=this.step;               // x:解答 , dx : 移動步伐大小
    var xnew = (Math.random() > 0.5)?x+dx:x-dx; // 用亂數決定向左或向右移動
    return new SolutionNumber(xnew);                  // 建立新解答並傳回。
  }

  energy() {      // 能量函數
    var x = this.v;                             // x:解答
    return Math.abs(x*x-4);                     // 能量函數為 |x^2-4|
  }

  toString() {    // 將解答轉為字串，以供印出觀察。
    return "energy("+this.v.toFixed(3)+")="+this.energy().toFixed(3);
  }
}

module.exports = SolutionNumber;                    // 將解答類別匯出。