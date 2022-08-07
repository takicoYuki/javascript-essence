function fn(a,b=1){
  //引数の数が分からないときにargumentsをループで回したりすることもあるらしい
  console.log(arguments);
  console.log(a,b);
  return a;
}

//関数名が重複している場合は後が優先される
//関数をconstに入れると二つ宣言できないようになる
fn(1);
//初期化はnullでする
//これはundefinedになる
let c = fn(1,undefined);
//fn(1,null);
//fn(1,undefined);

console.log(c);
