var R = require("j6")

console.log("rnorm(20,5,2)=", R.rnorm(100, 5, 2).str())
console.log("rnorm(20,0,1)=", R.rnorm(100, 0, 1).str())
console.log("rnorm(20,-2,2)=", R.rnorm(100, -2, 2).str())
console.log("rnorm(20,3,1)=", R.rnorm(100, 3, 1).str())

