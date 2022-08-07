//new演算子
function F (a,b){
  this.a = a;
  this.b = b;
  //リターンがオブジェクトの場合はオブジェクトが
  //プリミティブ型の場合はインスタンス内のオブジェクトが帰る
  //定義なしもプリミティブ型同様
  return {};
}

F.prototype.c = function(){}

/*
  インスタンスをnewする際の挙動を関数で作成してみる
*/
function newOpe(C,...args){
  //プロトタイプをコピーする
  const _this = Object.create(C.prototype);
  //プロトタイプをインスタンスのthisとして設定する
  const result = C.apply(_this,args);
  //戻り値がオブジェクトの場合設定
  if(typeof result === 'object' && result !== null){
    return result;
  }
  return _this;
}

const instance = newOpe(F,1,2);
console.log(instance)
