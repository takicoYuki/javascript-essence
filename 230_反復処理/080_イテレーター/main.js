//イテレーターの作成
function genIterator(max = 10){
  //カウンター
  //関数スコープ
  let count = 0;

  return {
    next: function(){
      if(count <= max){
        return {
          done: false,
          //レキシカルスコープ
          value: count++
        }
      }else{
        return {
          done: true
        }
      }
    }
  }
}

const it = genIterator(5);
//a{done:false,value:0}
let a = it.next();

//whileで中身を回してみる
while(!a.done){
  console.log(a.value);
  a = it.next();
  //a{done:false,value:1}....
}

const obj = {
  //Symbolのイテレーター作成
  //bindを使用する、thisは渡す必要ないのでnull
  [Symbol.iterator]: genIterator.bind(null,100)
}

//配列 in of　
//オブジェクト of
for(const a of obj){
  console.log(a);
}

//set
const set = new Set(obj);
console.log(set);
