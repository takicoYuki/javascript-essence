//配列のループ文
const array = [1,2,3,4,5,6];

//for文で回す
for(let i=0; i<array.length; i++){
  console.log(array[i]);
}

//while文で回す
let v,i = 0;

//配列内にfalsyな値がない場合はこれで回せる
while(v=array[i]){
  console.log(v);
  i++
}
