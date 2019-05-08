var GeneticAlgorithm = require('./geneticAlgorithm')
var R = require('./rand')

class KeyGA extends GeneticAlgorithm {
  randomChromosome() { // 隨機產生一個染色體 (一個 16 位元的 01 字串)
    var bits=[];
    for (var i=0; i<KeyGA.key.length; i++) {
      var bit = R.randomInt(0,2);
      bits.push(bit);
    }
    return bits.join('');
  }
  
  calcFitness(c) { // 分數是和 key 一致的位元個數
    var fitness=0;
    for (var i=0; i<KeyGA.key.length; i++) {
      fitness += (c[i]===KeyGA.key[i])?1:0;
    }
    return fitness;
  }
  
  crossover(p1,p2) {
    var cutIdx = R.randomInt(0, p1.chromosome.length);
    var head   = p1.chromosome.substr(0, cutIdx);
    var tail   = p2.chromosome.substr(cutIdx);
    return head + tail;
  }
  
  mutate(chromosome) { // 突變運算
    var i=R.randomInt(0, chromosome.length); // 選擇突變點
    var cMutate=chromosome.substr(0, i)+
            R.randomChoose(['0','1'])+ // 在突變點上隨機選取 0 或 1
            chromosome.substr(i+1);
    return cMutate; // 傳回突變後的染色體
  }
}

KeyGA.key = "1010101010101010"

// 執行遺傳演算法，企圖找到 key，最多執行一百代，每代族群都是一百人
let kga = new KeyGA()
kga.run(100, 20)
