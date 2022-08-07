//instanceof

function F(a, b) {
  this.a = a;
  this.b = b;
  //下記の場合はobjectのインスタンスを新しく作成しているのと同じ
  // return {a:1};
}

F.prototype.c = function () { }

const instance = new F(1,2);
//インスタンスチェーンでこれもtrueになる
//継承しているみたいなもの
console.log(instance instanceof Object);
//instanceofは__proto__とインスタンスのprototypeを比較する
console.log(instance.__proto__ === F.prototype);

//使いどころ
function fn(arg){
  if(arg instanceof Array){
    //配列できた場合
    arg.push('value');
  }else{
    //オブジェクトできた場合
    arg['key'] = 'value';
  }
  console.log(arg);
}

fn({})
