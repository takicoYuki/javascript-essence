//getter setter
//コンストラクターでのsetter,getter,staticの作り方
function Person(name,age){
  this.name = name;
  this.age = age;
}

//getterとsetterの設定
Object.defineProperty(Person.prototype,'name',{
  get: function (){
    //何らかの処理を追加したりするときに使用する
    return this.name;
  },
  set: function (val){
    this.name = val;
  }
})

//staticメソッド作成
Person.hello = function(){
  console.log('hello');
}

// Person.hello();


//classでのgetter,setter,staticメソッドの作り方
class Japanese {
  constructor (name,age){
    this.name = name;
    this.age = age;
  }
  //setter getterの作成
  get name(){
    return this.name;
  }
  set name(val){
    this.name = val;
  }

  //staticメソッドの作成
  static hello(){
    console.log('hello');
  }
}

//staticメソッドなのでインスタンス化せずに呼び出すことができる
// Japanese.hello();
