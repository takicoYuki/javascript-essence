
function a(){
  //非同期APIに登録する処理
  setTimeout(function task1(){
    console.log('task1 done');
    //レキシカルスコープから見れる
    b();
  });

  console.log('fn a done');
}

function b(){
  console.log('fn b done');
}

//実行したい順
//a task1 b

//処理順
//関数コンテキスト、グローバルコンテキスト start
//関数コンテキスト、グローバルコンテキスト end
//タスクキューにスタックされている処理を実行 (FIFO)

//非同期APIに処理を追加するとAPIを経由してタスクキューにスタックされる
a();
