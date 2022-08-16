// import defaultVal, { publicVal as val, publicFn as fn } from './moduleA.js';
//まとめてimport
import defaultVal, * as moduleA from './moduleA.js'

console.log(moduleA);
console.log(moduleA.publicVal);
console.log(defaultVal);
moduleA.publicFn();
