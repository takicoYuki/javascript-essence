//チェーンメソッド
//classの作成
class Person{
  constructor (name,age){
    this.name = name;
    this.age = age;
  }
  //チェーンメソッド作成
  hello(Person){
    console.log(`${this.name} says hello ${Person.name}`);
    //自身のオブジェクトのを返すthisを返す
    return this;
  }
  introduce(){
    console.log(`Hi, i'm ${this.name}, ${this.age}`);
    //自身のオブジェクトのを返すthisを返す
    return this;
  }
  shakeHands(Person){
    console.log(`${this.name} shake hands with ${Person.name}`);
    //自身のオブジェクトのを返すthisを返す
    return this;
  }
}

//インスタンス作成
const bob = new Person('bob',20);
const tim = new Person('Tim',30);

bob.hello(tim).introduce().shakeHands(tim);
