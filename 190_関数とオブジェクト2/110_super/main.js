//継承元クラス
class Person {
  constructor (name,age){
    this.name = name;
    this.age = age;
  }
  hello(){
    console.log('Person : hello ' + this.name);
  }
}

//継承先クラス
class Japanese extends Person {
  constructor (name,age,gender){
    //thisを設定する前にしかsuperを初期化できない
    super(name,age);
    this.gender = gender
  }
  hello (){
    console.log('Japanese : hello ' + this.name);
  }
}

//クラス以外で継承する方法
//オブジェクトで継承
const tom = {
  name: 'tom',
  hello(){
    console.log('tom : hello ' + this.name);
  }
}

const bob = {
  name: 'bob',
  hello() {
    super.hello();
    console.log('bob : hello ' + this.name);
  }
}

//プロトタイプを継承する
Object.setPrototypeOf(bob,tom);

//実行
bob.hello();

//プロトタイプで継承するとオブジェクトリテラルの中でしかsuperは使えない
//基本的にはsuperはクラスないで使用するもの
