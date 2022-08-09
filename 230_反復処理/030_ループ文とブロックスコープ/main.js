//ループ文のブロックスコープ
//ループ文は処理の度にブロックスコープが作成される
for(let i=0; i<10; i++){
  const a = i+2;
  //varの場合はブロックスコープを無視される
  //var a = i*2;
  setTimeout(function(){
    console.log(a);
  },1000)
}
