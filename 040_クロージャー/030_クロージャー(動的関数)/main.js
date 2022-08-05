function addNumberFactory(num){
  function addNumber(value){
    return num + value;
  }
  return addNumber;
}

//呼び出しのたびにレキシカルスコープが保持される
const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
const result = add10(10);
console.log(result);
