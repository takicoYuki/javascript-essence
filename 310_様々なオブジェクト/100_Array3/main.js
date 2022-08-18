const array = [1,2,3,4,5,6,7,8];

//reduceは最初にacuuとcurrに配列の値を順番に入れていき
//次のループで足し合わせたものがacuu,配列のから順に取得してきた物がcurrに入る
const result = array.reduce(function(accu,curr){
  console.log(accu,curr);
  return accu + curr*2;
},0);

console.log(result)
