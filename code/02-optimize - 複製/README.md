# 爬山演算法 -- 最簡單的優化算法



## 爬山演算法

```js
Algorithm HillClimbing(f, x)
  x = 隨意設定一個解
  while (x 有鄰居 x1 比 x 更高)
    x = x1
  end
  return x
end
```

## 實作：以爬山演算法尋找函數最高點

```
$ node .\hillClimbingSimple.js
f(0.0000)=-5.0000
f(-0.0100)=-4.9701
f(-0.0200)=-4.9404
f(-0.0300)=-4.9109
f(-0.0400)=-4.8816
f(-0.0500)=-4.8525
f(-0.0600)=-4.8236
f(-0.0700)=-4.7949
f(-0.0800)=-4.7664
f(-0.0900)=-4.7381
...
f(-1.4600)=-2.7516
f(-1.4700)=-2.7509
f(-1.4800)=-2.7504
f(-1.4900)=-2.7501
f(-1.5000)=-2.7500
```

## 雙變數的情況

```
$ node .\hillClimbing2.js
f(0.0000, 0.0000)=8.0000
f(0.0100, 0.0000)=8.0199
f(0.0200, 0.0000)=8.0396
...
f(0.9900, 0.0000)=8.9999
f(1.0000, 0.0000)=9.0000
f(1.0000, -0.0100)=9.0199
f(1.0000, -0.0200)=9.0396
...
f(1.0000, -0.9900)=9.9999
f(1.0000, -1.0000)=10.0000
```

補充： hillClimbing2.js 的作法會有盲點，因為只測前後左右，但若前後左右都比較低，只有《右前方》才能往上爬，這樣的爬山演算法將無法向右前方邁進。

如果改用隨機取 dx, dy ，那麼就可以解決這個問題！

於是我們有了改良版的 hillClimbing2r.js ：

```js
function f (x, y) { return -1 * ( x*x -2*x + y*y +2*y - 8 ) }

var h = 0.01

function hillClimbing (f, x, y) {
  let failCount = 0
  while (failCount < 100000) {
    let fxy = f(x,y)
    let dx = (Math.random()-0.5) * h
    let dy = (Math.random()-0.5) * h
    if (f(x + dx, y + dy) >= fxy) {
      x = x + dx
      y = y + dy
      console.log('f(%s, %s)=%s', x.toFixed(4), y.toFixed(4), fxy.toFixed(4))
    } else {
      failCount ++;
    }
  }
  return {x:x, y:y, fxy: f(x,y)}
}

hillClimbing(f, 0.0, 0.0)

```

執行結果如下:

```
PS D:\ccc\book\aijs\code\02-optimize> node .\hillClimbing2r.js
f(0.0019, -0.0028)=8.0000
f(0.0056, -0.0058)=8.0093
...
f(0.9999, -1.0001)=10.0000
f(1.0000, -1.0000)=10.0000
f(1.0000, -1.0000)=10.0000
```
