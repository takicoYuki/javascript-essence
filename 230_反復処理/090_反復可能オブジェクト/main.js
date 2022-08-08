//Ojectの作成
const items = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 'value4'
}

//objectのprototypeのイテレーターをいじってみる
//Symbolを指定するときは[]
Object.prototype[Symbol.iterator] = function(){
  //オブジェクトのkeyを配列にする
  const keys = Object.keys(this);
  //配列を回すカウント
  let count = 0;
  //リターンブロック内はブロックスコープなので関数スコープでのthisを取得する
  const this_ = this;
  return {
    next (){
      //keyを取得
      let key = keys[count++];
      return{
        value: [key,this_[key]],
        done: count > keys.length
      }
    }
  }
}


//for in 配列を回す
//for of keyとvalueがとれる

//for ofで回す
for(let [k,v] of items){
  console.log(k,v);
}

console.log(items);
for(let item of items){
  console.log(item);
}

//objectを配列に変換
const entry = Object.entries(items);
console.log(entry);
for(let item in items){
  console.log(item);
}
