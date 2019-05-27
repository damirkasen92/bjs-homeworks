function getSolutions(a, b, c) {
  let D = (Math.pow(b, 2) - 4 * a * c);
  
  if (D < 0) {
    return {D};  
  } else if (D == 0) {
    let x1 = -b / (2 * a);  

    return {
      roots: [x1],
      'D': D  
    };
  } else if (D > 0) {
    let x1, x2;
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a); 

    return {
      roots: [x1, x2],
      'D': D  
    };
  }
  
}

//console.log(getSolutions(2, 4, 2));

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);

  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.D < 0) {
    console.log('Уравнение не имеет вещественных корней');
  } else if (result.D == 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);   
  } else if (result.D > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }

}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

function countAverageScore(args) {
  let sumOfAllMarks = 0;
    
    for (let i = 0; i < args.length; i++) {
      sumOfAllMarks += args[i];
    } 

  sumOfAllMarks = sumOfAllMarks / args.length;
  
  return sumOfAllMarks; 
}

function getAverageScore(data) {  
  let newData = {};
  newData.average = [];
  
  for (let prop in data) {
    let value = data[prop];
    let result = countAverageScore(value);
      
      for (let i = 0; i < value.length; i++) {
        newData.average.push(value[i]);
      }
    
    newData[prop] = result;
  }  
  
  newData.average = countAverageScore(newData.average);
  
  return newData; 
}

console.log(getAverageScore({
  algebra: [2, 4, 5],
  geometry: [2, 4, 5],
  russian: [3, 5, 4, 5],
  french: [4, 4],
  english: [3, 4, 4],
  physics: [3, 2, 5],
  poetry: [5, 3, 4],
  chemistry: [2],
  music: [3, 3, 4],
})); 

function getPersonData(secretData) {
  let firstName = secretData.aaa;
  let lastName = secretData.bbb;
  
  return {
    firstName: rename(firstName),
    lastName: rename(lastName)
  }
}

function rename(value) {
  return (value == 0) ? 'Родриго' : 'Эмильо';
}

console.log(getPersonData({
  aaa: 0,
  bbb: 0
}));

console.log(getPersonData({
  aaa: 1,
  bbb: 0
}));

console.log(getPersonData({
  aaa: 0,
  bbb: 1
}));

console.log(getPersonData({
  aaa: 1,
  bbb: 1
}));