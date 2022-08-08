//スプレッド演算子
//配列の場合
const array1 = [1,2,3,4,5];
//スプレッド演算子を使った配列の追加
const array2 = [0, ...array1, 10];

console.log(array1)
console.log(array2);
//新たに作成するので参照もとが異なる
console.log(array1 === array2);

//関数の引数にスプレッド演算子で渡す
function sum (...args){
  let num = 0;
  for(let item of args){
    num += item;
  }
  return num;
}

console.log(sum(...array2));

//オブジェクトの場合
const items1 = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 'value4',
}

//オブジェクトをコピーする
const items2 = {...items1};
console.log(items1);
console.log(items2);

//配列としてオブジェクトをコピーするする場合はSymbolイテレーターを追加してやる必要がある
Object.prototype[Symbol.iterator] = function* (){
  for(let key in this){
    yield [key,this[key]];
  }
}

const items3 = [...items1];
//追加したイテレーター
console.log(items3);

//keyを返す
for(let a in items1){
  console.log(a)
}
//各オブジェクトのプロパティを回す
for (let a of items1) {
  console.log(a)
}
