/**
 * 問題：
 * クロージャーの問題で作成した以下のcalcFactoryを即時関数
 * で書き直してみてください。
 */

//即時関数
//(function(){})();
let val = 10;

//plus
(function (){
    const newVal = val + 5;
    console.log(`${val} + ${5} = ${newVal}`);
    val = newVal;
})();

//minus
(function () {
    const newVal = val - 3;
    console.log(`${val} - ${5} = ${newVal}`);
    val = newVal;
})();

//multiply
(function () {
    const newVal = val * 2;
    console.log(`${val} * ${2} = ${newVal}`);
    val = newVal;
})();

//divide
(function () {
    const newVal = val / 2;
    console.log(`${val} / ${2} = ${newVal}`);
    val = newVal;
})();
