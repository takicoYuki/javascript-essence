//falsy
  //false null o undefined 0n NaN
//truthy
  //falsy以外

let a = 0;
let c = parseInt("");
console.log(Boolean(a));
console.log(Boolean(""));
console.log(Boolean(0n));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(c))
console.log(Boolean(b));

//falsyかどうかのチェック
if(!a){
  console.log('hello')
}else{
  console.log('bye')
}

var b = 0;
