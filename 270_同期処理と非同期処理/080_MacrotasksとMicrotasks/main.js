//処理の流れ
//コールスタックの処理が全部終わる
//microTasksの処理を全部処理する
//macroTasksを処理する(microTasksに処理があればそっちが優先)

//macroTasks
setTimeout(function task(){
  console.log('task');
});

//microTasks
new Promise(function promise(resolve){
  console.log('promise');
  resolve();
}).then(function job(){
  console.log('job');
})

//グローバルコンテキスト
console.log('global end');

//実行順
//グローバルコンテキスト -> microTasks -> macroTasks
