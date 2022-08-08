/**
 * 問題：
 * MyLibraryという汎用的な使用を想定したライブラリのクラス
 * を作成したいとします。
 *
 * 第3者に使用されることを想定しているため、このクラスを
 * 初期化した際（new MyLibrary()）にコンストラクター内で
 * ユーザーが何らかの独自の関数を実行できる仕組みを設けたい
 * と思いました。
 *
 * そこで以下のように動作するeventsというオブジェクトを
 * 一つ作成する事にしました。
 *
 * どのようにしてeventsオブジェクトを実装すれば良いか
 * 考えてみてください。
 *
 * eventsオブジェクトはon、off、emitのメソッドを持っています。
 *
 ***********************************
 *
 * １．onの第一引数で実行場所、第二引数で実行したい関数を登録します。
 * events.on('beforeInit', customFn1);
 * events.on('beforeInit', customFn2);
 * events.on('afterInit', customFn3);
 *
 ***********************************
 *
 * ２．offで"on"と同じ実引数を渡すことで、onで登録した関数を解除できます。
 *
 ***********************************
 *
 * ３．emitでonで登録した関数をすべて実行します。
 * （１）のように登録されていた場合には、new MyLibrary()
 * とすると以下の内容がコンソールに表示されるものとします。
 *
 * customFn1
 * customFn2
 * library process
 * customFn3
 *
 */

class Events{
	constructor(){
		this.map = new Map();
	}
	on(trigger,method){
		//key,[関数]
		//もともとkeyがあったら追加する
		if(this.map.get(trigger)){

		}
		this.map.set(trigger,[method]);
	}
	emit(trigger){
		//trigger別で実行する
		for(let key in this.map){
			if(key == trigger){
				//メソッドを実行する
				this.map[key]();
			}
		}
	}
}

const events = new Events();
//適当なメソッド
function customFn1() {
	console.log('customFn1');
}
function customFn2() {
	console.log('customFn2');
}
function customFn3() {
	console.log('customFn3');
}

//登録してみる
//同じkeyだと上書きされる
events.on('beforeInit', customFn1);
events.on('beforeInit', customFn2);
events.on('beforeInit', customFn3);

console.log(events.map.get('beforeInit'));
for(let i in events.map){
	console.log(events.map.get(i));
}

//実行してみる
events.emit('beforeInit');


class MyLibrary {
	constructor() {
		events.emit('beforeInit');

		console.log('library process');

		events.emit('afterInit');
	}

	//emit(トリガー)
	//登録されたトリガーから探して実行する

	method() {
		// do something
	}
}

//for in of 忘れた
const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	prop4: 'value4',
}
//keyが取得できる
// for(let item in items){
// 	console.log(item);
// }
//イテレーターが必要
// for (let item of items) {
// 	console.log(item);
// }
