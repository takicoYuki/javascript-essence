
function Person(name,age){
  this.name = name;
  this.age = age;
}

Object.prototype.hello = function(){
  console.log('Object : hello' + this.name);
}

//インスタンス作成
const bob = new Person('bob',18);

//Object.hasOwnProperty インスタンスにプロパティがあるかチェックする(プロトタイプチェーンは無視)
const result1 = bob.hasOwnProperty('hello');

//in インスタンスにプロパティがあるかチェックする(プロトタイプチェーンあり)
const result2 = 'hello' in bob;

console.log(result1,result2);
