//jsonデータ取得
async function fetchUsers(url){
  let response = await fetch(url);

  //データがない場合はエラーを投げる
  if(response.ok){
    let json = await response.json();
    if (!json) {
      throw new noDataError('no data');
    }
    return json;
  }else{
    throw new Error('no page 404');
  }
}

//出力
async function init(url){
  try{
    const json = await fetchUsers(url);
    for (const val of json) {
      console.log(`I am ${val.name} ${val.age}`);
    }
  }catch(e){
    console.error(e);
  }finally{
    console.log('bye');
  }
}


//エラーを作成してみる
class noDataError extends Error{
  constructor (message){
    super(message);
    this.name = 'noDataError';
  }
}


//実行
init('./users.json');
