//クラス継承で書いた場合

//継承元クラス作成
class Person {
  //コンストラクタの作成
  constructor (name,age){
    this.name = name;
    this.age = age;
  }
  //プロトタイプの作成
  hello (){
    console.log('Person : hello ' + this.name);
  }
}

//継承先クラス作成
class Japanese extends Person{
  //コンストラクタの作成
  constructor (name,age,gender){
    super(name,age);
    this.gender = gender;
  }
  //プロトタイプの作成
  hello (){
    console.log('Japanese : konnichiwa ' + this.name);
  }
  bye (){
    console.log('Japanese : sayounara ' + this.name);
  }
}

//プロトタイプ継承で書いた場合
// function Person(name,age){
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.hello = function(){
//   console.log('Person : hello ' + this.name);
// }

// function Japanese (name,age,gender){
//   Person.call(this,name,age);
//   this.gender = gender;
// }
// Japanese.prototype = Object.create(Person.prototype);
// Japanese.prototype.hello = function(){
//   console.log('Japanese : konnichiwa ' + this.name);
// }
// Japanese.prototype.bye = function(){
//   console.log('Japanese : sayounara ' + this.name);
// }

//インスタンス作成
const taro = new Japanese('taro',18,'Male');
taro.hello();
taro.bye();
