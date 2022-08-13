//fetch(url)
//promiseが返される
// console.log(window.fetch('./users.json'));
// window.fetch('./users.json').then(function(response){
//   console.log(response);
//   //prototypeの関数を使ってみる
//   return response.json();
// }).then(function(json){
//   console.log(json);
//   for(const val of json){
//     console.log(val);
//     console.log(`I am ${val.name} ${val.age}`);
//   }
// })

//Await Asyncで書いてみる
async function fetchUsers(url){
  let response = await fetch(url);
  let json = await response.json();
  for(const val of json){
    console.log(`I am ${val.name} ${val.age}`);
  }
}

fetchUsers('./users.json');
