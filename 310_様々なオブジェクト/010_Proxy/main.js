const targetObj = {a:0};
//オブジェクトのアクセスに対して処理を追加できる
const handler = {
  set: function(target,prop,value,receiver){
    //値を追加を拒否する場合
    console.log('[set]:' + prop);
    throw new Error('cannot add prop');
  },
  get: function (target, prop, receiver){
    console.log('[get]:' + prop);
    return target[prop];
  },
  deleteProperty: function(target,prop){
    console.log('[delete]:' + prop);
    delete target[prop];
  }
}

const pxy = new Proxy (targetObj,handler);
// pxy.a = 1;
console.log(pxy.a);
delete pxy.a;
