//オブジェクトには4つの設定がある
//value 値
//writable 書き込みの有無
//enumerable 列挙可能かどうか
//configurable 設定の変更の有無

//オブジェクトの設定のエラーは下記が記載されていないと表示されない
'use strict'

//初期値はディスクリプターはすべてtrueで作成される
const obj = {}

//ディスクリプターを設定する場合
Object.defineProperty(obj,'prop',{
  value:0,
  configurable:false,
  writable:false
})

//ディスクリプターの確認方法
const desc = Object.getOwnPropertyDescriptor(obj,'prop');
console.log(desc);
