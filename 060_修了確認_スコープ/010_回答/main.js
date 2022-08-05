/**
 * 問題１：
 * 以下のコードではエラーが発生します。
 * コンソールで"fn called"と表示されるように
 * fn内のコードを変更してください。
 *
 * ※if文は削除してはいけません。
 */

//関数コンテキスト
function fn() {
    //レキシカルスコープから関数スコープに変更
    let a;
    if(true) {
        a = 'fn called';
    }
    return a; // ReferenceError: a is not defined
}

const result = fn();
console.log(result);

/**
 * 問題２：
 * fn2内の記述を変更して、各コンソールで
 * 期待値を出力するように修正してください。
 */
let val = 'val1';
function fn2() {
    //関数スコープ内に移動
    console.log(val); // 期待値->'val1'

    if(true) {
        //内側のスコープに入れる
        let val = 'val2';
        console.log(val); // 期待値->'val2'
    }
    console.log(val); // 期待値->'val1'
}
fn2();

/**
 * 問題３：
 * 「クロージャー（プライベート変数）」のレクチャーで作成
 * したincrementと同じ機能を持つincrement関数をブロック
 * スコープとクロージャーを利用して作成してみてください。
 *
 * increment(); // 期待値->1
 * increment(); // 期待値->2
 * increment(); // 期待値->3
 * increment(); // 期待値->4
 */

//ブロックスコープ{}
{
    let brockNum = 0;
    function brockIncrement(){
        brockNum++;
        console.log(brockNum);
    }
    brockIncrement();
    brockIncrement();
    brockIncrement();
}


//クロージャー
//プライベート変数
function incrementFactory(){
    let num = 0;
    function increment(){
        num ++;
        console.log(num);
    }
    return increment;
}
const increment = incrementFactory();
increment();
increment();
increment();
