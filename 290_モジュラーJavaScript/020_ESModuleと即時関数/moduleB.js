import {publicFn as fn,publicVal as val} from './moduleA.js';

fn();
fn();
fn();
fn();
//モジュールでimportするとプリミティブ型は書き換え禁止(const)になる
// console.log(val++);
// console.log(val++);
// console.log(val++);
//オブジェクト型の場合参照先も同じで書き換えできる
console.log(val.prop++);
console.log(val.prop++);
console.log(val.prop++);
console.log(val.prop++);
console.log(val.prop++);
console.log(val.prop++);
fn();
fn();
