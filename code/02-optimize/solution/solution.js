class Solution { // 解答的物件模版 (類別)
  constructor(v) {
    this.v = v                // 參數 v 為解答的資料結構
  }

  // 以下兩個函數至少需要覆蓋掉一個，否則會無窮遞迴
  height() { // 爬山演算法的高度函數
    return -1*this.energy()               // 高度 = -1 * 能量
  }

  energy() { // 尋找最低點的能量函數
    return -1*this.height()               // 能量 = -1 * 高度
  }
}

Solution.prototype.step = 0.01          // 每一小步預設走的距離

module.exports = Solution   // 將解答類別匯出。