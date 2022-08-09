//ジェネレータ = イテレーターを簡単に書ける
//簡単なジェネレータ作成
function* gen(){
  //yield 値 {value: 値,done:false}
  yield 1;
  yield 2;
  //return 値 {value: 値,done:true}
  return 3;
}

const it = gen();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//objectのビルドインオブジェクトのイテレーターを変更するのはこれで行けた、、
//簡単なイテレーター
// function genIterator(max =10){
//   //カウント
//   let count = 0;
//   //Object key を配列で取得
//   let keys = Object.keys(this);
//   //関数スコープのthisを取得する
//   const _this = this;

//   //イテレーター処理
//   return {
//     //next関数を返す
//     next (){
//       //keyを取得
//       let key = _this[count++];
//       return {
//         value: [key, _this[key]],
//         //10 <  0
//         done: keys.length < count
//       }
//     }
//   }
// }

//簡単なイテレーターをジェネレータで書く
function* genIterator(max = 10){
  //カウント
  let count = 0;

  while(count < max){
    yield count++;
  }
  return;
}

// const a = genIterator(10);
// let b = a.next();
// while(!b.done){
//   console.log(b.value);
//   b = a.next();
// }

//反復可能オブジェクトの作成
//直接functionを記載もできる
const obj = {
  [Symbol.iterator]:genIterator
}

// for(let i of obj){
//   console.log(i);
// }

//ジェネレータの場合は反復可能オブジェクトの作成は省略できる
for (let i of genIterator()) {
  console.log(i);
}
