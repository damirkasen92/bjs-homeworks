"use strict";

function calcForHypothec(interestRate, sumOfFirstPayment, sumOfCredit, period) {
  let returnPaymentToBank = sumOfCredit - sumOfFirstPayment;
  let partOfRate = interestRate / 100 / 12;
  let date = new Date().getMonth() + 1;
  period = period - date;
  let monthPayment = returnPaymentToBank * (partOfRate + partOfRate / (((1 + partOfRate) ** period) - 1));
  let totalSum = monthPayment * period;
  
  for (let i = 0; i <= arguments.length; i++) {
    //arguments[i] = parseInt(arguments[i]); если параметр функции будет строкой, то попытайтесь преобразовать в число - как не пытась он не возвращает строку если там нет чисел
    if (typeof arguments[i] == 'string') {
      console.log(`Параметр: ${arguments[i]}, содержит неправильное значение: ${typeof arguments[i]}`);
    }
  }
  
  /*console.log(returnPaymentToBank);
  console.log(monthPayment);
  console.log(totalSum);*/

  return totalSum.toFixed(2);
}

console.log(calcForHypothec('100', 'начальный взнос', 'общая стоимость', 'срок в месяцах'));

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