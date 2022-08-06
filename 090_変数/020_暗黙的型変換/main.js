function typeAndVal(val){
  console.log(typeof val , val);
}

let a = 0;

typeAndVal(a);

//文字列に合わせてい暗黙的型変換される
let b = '1' + a;

typeAndVal(b);

//マイナスは数値の文字列にしか使われないため
//数値として暗黙的型変換される
let c = 15 - b ;

typeAndVal(c);

//null = 0として暗黙的型変換される
let d = c - null;

typeAndVal(d);

//true = 1として暗黙的型変換される
let g = d - true;

typeAndVal(g);
