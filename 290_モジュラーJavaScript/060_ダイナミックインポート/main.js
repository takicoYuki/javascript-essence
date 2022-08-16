//通常のインポート
// import { publicFn,publicVal} from './module.js';
// publicFn();

//ダイナミックインポート
//非同期でimportできる
//使い方としては必要な時にimportをして軽くする
//戻り値はpromise が返ってくる
// import('./module.js').then(function (module){
//   console.log(module);
// });

//async await を使っても書ける
async function fn(){
  //promiseの戻り値を取得する
  // const module = await import('./module.js');
  //awaitをなくすとpromiseのオブジェクトが返ってくる
  const module = import('./module.js');
  console.log(module);
}
fn();
