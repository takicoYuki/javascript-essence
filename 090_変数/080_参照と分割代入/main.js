const a = {
  prop: 0
}
//分割代入
//let {prop}  = a ;
//名前を変更したい場合
let {prop :b } = a;
b = 1;
console.log(a.prop,b);

//特定のプロパティのみを取得する
function fn({ prop }){
  prop = 1;
  console.log(a,prop);
}

fn(a);

//オブジェクトが高い層の場合
const c = {
  prop1 : {
    prop2:0
  }
}

//Cから分割代入
let {prop1} = c;

//prop1に参照が入っているため参照元が変更されてしまう
prop1.prop2 = 1;
console.log(c,prop1);
