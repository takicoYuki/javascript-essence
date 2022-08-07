/**
 * 問題：
 * ログインの制御を行うloginController
 * という名前の関数が存在します。
 * この関数はuserインスタンスを渡すと
 *
 * ログイン処理（login）
 * ->ユーザー権限チェック（checkRoll）
 * ->適切なページへのリダイレクト（redirect）
 *
 * を内部で行います。
 *
 * 以下の呼び出し方をした場合に該当のメッセージが
 * コンソールに出るように実装してみてください。
 *
 ****************************************
 * １．一般ユーザーがログインした時。
 * loginController(new User('Bob'));
 *
 * ログイン成功した場合：
 * User: Bob
 * you have normal roll
 * redirect : /
 * login success
 *
 * ログイン失敗した場合：
 * User: Bob
 * you have normal roll
 * login failed <- checkRollで失敗した場合
 *
 ****************************************
 * ２．管理者（AdminUser）でログインした場合
 * loginController(new AdminUser('Bob'));
 *
 * ログイン成功した場合：
 * User: Bob
 * you have admin roll
 * redirect : /admin
 * login success
 *
 * ログイン失敗した場合：
 * User: Bob
 * login failed <- loginで失敗した場合
 */

//元の関数変えちまった、、、

//userクラスの作成
/*
  name:ユーザー名
  roll:権限 0:権限なし 1:管理者権限 2:user
  redirect:リダイレクト 0:あり 1:無し
  flg:ログインNGフラグ 0:NG 1:OK
  status:ログイン状態 0:ログアウト 1:ログイン
*/
// class User {
//   constructor(name){
//     this.name = name;
//     this.roll = 2;
//     this.redirectStats = 1;
//     this.flg = 1;
//     this.status = 0;
//   }
//   login(){
//     (this.flg) ? (this.status = 1) :(this.status = 0);
//     return this.status;
//   }
//   checkRoll(){
//     return (this.roll) ? (true) : (false);
//   }
//   redirect(){
//     return (this.redirectStats) ? (true) : (false);
//   }
// }

// //インスタンス作成
// const bob = new User('bob');
// loginController(bob);

// //管理者インスタンス作成
// const tim = new User('Tim');
// tim.roll = 1;
// loginController(tim);

// function loginController(user) {
//   if (user.login()
//     && user.checkRoll()
//     && user.redirect()) {
//       //出力文字列の組み立て

//       if(user.roll === 1){
//         //管理者
//         console.log(successMsg(user,true,true));
//       }else{
//         //その他ユーザー
//         console.log(successMsg(user, true, false));
//       }
//   } else {
//     console.log(successMsg(user, false, false));
//   }
// }

// function successMsg(user,flg,rollFlg){
//   if(flg){
//     if(rollFlg){
//       //管理者
//       const msg =
//         `
//       user: ${user.name}\n
//       you have admin roll\n
//       redirect : /admin\n
//       login success
//     `;
//       return msg;
//     }else{
//       //通常権限
//       const msg =
//         `
//       user: ${user.name}\n
//       you have normal roll\n
//       redirect : /admin\n
//       login success
//     `;
//       return msg;
//     }

//   }else{
//     const msg =
//       `
//       user: ${user.name}\n
//       login failed
//     `;
//     return msg;
//   }
// }

//userクラスの作成
class User{
  constructor(name){
    this.name = name;
    this.redirectTo = '/';
  }
  login(){
    console.log(`User: ${this.name}`);
    return true;
  }
  checkRoll() {
    console.log('you have normal roll');
    return true;
  }
  redirect() {
    console.log(`redirect : ${this.redirectTo}`);
    return true;
  }
}

//管理者権限クラスを作成
class AdminUser extends User{
  constructor(name){
    super(name);
    this.redirect = '/admin';
  }
  //オーバーライド
  checkRoll() {
    console.log('you have admin roll');
    return true;
  }
}

function loginController(user) {
  if (user.login()
    && user.checkRoll()
    && user.redirect()) {
    console.log('login success');
  } else {
    console.log('login failed');
  }
}
