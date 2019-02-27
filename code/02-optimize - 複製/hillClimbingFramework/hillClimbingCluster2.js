var hillClimbing = require("./hillClimbing");      // 引入爬山演算法類別
var solutionCluster2 = require("../solution/solutionCluster2");    // 引入排課系統

var hc = new hillClimbing();                       // 建立爬山演算法物件
// 執行爬山演算法 (從「解答(x,y,z)=(1,1,1)」開始尋找, 最多十萬代、失敗一千次就跳出。
var s = new solutionCluster2(solutionCluster2.init(2))
// hc.run(s, 10, 1000)
hc.run(s, 100000, 5000)
