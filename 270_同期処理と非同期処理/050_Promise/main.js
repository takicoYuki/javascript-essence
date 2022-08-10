
new Promise(function(resolve,reject){
  //同期処理

  console.log('promise start');
  //resolve -> then]
  resolve("hello");
  //reject -> catch
  //reject('bye');

}).then(function (data){
  //非同期処理

  //引数も取得できる
  console.log(`then1: ${data}`);
  return data;
  // throw new Error();

}).then(function(data){
  console.log(`then2: ${data}`);
}).catch(function(data){
  //非同期処理

  console.log(`catch: ${data}`)

  //catchはエラーも拾ってくれる

}).finally(function(){
  //非同期処理

  console.log('finally');

  console.log('promise end');
});


//グローバルコンテキスト
console.log('global');
