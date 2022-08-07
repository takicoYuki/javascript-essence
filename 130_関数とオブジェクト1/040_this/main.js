//this
//呼び出し元のオブジェクトへの参照を保持するキーワード

//グローバルオブジェクトnameを追加
window.name = 'John';

const person = {
  name:'tom',
  hello:function(){
    //thisはオブジェクトのpersonを参照する
    //レキシカルスコープのperson.nameでもOK
    //オブジェクトスコープ
    console.log('hello ' + this.name);
    //グローバルオブジェクトを参照している
    //関数として呼び出されている
    //グローブスコープ
    a();

    const person = {
      name:'Tim',
      hello:function(){
        //オブジェクトスコープ
        console.log('hello ' + this.name);
        //関数スコープ
        a();
      }
    }
    person.hello();
  }
}

//person.hello();

//呼び出し元のオブジェクトがparsonでなくなる
// const ref = person.hello;
// ref();
//thisの参照先
//オブジェクトとして参照する場合はthisはオブジェクトを参照する
//関数として呼び出された場合はグローバルオブジェクトを参照する


//thisは実行コンテキストによってthisの参照先が変わる
//呼び出し元のオブジェクトへの参照を保持する

function a(){
  console.log('hello ' + this.name);
}

person.hello();
// a();


//thisがわからなくなったらデバックでwatchからthisを入れるとわかる
