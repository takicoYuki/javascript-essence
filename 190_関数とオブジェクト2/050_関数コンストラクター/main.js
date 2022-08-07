//グローバルスコープ
let d = 0;

function fn(){
  //関数スコープ
  let d = 1;
  //関数コンストラクター作成
  const fn1 = new Function('a','b','return a*b*d');
  return fn1;
}

const f =fn();
const result = f(1,2);
//グローバルスコープの値をとっている
console.log(result);

function fn2(a,b){
  return a+b;
}

console.log(fn2 instanceof Function);

//関数
const obj = new function(){
  this.a = 0;
}
//関数コンストラクタ
const fn3 = new Function('this.a =0;');

//コンストラクタはnew でインスタンス化する
//Function 関数オブジェクトで
//function 関数コンストラクタ
const obj3 = new fn3();
console.log(obj, obj3)
