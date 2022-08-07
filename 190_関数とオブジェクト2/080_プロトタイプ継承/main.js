//プロトタイプ継承
//継承もとのインスタンスを継承インスタンスで作成
//プロトタイプをコピーする

//継承元
function Person(name,age){
  this.name = name;
  this.age = age;
}

//プロトタイプ作成
Person.prototype.hello = function(){
  console.log('Person : hello ' + this.name);
}

//継承するプロトタイプ
function Japanese(name,age,gender){
  //継承するインスタンスを作る
  //今のthisを追加する
  Person.call(this,name,age);
  //新しいプロパティを追加
  this.gender = gender;
  //新しいプロトタイプを追加
  this.hello = function(){
    console.log('Japanese : hello ' + this.name);
  }
}

//プロトタイプを継承する
Japanese.prototype = Object.create(Person.prototype);

//インスタンス作成
const taro = new Japanese('taro',19,'Male');

//プロトタイプは外側から探していく
taro.hello();
