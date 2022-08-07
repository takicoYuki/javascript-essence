//アロー関数
//() => {};

function a(name){
  return 'hello ' + name;
}


//引数1の場合括弧省略
//{}省略
//return 省略
//()の省略はダミーの変数_でも置き換えられる
const b = (name,name1) => 'hello ' + name + ' ' + name1;

console.log(b('tom','Bob'));

//無名関数
//this aguments new prototypeが使える
//アロー関数は全部使えない
