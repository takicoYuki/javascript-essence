function sleep(val){
  //promiseチェーンをつなげるにはpromiseのインスタンスを返す
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log(val++);
      //thenに飛ばす
      resolve(val);
    },1000)
  });
}


//sleep return promise resolve then ......
//直列でのチェーン
sleep(0).then(function(val){
  return sleep(val);
}).then(function(val){
  return sleep(val);
})
