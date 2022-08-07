window.name = 'John';
//この関数のレキシカルスコープ -> グローバルオブジェクト
//アロー関数はthisは持たないからスコープチェーンからレキシカルスコープを見るようになる
//これをhello関数内に入れるとそこから見たレキシカルスコープだからthis.name = Tomになる
// const a = () => console.log('Bye ' + this.name);

//グローバルオブジェクトコンテキスト
const person = {
  name:'Tom',
  //アロー関数なのでthisをとらない
  // hello: () => {
  //無名関数
  hello() {
    //スコープチェーンで外側のスコープを見る
    //レキシカルスコープのグローバルコンテキストを見る
    console.log('Hello ' + this.name);
    // a();
;  }
}

//オブジェクト => オフジェクトコンテキスト
//関数 => グローバルコンテキスト
person.hello();

function b(){
  //個々のレキシカルスコープは関数だからグローバルオブジェクト
  const a = () => console.log('Bye ' + this.name);
  a();
}
b();
