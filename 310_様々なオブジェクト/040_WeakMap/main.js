//WeakMapは反復処理ができない for of が使えない
const wm = new WeakMap();

let o = {};

wm.set(o, 'value1');

//オブジェクトを削除してみる
// o = null;
// o = {};
//再度オブジェクトを作成しても参照先が変わってしまう
//JavaScriptではガベージコレクションで参照されていないオブジェクトを定期的に削除される

console.log(wm.delete(o));
console.log(wm.get(o));
