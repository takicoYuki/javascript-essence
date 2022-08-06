//bind thisのとりうる値を固定できる
//bindで thisの固定 引数の固定ができる


window.name = 'John';

const person = {
  name: 'Tom',
  hello: function () {
    console.log('Hello ' + this.name);
  }
}

//オブジェクトスコープを参照 => Tom
person.hello();

function fn(cb) {
  cb();
}

//関数を渡してるため関数スコープ
//関数スコープ => グローバルオブジェクト = John
fn(person.hello);


//bind
//参照先をpersonにbindする
const helloTom = person.hello.bind(person);
fn(helloTom);

function a(){
  console.log('Hello '+ this.name);
}

//bindを新たに作成固定する
const b = a.bind({name:'Tim'})
b();

function c(name) {
  console.log('Hello ' + name);
}

//bindを新たに作成固定する
//引数を固定する
//nullからにしてBOBで固定する
const d = c.bind(null,'BOB');
d();

//メモリ上ではbindすると新たにメモリ空間に他の関数として保存される
