//moduleのimport exportの動きを即時関数で確認する

const moduleA = (function(){

  console.log('IIFE called');
  let privateVal = 1;
  let publicVal = 10;

  function publicFn(){
    console.log('publicFn called: ' + publicVal++);
  }

  function privateFn(){

  }

  return {
    publicFn,
    publicVal
  }

}());

// moduleA.publicFn();
// moduleA.publicFn();
// moduleA.publicFn();
// moduleA.publicFn();
// moduleA.publicFn();
// //同じpublicValを見ているはずが値がことなる
// //プリミティブ型の場合は値をコピーしているために参照先が異なっている
// //オブジェクト型の場合は参照先が同じになる
// console.log(moduleA.publicVal++);
// console.log(moduleA.publicVal++);
// console.log(moduleA.publicVal++);

const moduleB = (function ({publicFn:fn,publicVal:val}){
  fn();
  fn();
  fn();
  fn();
  console.log(val++);
  console.log(val++);
  console.log(val++);
  fn();
  fn();
})(moduleA);
