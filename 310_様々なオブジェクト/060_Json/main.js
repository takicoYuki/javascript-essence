
const obj = {a:0,b:1,c:2};

//Jsonに変換する
// const json = JSON.stringify(obj);
//取得したい値だけを配列でしていできる
// const json = JSON.stringify(obj,["a","b"]);
//関数で処理を追加できる
const json = JSON.stringify(obj,replacer);
console.log(json);

//オブジェクト形式に戻す場合
const obj2 = JSON.parse(json);
console.log(obj2)

//JSON.stringifyからプロパティと値が回ってくる
function replacer(prop,value){
  if(value < 1){
    return;
  }
  return value;
}
