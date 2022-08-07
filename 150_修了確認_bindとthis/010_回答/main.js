const person = {
    name: 'Tom',
    bye: () => {
        console.log('Bye ' + person.name);
    },
    hello: function (greeting) {
        console.log(greeting + ' ' + this.name);
        return greeting + ' ' + this.name;
    },
    /**
     * 問題４：
     * 1秒後に"hello Tom"
     * と出力されるような、メソッドを
     * personオブジェクトに追加してみてください。
     *
     * 以下のように使用するものとします。
     * `person.hello1s()`
     * -> 1秒後に"hello Tom"と出力
     *
     * 3通りの方法で実装してみてください。
     * １．bind
     * ２．アロー関数
     * ３．thisを一旦変数に代入
     */
    helloBind: function(){
        setTimeout(console.log('Hello ' + this.name),1000);
    },
    arrow: () => {
        //アロー関数はthisはないから取れない
        // let name = this.name;
        setTimeout(console.log('Hello ' + person.name), 1000);
    },
    setThis: function(){
        let str = this.name;
        setTimeout(console.log('Hello ' + str), 1000);
    }
}
const helloBind = person.helloBind.bind(person);
//グローバルオブジェクトをとってしまっている
const arrow = person.arrow;
const setThis = person.setThis.bind(person);

helloBind();
arrow();
setThis();

/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */
setTimeout(console.log(person.hello.call(person,'hello')), 1000);

/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
//alert(person.hello.call(person,'hello'));

/**
 * 問題３：
 * person.byeメソッドを１秒後に実行したかったので
 * bindを使って束縛してみましたが、コンソールには
 * "Bye"しか表示されませんでした。
 * "Bye Tom"とするためにはどうすればよいでしょうか？
 */
//アロー関数はthisはないからオブジェクトから取得する(レキシカルスコープ)
setTimeout(person.bye.bind(person), 1000);
