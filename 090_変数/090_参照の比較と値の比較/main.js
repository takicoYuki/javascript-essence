const a = {
  prop:0
}
const b = {
  prop:0
}

//オブジェクトを比較するときはオブジェクトの参照をチェックする
console.log(a === b);
//値が同じかどうかのチェックになる
console.log(a.prop === b.prop);

const c = a;
//参照が同じ
console.log(c === a);

//プリミティブ型は値の比較
//オブジェクトは参照の比較
