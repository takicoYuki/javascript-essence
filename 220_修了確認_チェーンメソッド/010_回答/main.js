/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 *
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 *
 *
 * 例１）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 *
 * 例２）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */

class Calculator{
	constructor (){
		this.num = 0;
		this.ope;
	}
	set (val){
		if(this.num){
			//値が元から入っている場合
			//opeに入っている関数で計算する
			this.num = this.ope(this.num,val);
			console.log(this.num);
			//計算が終わったらnumを初期化
		}else{
			//値が入っていない場合
			this.num = val;
		}
		return this;
	}
	minus (){
		this.ope = function (val1,val2){
			return val1 - val2;
		}
		return this;
	}
	divide (){
		this.ope = function (val1, val2) {
			return val1 / val2;
		}
		return this;
	}
	plus (){
		this.ope = function (val1, val2) {
			return val1 + val2;
		}
		return this;
	}
	mutiply (){
		this.ope = function (val1, val2) {
			return val1 * val2;
		}
		return this;
	}
}

const calc = new Calculator();

calc.set(10)
	.minus()
	.set(3)//7
	.mutiply()
	.set(6)//42
	.divide()
	.set(2)//21
	.plus()
	.set(2)//23
