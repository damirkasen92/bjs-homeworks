"use strict";

function getResult(a, b, c) {
  let D = (Math.pow(b, 2) - 4 * a * c);  
  let x1, x2;
  
  if (D < 0) {
    console.log("Корней нет");
  } else if (D == 0) {
    x1 = (-b) / (2 * a);
	
	console.log(x1);
	
	return x1;
  }	else if (D > 0) {
	x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);	
	
	let arr = {
	  x1: x1,
	  x2: x2
    }  
	
	console.log(arr); 
	
	return arr;
  }	
}

getResult(2, 8, 3); 

function getAverageMark(marks) {
  let total = 0;
    
  if (marks.length > 5) {
	console.log("Количество оценок больше 5");  
	//marks.length = 5; //А в чем минус этого способа?
	marks.splice(5);
  }	
  
  for (let i = 0; i < marks.length; i++) {
	total += marks[i];
  }
  
  total = total / marks.length;
  
  console.log(total);
    
}

getAverageMark([5, 4, 4, 3, 5, 4]);  

function askDrink(name, dateOfBirthday) { 
  let date = new Date();
  let age = date.getFullYear() - dateOfBirthday;
  let message;
  
  if (age >= 18) {
	message = `Не желаете ли олд-фэшн ${name}`;
	console.log(message);
  } else {
    message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	console.log(message);
  }
  
  return message;
}  

askDrink("Дмитрий", 2005);