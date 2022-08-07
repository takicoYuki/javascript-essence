const tim = { name: 'Tim' }

//call apply
//thisや引数の参照先を変更
//使用時は実行する
//引数を配列で渡す
//(thisの参照先,配列で引数)
a.apply(tim,['Tim','Bob']);

//関数の引数も指定できる
//引数を独立して渡す
//(thisの参照先,引数,引数)
a.call(tim,'Tim','Bob');

const array = [1,2,3,4,5];
//配列から引数にひとつずつ入れる
// const result = Math.max.apply(null,array);
//スプレッドきほう　配列ないが順に入れられていく
const result = Math.max(...array);
console.log(result);

//bind
//thisや引数の参照先を変更
//使用時は実行しない
function a(name,name1) {
  console.log('hello ' + name + ' ' + name1);
}

const b = a.bind(tim);
b();
