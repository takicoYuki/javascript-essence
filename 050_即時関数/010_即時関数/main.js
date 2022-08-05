//即時関数
//関数定義と同時に一度だけ実行される関数
function a(){
  console.log('called');
}

a();
(a)();

//即時関数
//(function(){})();
(function(){
  console.log('called');
})();

let c = function(d){
  let privateVal = 100;
  let publicVal = 10;
  function privateFn(){
    console.log('privateFunction');
  }
  function publicFn() {
    console.log('pubFunction');
  }
  console.log('called '+d);
  return {
    publicFn, publicVal
  }
}(10);

console.log(c);
c.publicFn();
console.log(c.publicVal);

//グループ化演算子
//優先的に実行
let b = (1+2)*3;
