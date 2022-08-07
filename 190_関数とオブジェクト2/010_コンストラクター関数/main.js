//コンストラクタ関数

//コンストラクタ関数は最初の文字を大文字にする
function Person(name,age){
  //関数スコープ
  this.name = name;
  this.age = age;
}

//インスタンス化
const bob = new Person('Bob',18);
const tom = new Person('tom', 18);
const sun = new Person('sun', 18);
