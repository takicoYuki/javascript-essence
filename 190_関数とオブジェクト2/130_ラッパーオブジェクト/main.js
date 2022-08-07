//ラッパークラス
const a = new String('hello');
//ラッパークラスのプロトタイプが使える
console.log(a.toUpperCase());

//プリミティブ型で記述してもラッパークラスのプロトタイプが実行できる
//JavaScriptはプリミティブ型はラッパークラスで包むイメージ
const b = 'hello';
console.log(b.toUpperCase());
