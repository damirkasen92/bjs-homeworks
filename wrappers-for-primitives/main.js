"use strict";

function calcForHypothec(interestRate, sumOfFirstPayment, sumOfCredit, period) {
  for (let key in arguments) {
    if (isNaN(parseInt(arguments[key]))) {
      console.log(`Параметр: ${key}, содержит неправильное значение: ${arguments[key]}`);
    }  
  }
  
  let returnPaymentToBank = sumOfCredit - sumOfFirstPayment;
  let partOfRate = interestRate / 100 / 12;
  let date = new Date().getMonth() + 1;
  period = period - date;
  let monthPayment = returnPaymentToBank * (partOfRate + partOfRate / (((1 + partOfRate) ** period) - 1));
  let totalSum = monthPayment * period;

  if (isNaN(totalSum)) return false;

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