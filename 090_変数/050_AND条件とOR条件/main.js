//AND条件
//&&
//truthyな値の判定
//全部truthyな値であれば1なければ0
//数値だとtruthyの値を返す

//OR条件
//||
//どれかtruthyがあれは1なければ0
//数値だとtruthyの値を返す

const a = 0;
const b = 1;
const c = 3;
const d = 0;
//1が返ってくる truthyな値
//0が返ってくる falsyな値
console.log(a && b && c);
console.log(a || b || c);
console.log((a || b) && c);
console.log((a || b) && (c || d));

function hello(name){
  //falsyの場合
  // if(!name){
  //   name = 'tom';
  // }
  name = name||'tom';
  console.log('hello ' + name);
}

hello('bob')
hello(0)

let name ;
//nameがtruthyの場合右を実行
name && hello(name);
