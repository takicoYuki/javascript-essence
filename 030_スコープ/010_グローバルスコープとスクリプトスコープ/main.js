//let const はscriptスコープに追加される
let a = 0;
//グローバルスコープととして追加される
var b = 0;
function c(){};

//グローバルオブジェクトは省略可能
//省略できないとconsole.log(window.b)とする
console.log(b)

window.d = 1;
console.log(d);

//windowオブジェクト = グローバルスコープ

//ブラウザで開発ツールを開くと一時停止する
debugger;
