import { Person } from "./person.js";

const Tim = new Person('tim');
const bob = new Person('bob');
//異なるthisをkeyに使って呼び出すので別になる
Tim.hello();
bob.hello();
