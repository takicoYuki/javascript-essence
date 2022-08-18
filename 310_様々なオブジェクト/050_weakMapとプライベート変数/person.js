//WeakMapを使ったプライベート変数
const wm = new WeakMap();

export class Person{
  constructor(name){
    //前にアンダースコアをつけるとプライベート変数の意味
    // this._name = name;
    wm.set(this,{
      name
    })
  }
  hello(){
    console.log(`hello ${wm.get(this).name}`);
  }
}
