
function sleep(val){
  return new Promise(function (resolve,reject){
    setTimeout(function(){
      //レキシカルスコープからvalをとる
      console.log(val++);
      //thenに渡す値
      resolve(val);
    },val*500);
  });
}

//並列で書いた場合
// Promise.all([sleep(2),sleep(3),sleep(4)]).then(function(val){
//   console.log('end');
// });

//直列で書いた場合
// sleep(0).then(function(val){
//   return sleep(val);
// }).then(function(val){
//   return sleep(val);
// })

//直列と並列を混ぜた場合
// sleep(0).then(function(val){
//   return sleep(val);
// }).then(function(val){
//   return sleep(val);
// }).then(function(val){
//   //並列の場合はまとめて値が帰る
//   return Promise.all([sleep(val++),(val++),(val++)]);
// }).then(function(val){
//   //並列で処理しているから配列で戻り値が来る
//   return sleep(val[0]);
// })

//Promise race
//並列処理した中で先に完了した値がthenに値が返る
// Promise.race([sleep(2),sleep(3),sleep(4)])
// .then(function(val){
//   console.log(`val :${val}`);
//   console.log('end');
// })

//Promise allSettled
//戻り値の値とstatus(resolve,rejectの値)
Promise.allSettled([sleep(2),sleep(3),sleep(4)])
.then(function(val){
  console.log(val);
})
