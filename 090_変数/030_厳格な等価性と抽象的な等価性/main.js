let a = '1';
let b = 1;
let c = true;
let e = "";
let f = 0;
let g = '0';

printEq(b,c);
printEq(e,f);
printEq(f,g)

//暗黙的型変換仕様
//https://262.ecma-international.org/5.1/#sec-11.9.3

function printEq(a,b){
  //暗黙的型変換後に比較される
  //厳格な等価性 型の比較までする
  console.log(a === b);

  //抽象的な等価性 型比較なし
  console.log(a == b);
}
