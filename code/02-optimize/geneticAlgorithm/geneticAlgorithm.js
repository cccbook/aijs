var R = require('./rand')

class GeneticAlgorithm {
  constructor() {
    this.population = []    // 族群
    this.mutationRate = 0.1 // 突變率
  }

  run(size, maxGen) { // 遺傳演算法主程式
    this.population = this.newPopulation(size); // 產生初始族群
    for (let t = 0; t < maxGen; t++) { // 最多產生 maxGen 代
      console.log("============ generation", t, "===============")
      this.population = this.reproduction(this.population); // 產生下一代
      this.dump(); // 印出目前族群
    }
  }
  
  newPopulation(size) {
    var newPop=[];
    for (var i=0; i<size; i++) {
      var chromosome = this.randomChromosome(); // 隨機產生新染色體
      newPop[i] = { chromosome:chromosome, 
                 fitness:this.calcFitness(chromosome) };
    }
    newPop.sort(GeneticAlgorithm.fitnessCompare); // 對整個族群進行排序
    return newPop;
  }
  
  static fitnessCompare(c1,c2) { return c1.fitness - c2.fitness }
  
  // 輪盤選擇法: 隨機選擇一個個體 -- 落點在 i*i ~ (i+1)*(i+1) 之間都算是 i
  selection() {
    var n = this.population.length;
    var shoot  = R.randomInt(0, n*n/2);
    var select = Math.floor(Math.sqrt(shoot*2));
    return this.population[select];
  }
  
  // 產生下一代
  reproduction() {
    var newPop = []
    for (var i = 0; i < this.population.length; i++) {
      var parent1 = this.selection(); // 選取父親
      var parent2 = this.selection(); // 選取母親
      var chromosome = this.crossover(parent1, parent2); // 父母交配，產生小孩
      var prob = R.random(0,1);
      if (prob < this.mutationRate) // 有很小的機率
        chromosome = this.mutate(chromosome); // 小孩會突變
      newPop[i] = { chromosome:chromosome, fitness:this.calcFitness(chromosome) }; // 將小孩放進下一代族群裡
    }
    newPop.sort(GeneticAlgorithm.fitnessCompare); // 對新一代根據適應性（分數）進行排序
    return newPop;
  }
  
  dump() { // 印出一整代成員
    for (var i=0; i<this.population.length; i++) {
      console.log(i, this.population[i]);
    }
  }
}

module.exports = GeneticAlgorithm
