window.name = 'John';

const person = {
  name:'Tom',
  hello:function(){
    console.log('Hello ' + this.name);
  }
}

//オブジェクトスコープを参照 => Tom
person.hello();

function fn(cb){
  cb();
}

//関数を渡してるため関数スコープ
//関数スコープ => グローバルオブジェクト = John
fn(person.hello);
