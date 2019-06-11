const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((el, index) => el === arr2[index]);

const memorize = (fn, limit) => {
  let results = [];

  return function (...arguments) {
    let obj = {};
    obj.args = Array.from(arguments);
    
    function same(res) {
      return compareArrays(res.args, obj.args);
    }

    const findSame = results.find(same);

    if (findSame) {
      console.log(`Нашел совпадение: ${findSame.args}`);
      console.log(`Результат берётся из памяти: ${findSame.result}`);

      return findSame.result;
    } //else {
      
      console.log(`Совпадений не найдено`);

      obj.result = fn(arguments);
      results.push(obj);

      if (results.length > limit) results.shift();

      return obj.result;
    //}
  }
}

const sum = (arguments) => {
  let sumOfArgs = 0;
  let args = Array.from(arguments);
  
  args.forEach(function(el) {
    sumOfArgs += el;
  });
  
  console.log(`Функция вызвана не из памяти ${sumOfArgs}`);

  return sumOfArgs;
}

const mSum = memorize(sum, 5);

mSum(3, 4);
mSum(2, 8);
mSum(3, 4);
mSum(2, 8);
mSum(4, 8);
mSum(6, 8);
mSum(5, 12);
mSum(6, 8);
mSum(7, 15);
mSum(6, 8);