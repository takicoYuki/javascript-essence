//同期処理を一時止める
function sleep(ms){
  const startTime = new Date();
  //現在時刻 - 関数スコープ作成時時間 < ms
  while(new Date() - startTime < ms);
  console.log('sleep done')
}

const btn = document.querySelector('#button');
btn.addEventListener('click' ,function(){
  console.log('button clicked');
})

//同期処理を止めてみる
// sleep(3000)

//非同期処理にしてみる
//処理を中断しない
setTimeout(function(){
  console.log('sleep done')
},5000);
