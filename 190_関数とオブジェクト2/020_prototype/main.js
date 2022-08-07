//コンストラクタ関数

//コンストラクタ関数は最初の文字を大文字にする
function Person(name, age) {
  //関数スコープ
  this.name = name;
  this.age = age;
}

//メソッドを追加する
//コンストラクタないでも一応使える
//メモリの効率化的にprototypeを使う
Person.prototype.hello = function(){
  console.log('hello ' + this.name);
}
//インスタンス化した際にはprototypeの参照__proto__にコピーされる
//シングルトンみたいな使い方がprototypeを使えばできる

//インスタンス化
const bob = new Person('Bob', 18);
const tom = new Person('tom', 18);
const sun = new Person('sun', 18);

bob.hello();
sun.hello();
