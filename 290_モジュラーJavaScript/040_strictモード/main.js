//user strict の挙動
'use strict'

//グローバルオブジェクトwindowへの直接代入禁止
// a = 0;

function fn(){
  //関数ないだけでも使用できる
  // 'use strict'
  // a = 0
  //予約語も禁止になる
  // const implements,interface,package;
  return this;
}

//グローバルオブジェクトを返すとundefinedを返す
//callで値を変えると
//strict プリミティブ型
//無し　　オブジェクトでラップされる
console.log(fn.call(2));
// console.log(a);
