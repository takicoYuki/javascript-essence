function a(){
  console.log('hallo');
}

a.prop = 0;
a.method = function(){
  console.log('method');
}

//a関数に追加できる = 関数は実行可能なオブジェクトである
a();
a.method();
console.log(a.prop);
