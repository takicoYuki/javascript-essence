//配列の作成
const array = ['a','b','c'];

//配列に追加
array[4] = 'e';

//新しくメソッド作成して列挙に表示されるか見てみる
Object.prototype.method = function(){}

//ディスクリプターのenumerableをfalseにして列挙されるか見てみる
Object.defineProperty(array,0,{
  enumerable:false
});


//for ofでの列挙はSymbolイテレーターに依存している
//for ofで列挙してみる
for(let a of array){
  console.log(a);
}
//for ofはビルドインオブジェクトのSymbolイテレーターオブジェクトを使って列挙している
