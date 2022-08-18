const array = [1,2,3,4,5,6,7];
//値の追加 最後に追加される
array.push(8);
console.log(array);

//配列の切り取り
//(最初,最後,..切り取ったところに追加する値)
const result = array.splice(0,3,1,1);
console.log(result);

//スプレット演算子を使った代入
const array1 = [0,...array,11111111,1111111];
console.log(array1)
