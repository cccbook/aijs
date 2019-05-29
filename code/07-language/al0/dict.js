var tagMap={
  N : ["小明", "小華", "小莉", "大雄", "爸爸", "魚", "天", "家", "風", "日", "旅人", "人", "衣", "者",
       "他", "你", "我", 
       "蘋果", "橘子", "柳丁", "番茄"],
  V : ["有", "給", "剩", "吃", "去", "捕", "回", "至", "爭", "勝", "吹", "抓", "緊", "敗", "勝", "照", "脫", "狂", "暖"],
  v : ["還", "了", "一起", "不"],
  c : ["又", "和", "且", "或", "與"],
  n : ["幾", "這", "那", "5", "3", "個", "隻", "條", "黑", "大", "的"],
  Q : ["請問", "為甚麼"],
  "." : ["，", "？", "。"]
}

var c2eMap = {
  "小明":"ShaoMin", "小華":"ShaoHua", "小莉":"ShaoLi", "大雄":"DaShon", 
  "他":"he", "你":"you", "我":"me", 
  "蘋果":"apple", "橘子":"tangerine", "柳丁":"orange", "番茄":"tomato",
  "有":"have", "給":"give", "剩":"own", "吃":"eat", "一起":"together",
  "還":"still", "又":"again", "和":"and", "了":"_le", "且":"and2", "或":"or", "與":"and3",
  "個":"_ge", "隻":"_ji", "條":"_tio", "的":"_de", 
  "幾":"_gi", "這":"this", "那":"that", 
  "黑":"black", "大":"big", "天":"sky", "風":"wind", "爸爸":"Papa", "去":"go", "捕":"hunt", "魚":"fish", "為甚麼":"why", "不":"not", "回":"back", "家":"home",
  "風":"wind", "日":"sun", "旅人":"travler", "人":"people", "衣":"cloth", "者":"guy",
  "至":"come", "爭":"argue", "勝":"win", "吹":"blow", "抓":"catch", "緊":"tighten", "敗":"lose", "勝":"win", "照":"shine", "脫":"take_off", "狂":"wild", "暖":"warm" , 
  "請問":"Q", "誰":"Who", "甚麼":"What", "何時":"When", "如何":"How", "哪裡":"Where", "？":"？"
}

function revTagMap(tagMap) {
  let rTagMap = {}
  for (let tag in tagMap) {
    let words = tagMap[tag]
    for (let i in words) {
      let w = words[i]
      rTagMap[w] = tag
    }
  }
  console.log('rTagMap=', rTagMap)
  return rTagMap
}

var w2tagMap = revTagMap(tagMap)

function revMap(map) {
  let rMap = {}
  for (let k in map) {
    let v = map[k]
    rMap[v] = k
    let kTag = w2tagMap[k]
    if (kTag != null) w2tagMap[v] = kTag
  }
  return rMap;
}

var e2cMap = revMap(c2eMap)

module.exports = { w2t:w2tagMap, c2e:c2eMap, e2c:e2cMap }
