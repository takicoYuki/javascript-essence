let a = 0;
function fn1(arg1){
  //arg1 === a
  arg1 = 1;
  //a = レキシカルスコープ
  //関数スコープの外側のスコープ = レキシカルスコープ
  console.log(a,arg1);
}
//プリミティブ型で値を変えても元の値は変更されない
fn1(a);

//プリミティブ型がディープコピー
// let arg2 = a;
// arg2 = 1;
// console.log(a,arg2);

let b = {
  prop:0
}

//オブジェクトを渡すとオブジェクトの参照を渡している
//シャローコピー
function fn2(arg3){
  arg3.prop  = 1
  console.log(b,arg3);
}
fn2(b);

function fn3(arg4){
  //新しいオブジェクトを生成する
  arg4 = {};
  console.log(b,arg4);
}
fn3(b);
