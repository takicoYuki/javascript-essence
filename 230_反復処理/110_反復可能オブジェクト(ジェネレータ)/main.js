//オブジェクト
const items = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3'
}

//ObjectのSymbolを更新する
Object.prototype[Symbol.iterator] = function*(){
  //inはkeyを回す of はkeyとvalueを回す
  for (let key in this){
    yield [key,this[key]];
  }
}

for(let [k,v] of items){
  console.log(k,v);
}
