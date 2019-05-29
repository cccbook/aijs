const D = require('./dict')
let M = module.exports = { D, mtMap:D.c2e }

var wi = 0;
var words = [], mtWords=[];
var isDebug = true

function debug(msg) {
  if (isDebug) console.log(msg)
}

function print(s) {
  if (isDebug) process.stdout.write(s)
}

function isTag(tag) {
  let w = words[wi]
  let wtag = D.w2t[w]
  // console.log('isTag:wi=%d w=%s tag=%s wtag=%s', wi, w, tag, wtag)
  return (wtag == tag)
}

function wordMt(w) {
  var wt = M.mtMap[w];
  if (typeof wt === 'undefined')
    return w;
  else
    return wt;
}

function next(tag) {
  var w = words[wi];
  let wtag = D.w2t[w]
  print(w+':'+tag+" ");
  if (wtag === tag) {
    mtWords.push(wordMt(w));
    wi++;
    return w;
  } else {
    console.log('\n==> 錯誤: ' + w + ' 詞性為 '+ wtag +' 不等於 ' + tag);
    throw Error("Error !");    
  }
}

function T() {
  while (wi < words.length) {
    S();
  }
}

// S = Q? NP* (VP)* . 
function S() {
  if (isTag("Q"))
    next("Q");

  while (isTag("n") || isTag("N")) 
    NP();

  while (isTag("V") || isTag("v")) 
    VP();

  next(".");
  console.log('');
}

// VP = VP (c VP)* | (v* V+ v*)+ NP*
function VP() {
  while (isTag("v") || isTag("V")) {
    while (isTag("v")) next("v");
    do { next("V") } while (isTag("V"));
    while (isTag("v")) next("v");
  }
  while (isTag("n") || isTag("N"))
    NP();
}

// NP = NP (c NP)* | (n* N+)
function NP() {
  while (isTag("n")) next("n");
  do { next("N") } while (isTag("N"));
  // while (isTag("n")) next("n");

  if (isTag("c")) {
    next("c");
    NP();
  }
}

M.mt = function (s, t, sentence) {
  M.mtMap = D[s+'2'+t]
  try {
    words=sentence.split(" ");
    wi = 0, mtWords=[];
    debug("======= "+s+" =============");
    debug(words.join(" "));
    debug("======= parse =============");
    T(words);
    debug("======= "+t+ " =============");
    debug(mtWords.join(" "));  
    return mtWords
  } catch {
    debug("==> 這語句不合法！");
    return
  }
}


