//ReflectとProxy
//内部メソッド
//Reflect get set deleteProperty construct
//Proxy   get set deleteProperty construct
//使い方としてはプロパティの操作時に処理をついかする

const targetObj = {
  a:0,
  get value(){
    return this.b;
  }
};

const handler ={
  get: function(target,prop,receiver){
    //receiverには自身のproxyオブジェクトが入っている
    console.log(receiver);
    console.log(`[get]:${prop}`);
    //getterの処理を追加してみる
    if(target.hasOwnProperty(prop)){
      //関数receiverでバインドしないと関数が返ってくる
      //receiverを指定して更に関数の実行結果をgetの引数として入れられる
      return Reflect.get(target,prop,receiver);
    }else{
      return -1;
    }
  }
}

//(object,ハンドラー)
const pxy = new Proxy(targetObj,handler);
console.log(pxy.value);
console.log(pxy.b);
