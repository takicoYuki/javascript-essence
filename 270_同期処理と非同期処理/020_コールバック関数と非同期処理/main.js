
const btn = document.querySelector('#btn');
//タスク登録
btn.addEventListener('click',function task2(){
  console.log('task2 done')
});

function a(){
  //(コールバック関数,待ち時間)
  setTimeout(function task1(){
    console.log('task1 done');
  },4000);

  //同期スレッドを占有する処理
  const startTime = new Date();
  while(new Date()-startTime < 5000){}

  console.log('fn done');
}

a();

//処理の流れ
//実行時にaが呼ばれて
//非同期スレッドにsetTimeの処理が追加されるtask1
//同期スレッドを占有処理が走る
//画面からボタンを押すことでtask2が実行される
