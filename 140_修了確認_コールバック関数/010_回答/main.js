/**
 * 問題１：
 * setTimeoutの実行から１秒後にブラウザの
 * コンソールに'hello Tom'と表示されるように
 * 実装してみましょう。
 *
 * ※必ずperson.helloメソッドは解答内で使用してください。
 */
const person = {
    hello: function () {
        return 'hello Tom';
    }
}
// function a(str){
//     console.log(str);
// }
// setTimeout(a(person.hello),1000);

//そのまま出力するとオブジェクトが出てしまう
setTimeout(() => {
    const hello = person.hello();
    console.log(hello)
},1000);

/**
 * 問題２：
 * setTimeoutの実行から１秒後にブラウザの
 * ダイアログに'hello Tom'と表示されるように
 * 実装してみましょう。
 *
 * ※必ずperson.helloメソッドは解答内で使用してください。
 * ※alertは第一引数に渡した文字列を画面のダイアログに表
 * 示する関数です。
 */
// setTimeout(()=>{
//     const hello = person.hello();
//     alert(hello);
// },1000)

/**
 * 問題３：
 * objにgreetingというメソッドを実装しました。
 * これをsetTimeoutで１秒後に表示するようなafter1sの
 * 関数にコールバックとして渡しました。
 * その後objに格納したgreeting関数を別の関数で
 * 上書きしました。
 * この時、１秒後にコンソールに出力されるのは
 * 'hello'または'hey'のどちらでしょうか？
 */
const obj = {};
obj.greeting = function() {
    console.log('hello');
}

function after1s(callack) {
    setTimeout(callack, 1000);
}

// この時点で実行します。
//関数はオブジェクトと考えれば
//渡した時点での関数の内容が反映される
after1s(obj.greeting);

//オブジェクト作成
let obj1 = {
    prop: 10
}

let callback = obj1;
obj1 = {};

console.log(callback);
console.log(obj1);

// この後でgreetingを書き換えます。
//上書きしている
obj.greeting = function() {
    console.log('hey');
}


/**
 * 問題４：
 * 以下のcalcFactoryを修正して、計算式を
 * コンソール(console.log)に表示するか、
 * ダイアログ(alert)に出力するかを
 * 使い分けできるようにしてください。
 *
 * ※コールバック関数を用いて実装してください。
 */

//コールバックにするのはコンソールとダイアログどっちも？
//コールバックつかってない
// function calcFactory(val,flg) {
//     return {
//         plus: function(target) {
//             const newVal = val + target;
//             if(flg){
//                 console.log(`${val} + ${target} = ${newVal}`);
//             }else{
//                 alert(`${val} + ${target} = ${newVal}`)
//             }
//             val = newVal;
//         },
//         minus: function(target) {
//             const newVal = val - target;
//             if (flg) {
//                 console.log(`${val} - ${target} = ${newVal}`);
//             } else {
//                 alert(`${val} - ${target} = ${newVal}`)
//             }
//             val = newVal;
//         },
//         multiply: function(target) {
//             const newVal = val * target;
//             if (flg) {
//                 console.log(`${val} x ${target} = ${newVal}`);
//             } else {
//                 alert(`${val} x ${target} = ${newVal}`)
//             }
//             val = newVal;
//         },
//         divide: function(target) {
//             const newVal = val / target;
//             if (flg) {
//                 console.log(`${val} / ${target} = ${newVal}`);
//             } else {
//                 alert(`${val} / ${target} = ${newVal}`)
//             }
//             val = newVal;
//         }
//     };
// }

function calcFactory(val,callback){
    return{
        plus: function(target){
            const newVal = val + target;
            //コールバック関数
            callback(`${val} + ${target} = ${newVal}`);
            val = newVal;
        },
        minus: function (target) {
            const newVal = val - target;
            callback(`${val} - ${target} = ${newVal}`);
            val = newVal;
        },
        multiply: function (target) {
            const newVal = val * target;
            callback(`${val} x ${target} = ${newVal}`);
            val = newVal;
        },
        divide: function (target) {
            const newVal = val / target;
            callback(`${val} / ${target} = ${newVal}`);
            val = newVal;
        }
    }
}

const calc = calcFactory(10,console.log);
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);
