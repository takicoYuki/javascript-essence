//グローバルコンテキスト
  //実行中のコンテキスト内の変数・関数
  //グローバルオブジェクト
  //this

  //グローバルコンテキスト
  let a = 0;
  function b(){};

//関数コンテキスト
  //実行中のコンテキスト内の変数・関数
  //arguments
  //super
  //this
  //外部変数

  function c(){
    console.log(this,arguments);
    //外部変数
    console.log(a)
  }
  c();
