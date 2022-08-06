//プリミティブ型
//String Null Number Boolean Symbol Undefined BigInt
//一度作成すると変更できない
//定義時に作成した値への代入を再代入すると値の参照先が変更されるだけ
//参照先の値がコピーされる　ディープコピー
let a = 'Hello';
let b = a;
b = 'bye'
console.log(a, b);

//オブジェクト型
//Object
//値を変更することができる
//オブジェクト = 名前付きの参照を保持する入れ物
//オブジェクトへの参照、コピーして参照先を変更するとコピー元も変更される
//参照がコピーされる　シャローコピー
let c = {
  prop:'hello'
}
let d = c;
//同じ参照元のため両方変更される
d.prop = 'bye'
//新しいオブジェクトを生成すると参照しないためコピーもとに影響しなくなる
d = {}
console.log(c,d);

//const 参照をロックする
const g = 'hello';
//g  = 'bye';
const L = {
  prop:'hello'
}
//オブジェクトをconstで使うと値は変更できる
b.prop = 'bye';
