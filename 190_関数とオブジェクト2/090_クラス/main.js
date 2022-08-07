//クラス
//ES6移行からコンストラクタとプロトタイプをまとめてクラス表記で書けるようになった
//シンタックスシュガー = ある構文を読みやすく書ける書き方

//クラス
class Person{
  //コンストラクタ
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  //プロトタイプ
  hello(){
    console.log('Person: hello ' + this.name);
  }

}

//コンストラクタ
// function Person(name,age){
//   this.name = name;
//   this.age = age;
// }
//プロトタイプ
// Person.prototype.hello = function(){
//   console.log('Person: hello ' + this.name);
// }

const bob = new Person('bob',18);
bob.hello();
