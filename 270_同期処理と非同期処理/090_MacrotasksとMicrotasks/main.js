//macroTasksとmicroTasksが絡み合ったときの処理順
new Promise(function Promise(resolve){
  console.log('Promise');

  //macroTasks
  setTimeout(function task1(){
    console.log('task1')
    resolve();
  });

  //queueMicrotaskをpromiseで記述する
  //即時実行したい処理
  //bind または resolve.callでないとエラーになった
  // const p = Promise.resolve;
  // resolve.call();
  // p.then(function job6(){
  //   console.log('job6');
  // });

}).then(function job1(){
  console.log('job1');
  //microTasksの途中でmicroTasksを追加する
  setTimeout(function task2(){
    //microTasksが全部処理が終わるまで待つ
    console.log('task2');
  });
}).then(function job2() {
  console.log('job2');
  //途中でmicroTasksを登録してみる
  queueMicrotask(function job5(){
    //即時実行される
    console.log('job5');
  });
}).then(function job3() {
  console.log('job3');
}).then(function job4() {
  console.log('job4');
})

console.log('global end');
