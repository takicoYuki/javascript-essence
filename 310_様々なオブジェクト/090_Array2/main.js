
const array = [1,2,3,4,5,6,7];

//配列内を回す
//コールバック関数を引数に渡す
array.forEach(function(val,index,array){
  console.log(val);
});

//新しい配列を作成する
const newArray = array.map(function(val,index,array){
  return array;
});
console.log(newArray);

const filterArray = array.filter(function(value,index,array){
  //return の値がtruthyの場合に値を返す
  return index >= 4;
});
console.log(filterArray);
