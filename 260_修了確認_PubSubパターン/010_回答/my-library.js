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

//classで作る
//setで作ったほうがいい
//ライブラリだからclass よりツールだからオブジェクトで作ったほうがいい
// class events{
// 	static map = new Map();

// 	static on(trigger,method){
// 		//{key,[関数]}
// 		if(this.map.get(trigger)){
// 			let array = this.map.get(trigger);
// 			array.push(method);
// 			this.map.set(trigger,array);
// 		}else{
// 			this.map.set(trigger, [method]);
// 		}
// 	}

// 	static off(trigger,method){
// 		//triggerでよびだして配列を回して一致するものを探す
// 		let array = this.map.get(trigger);
// 		//ここが良くなさそう
// 		let result = array.filter((array)=>{
// 			return array !== method;
// 		});
// 		this.map.set(trigger, result);
// 	}

// 	static emit(trigger){
// 		//trigger別で実行する
// 		for(let [k,v] of this.map){
// 			let array = v;
// 			if(k == trigger){
// 				for (let key in array) {
// 					array[key]();
// 				}
// 			}
// 		}
// 	}
// }

//オブジェクトで作成する
const events = function(){
	//外のスコープからいじれないように即時関数で作成する
	const map = new Map();

	//setを回すforEach用コールバック関数
	function run (value1){
		if(value1){value1();}
	}
	//関数
	return {
		on(trigger,method){
			//関数を登録する
			//短絡的分岐
			//mapにデータがあればmapから,なければnew Set
			let set = map.get(trigger) || new Set();
			//重複があったら追加されないからこれだけでOK
			set.add(method);
			map.set(trigger,set);
		},
		off(trigger,method){
			let set = map.get(trigger);
			if(set.has(method)){
				set.delete(method);
			}
		},
		emit(trigger){
			let set = map.get(trigger);
			set.forEach(run);
		}
	}
}();

class MyLibrary {
	constructor() {
		events.emit('beforeInit');

		console.log('library process');

		events.emit('afterInit');
	}
	method() {
		// do something
	}
}

//-----------テスト--------------------
//インスタンス作成
// const events = new Events();
//適当なメソッド
// function customFn1() {
// 	console.log('customFn1');
// }
// function customFn2() {
// 	console.log('customFn2');
// }
// function customFn3() {
// 	console.log('customFn3');
// }

//登録してみる
//同じkeyだと上書きされる
// events.on('beforeInit', customFn1);
// events.on('beforeInit', customFn2);
// events.on('beforeInit', customFn3);
// events.on('afterInit', customFn1);
// events.on('afterInit', customFn2);
// events.on('afterInit', customFn3);

//実行してみる
// events.emit('beforeInit');

//登録を解除してみる
// events.off('beforeInit', customFn1);

//実行してみる
// events.emit('beforeInit');

//for in of 忘れた
// const items = {
// 	prop1: 'value1',
// 	prop2: 'value2',
// 	prop3: 'value3',
// 	prop4: 'value4',
// }
//keyが取得できる
// for(let item in items){
// 	console.log(item);
// }
//イテレーターが必要
// for (let item of items) {
// 	console.log(item);
// }

//配列
// const array = [1,2,3,4,5,1,1];

// let result = array.filter((array)=>{
// 	return array !== 1;
// });
// console.log(result);

//set
// const set = new Set();
// set.add(() => {
// 	console.log('test');
// })
// function run(value1) {
// 	if (value1) { value1();}
// }
// set.forEach(run);
