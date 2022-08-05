function a(){
  let b = 0;
  console.log(b);
}

//関数スコープ外のためNG
//console.log(b);

a();


//varはブロックスコープが作成されない
{
  let c = 1;
  console.log(c);
  function d(){
    console.log('d is called');
  }
  const g = function(){
    console.log('g is called');
  }
}

//スコープ外のためNG
//console.log(c);
console.log(d);
//ブロックスコープのためNG
//console.log(g);
