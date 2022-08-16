//外で実行するとwindowオブジェクトが取得できる
function fn() {
  console.log(this);
}
fn();

class C{
  constructor(){
    //デフォルトで strictモードになっている
    function fn(){
      console.log(this);
    }
    fn();
  }

  method (){
    //デフォルトで strictモードになっている
    function fn() {
      console.log(this);
    }
    fn();
  }
}

const c = new C();
c.method();
