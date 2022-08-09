//Symbolを作成
const s = Symbol();
//object作成
const obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  //Symbolを追加してみる
  [s]:'value4'
}

//列挙するオブジェクトを追加してみる
//ビルドインオブジェクトに追加してみる
Object.prototype.fn = function(){};
//デフォルトではenumerableがtrueのためfor文で列挙すると追加した関数が表示されてしまう
const b = Object.getOwnPropertyDescriptor(Object.prototype,'fn');
console.log(b);
//enumerableをfalseにしてみる
Object.defineProperty(Object.prototype,'fn',{
  enumerable:false
});

//Symbolは列挙されない
//objectを列挙する
for(let key in obj){
  console.log(key,obj[key]);
}
