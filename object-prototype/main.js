function soundOfAnimal(animal) {
  let sound;
  sound = this.sound;

  if (animal === undefined) {
    return null;
  } else if (animal !== undefined) {
    return sound;
  }
}

console.log(soundOfAnimal());

function countAverageMark(marks) {
  let average = 0;
  
  for (let i = 0; i < marks.length; i++) {
    average += marks[i];
  }
  
  average = average / marks.length;
  
  //let roundedAverage = Math.round(average); // при 3,5 выводит 4
  let roundedAverage = Math.floor(average);

  return roundedAverage;
}

console.log(countAverageMark([3, 3, 5, 4, 5, 4, 2, 2]));

function countAge(year, month, day) {
  let now = new Date();
  let birthday = new Date(year, month - 1, day);
  let diff = now - birthday;
  let age = diff / (1000*60*60*24*365.25);
  
  if (now.getMonth() == birthday.getMonth() && now.getDate() == birthday.getDate()) {    
    return Math.round(age);
  } else {
    return Math.floor(age);
  }  
}

console.log(countAge(1992, 06, 02));