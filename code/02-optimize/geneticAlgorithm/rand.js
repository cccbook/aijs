function random(a,b) { // 取得 a 到 b 之間的一個浮點亂數
  return a+Math.random()*(b-a);
}

function randomInt(a,b) { // 取得 a 到 b 之間的一個整數亂數
  return Math.floor(random(a,b));
}

function randomChoose(array) { // 隨機取得 array 陣列的一個元素
  return array[randomInt(0, array.length)];
}

module.exports = { random, randomInt, randomChoose }
