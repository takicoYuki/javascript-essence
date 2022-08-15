//単に実行したいときは下記で行ける
//一回実行される
import './moduleA.js';

//モジュールコンテキストはthisがない
console.log(this);
const a = 0
function fn(){
  //関数コンテキストのthis
  console.log(this);
}

//topレベルで呼ぶと同様にthisはない
fn();

//オブジェクトスコープを見る
const obj = {
  fn
}
//オブジェクトのthis
obj.fn();

//windowオブジェクトは見れる
console.log(window);

//moduleAのwindow.dを出力
console.log(window.d);
