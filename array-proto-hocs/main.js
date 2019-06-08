const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((a1, a2) => a1 === arr2[a2]);

const memorize = (fn, limit) => {
  let results = [];
  console.log(results);
  
  return function (fn) {
    let obj = {
      args: Array.from(arguments),
      result: sum(...arguments),
    };
    
    if (results.length + 1 > limit) {
      results.shift();
    } 
    
    const same = results.map(item => item.args);
    
    for (let i = 0; i < same.length; i++) {
      if (compareArrays(obj.args, same[i]) === true) {
        console.log(`Нашел совпадение: ${same[i]}`);

        return this.result;
      } 
    }
    
    results.push(obj);

    console.log(`Функция вызвана не из памяти`);
    console.log(results);

    return obj.result;
  }
  
  console.log(`Результат берётся из памяти`);
}

const sum = (...arguments) => {
  let sumOfArgs = 0;
  
  for (let i = 0; i < arguments.length; i++) {
    sumOfArgs += arguments[i];
  }
  
  return sumOfArgs;
}

const mSum = memorize(sum, 4);

mSum(3, 4);
mSum(3, 4);
mSum(2, 8);
mSum(2, 8);
mSum(4, 8);
mSum(5, 12);
mSum(6, 8);