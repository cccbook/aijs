class Matrix {
  constructor(mat) {
    var m = [];
    for (var i=0; i<mat.length; i++) {
      m[i] = mat[i].slice(0);
    }
    this.m = m;
  }

  static create(rows, cols, value) {
    var m = [];
    for (var i=0; i<rows; i++) {
      m[i] = [];
      for (var j=0; j<cols; j++)
        m[i][j] = value;
    }
    return new Matrix(m);
  }

  rows() { return this.m.length }

  cols() { return this.m[0].length }

  transpose() {
    var m = this.m;
    var r = Matrix.create(m[0].length, m.length, 0);
    for (var i=0; i<m.length;i++) {
      for (var j=0; j<m[i].length;j++)
        r.m[j][i] = m[i][j];
    }
    return r;
  }

  mul(mat2) {
    var m = this.m, m2=mat2.m;
    var r = Matrix.create(m.length, m2[0].length, 0);
    for (var i=0; i<m.length;i++)
      for (var j=0; j<m[i].length; j++) 
        for (var k=0; k<m2[j].length; k++)
          r.m[i][k] += m[i][j]*m2[j][k];
    return r;
  }
  
  add(mat2) {
    var m = this.m, m2 = mat2.m;
    var r = Matrix.create(m.length, m[0].length, 0);
    for (var i=0; i<m.length; i++)
      for (var j=0; j<m[i].length; j++)
        r.m[i][j] = m[i][j]+m2[i][j];
    return r;
  }
  
  sub(mat2) {
    return this.add(mat2.neg());
  }
  
  sum() {
    var s=0;
    for (var i=0; i<m.length; i++)
      for (var j=0; j<m[i].length; j++)
        s += m[i][j];
    return s;
  }
  
  norm() {
    var s=0, m=this.m;
    for (var i=0; i<m.length; i++)
      for (var j=0; j<m[i].length; j++)
        s += m[i][j]*m[i][j];
    return s;
  }
  
  neg() {
    var r = Matrix.create(this.rows(), this.cols(), 0);
    for (var i=0; i<r.m.length; i++)
      for (var j=0; j<r.m[i].length; j++)
        r.m[i][j] = -1*this.m[i][j];
    return r;
  }
    
  toStr(precision) {
    var rzStr = "", m = this.m;
    for (var i=0; i<m.length; i++) {
      var rowStr = ""
      for (var j=0; j<m[i].length; j++)
        rowStr += m[i][j].toFixed(precision)+" ";
      rzStr += "["+rowStr.trim()+"]\n";
    }
    return rzStr;
  }

  toString() { return this.toStr(Matrix.precision) }
}

Matrix.precision = 3

Matrix.test=function() {
  var m1=new Matrix([[1,1,1], [1,2,3]])
  var m2=m1.transpose()
  Matrix.precision = 0
  console.log("=====m1========\n%s", m1)
  console.log("=====m2========\n%s", m2)
  console.log("=====m1+m1=====\n%s", m1.add(m1))
  console.log("=====m1*m2=====\n%s", m1.mul(m2))
}

// Matrix.test();

module.exports = Matrix;