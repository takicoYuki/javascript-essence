//値のカウントアップ
//ここに定義するとグローバルスコープ作成時のみ初期化される
//let num = 0;



function incrementFactory(){
  //ここで定義すると関数コンテキスト作成のたびに初期化される
  let num = 0;

  function increment(){
    num++;
    console.log(num)
  }
  return increment;
}

//関数が帰ってくる
const increment = incrementFactory();
increment();
increment();
increment();
increment();
