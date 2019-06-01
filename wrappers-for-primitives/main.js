"use strict";

function calcForHypothec(interestRate, sumOfFirstPayment, sumOfCredit, period) {
  let returnPaymentToBank = sumOfCredit - sumOfFirstPayment;
  let partOfRate = interestRate / 100 / 12;
  let date = new Date().getMonth() + 1;
  period = period - date;
  let monthPayment = returnPaymentToBank * (partOfRate + partOfRate / (((1 + partOfRate) ** period) - 1));
  let totalSum = monthPayment * period;
  
  /*for (let i = 0; i <= arguments.length; i++) {
    if (typeof arguments[i] == 'string') {
      console.log(`Параметр: ${arguments[i]}, содержит неправильное значение: ${typeof arguments[i]}`);
    }
  }*/

  for (let prop in arguments) {
    if (typeof arguments[prop] == 'string') {
      arguments[prop] = +arguments[prop];
      console.log(`Параметр: ${prop}, содержит неправильное значение: ${arguments[prop]}`);
    }  
  }

  if (isNaN(totalSum)) return false;
   
  /*console.log(returnPaymentToBank);
  console.log(monthPayment);
  console.log(totalSum);*/

  return totalSum.toFixed(2);
}

console.log(calcForHypothec('процент*100', 'начальный взнос', 'общая стоимость', 'срок в месяцах'));

function testInkognito(name) {
  if (name == null || undefined) {
    return 'Аноним';
  } else if (name === '') {
    return 'Аноним';
  } else {
    return `Привет, мир! Меня зовут ${name}`;
  }
}

console.log(testInkognito('Петр'));