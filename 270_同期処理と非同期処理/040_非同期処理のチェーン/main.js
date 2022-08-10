function sleep(callback,val){
  //非同期API登録
  setTimeout(function(){
    console.log(val++);
    //非同期のチェーン
    callback(val);
  },1000);
}

sleep(function(val){
  sleep(function(val){
    sleep(function (val) {
      sleep(function (val) {
        sleep(function (val) { }, val);
      }, val);
    }, val);
  },val);
},0);
