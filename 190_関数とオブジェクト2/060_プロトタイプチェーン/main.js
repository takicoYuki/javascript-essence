//継承みたいなもん
function Person(name ,age){
  this.name = name;
  this.age = age;
  //自身の持っているプロトタイプ
  this.hello = function(){
    console.log('OwnProperty:hello ' + this.name);
  }
}

Person.prototype.hello = function(){
  console.log('Person:hello ' + this.name);
}

Object.prototype.hello = function(){
  console.log('object:hello ' + this.name);
}

//インスタンス化
const bob = new Person('bob',18);
bob.hello();
//プロトタイプの参照順
//自身の持っているもの、プロトタイプ、継承元のプロトタイプ
//オーバーライドとかそんな感じ

//objectが持っているプロトタイプで指定したプロパティがあるかチェックする
const result = bob.hasOwnProperty('name');
console.log(result);
