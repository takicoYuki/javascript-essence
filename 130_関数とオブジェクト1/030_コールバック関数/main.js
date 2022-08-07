//コールバック
//他の関数の引数として使われる関数
//呼び出す実引数は一致している必要がないargumentに入るだけ

function hello(name){
  console.log(`hallo ${name}`);
}
function bye() {
  console.log('bye');
}

function fn(cb){
  cb('Tom');
}

fn(hello);
fn(bye);

//無名関数も渡せる
fn(function(name){
  console.log(`hello ${name}`);
})

//(コールバック実行,待ち時間)
//一部の機能を外だしに使うらしい
setTimeout(hello,2000);
