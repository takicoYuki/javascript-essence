//Promiseを返す関数
function sleep(val){
  return new Promise(function(resolve,reject){
    //非同期処理の追加
    //macroTask
    setTimeout(function (){
      //関数スコープ、インクリメント演算子
      console.log(val++);
      //thenに処理をつなげる
      resolve(val);
    },1000);
  });
}

//Await,Asyncを使わないでPromiseのチェーンを作成する
// sleep(0).then(function(val){
//   return sleep(val);
// }).then(function (val) {
//   return sleep(val);
// }).then(function (val) {
//   return sleep(val);
// }).then(function (val) {
//   return sleep(val);
// }).then(function (val) {
//   return sleep(val);
// })

//Await,Asyncを使ってPromiseチェーンを作成する

//非同期関数はAsyncをつける
//関数コンテキスト作成されてしまうから？
async function init(){
  //valにはresolve,rejectの引数が帰ってくる
  let val = await sleep(0);
  //Promiseチェーンを作成
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  return val
}

//実行した後にはPromiseが帰ってくる
init().then(function(val){
  console.log(val);
  throw new Error();
}).catch(function(e){
  console.error(e);
});
