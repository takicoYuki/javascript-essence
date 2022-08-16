//importも複数回呼ばれたとしても同様に一度だけ実行される
import './moduleA.js';
import './moduleA.js';
import './moduleA.js';
import './moduleA.js';

//htmlからデータを取得してみる
const h1 = document.querySelector('h1');
const text = h1.textContent;

console.log(text);
