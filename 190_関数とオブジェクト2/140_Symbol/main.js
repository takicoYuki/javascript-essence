//Symbol 一意であることを担保するプリミティブ型
//コンストラクターとは違いnew入らない
const s = Symbol('Hello');

console.log(s);

//ビルドインオブジェクトのラッパークラスを汚染させて動作確認
String.prototype[s] = function(){
  return 'Hello ' + this;
}

const tom = new String('Tom');
//Symbolでの呼び出しは[Symbol]()で呼び出す
console.log(tom[s]());
