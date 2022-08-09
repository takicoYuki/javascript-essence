//Map
//Mapはkeyの成約は無し
//列挙にはfor ofを使用する
const map = new Map();

//keyにオブジェクトを設定する
const key1 = {};

map.set(key1,'value1');
// console.log(map.get(key1));
//keyにオブジェクトを設定すると参照を持っているため{}では検索できない
// console.log(map.get({}));

//関数もkeyにすることができる
const key2 = function(){};

map.set(key2,'value2');
// console.log(map.get(key2));

//プリミティブ型をkeyにしてみる
const key3 = 0;
map.set(key3,'value3');
// console.log(map.get(key3));
//プリミティブ型の場合は直接keyを入れても参照可能
// console.log(map.get(0));

//for ofで列挙してみる
//分割代入でkeyとvalueを分けて取得できる
for(const [k,v] of map){
  console.log(k,v);
}

//setを作成
//setは重複値を持てない
//列挙はfor ofを使用する
const s = new Set();
s.add(key1);
s.add(key2);
s.add(key3);

for(let a of s){
  console.log(a);
}

//arrayに移し替えもできる
// const array = Array.from(s);
//シンタックスシュガー
const array = [...s];

for(let a in array){
  console.log(array[a]);
}
