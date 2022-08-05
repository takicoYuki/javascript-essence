//実行時に関数がメモリに配置されている
a();

//関数式
const a = function (){
  // console.log(c);
  let c = 0;
  function d(){
    console.log('d is called');
  }
  console.log('a is called');
}

//undefined jsエンジンで設定されている
//console.log(b);
//var b = 0

//letはホイステイングの際に初期値が代入されないためエラーになる,constも同様
// console.log(b);
// let b = 0;

//ホイステイングはコンテキストが作成されるタイミングでメモリに作成される
