//Storage ブラウザ内でデータを一時保存しておける
//処理は同期処理される
//アプリケーション -> ローカルストレージ
localStorage.setItem('key',1);
const obj = {a:0,b:1};

localStorage.setItem('key',obj);
const json = JSON.stringify(obj);
localStorage.setItem('key1',json);
