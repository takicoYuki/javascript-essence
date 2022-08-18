class C{
  constructor(a,b){
    this.a = a;
    this.b = b;
  }
}

//インスタンス作成
const obj1 = new C(1,2);
// console.log(obj1);
//construct(クラス,引数(配列で入れる))
const obj2 = Reflect.construct(C,[1,2]);
//同じ物を作れる
// console.log(obj2);

// console.log('c' in obj1);
//Reflectでオブジェクトにアクセスできる
// console.log(Reflect.has(obj1,'b'));

const bob = {
  name: 'Bob',
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    //getter
    return this._hello();
  },
}

const tom = {
  name: 'Tom',
  _hello:function(){
    console.log(`hello ${this.name}`);
  },
  get hello(){
    //getter
    return this._hello();
  },
}

//普通にgetter使う
tom.hello;
//Reflectを使ってみる
//Reflect.get(getを呼び出すオブジェクト,呼び出すgetter,バインドするオブジェクト)
Reflect.get(tom,'hello',bob);
