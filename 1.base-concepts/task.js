"use strict";

function solveEquation(a, b, c) {
  const arr = [];

  const d = b**2 - 4 * a * c;

  if (d > 0) {
    const root1 = (-b + Math.sqrt(d) )/(2*a);
    const root2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(root1, root2);
  } else if (d === 0) {
    arr.push(-b/(2*a));
  }

  return arr; 
}


const paramsDict = {
  percent: "Процентная ставка",
  contribution: "Начальный взнос",
  amount: "Общая стоимость",
  date: "Срок кредита",
}
/**
 * 
 * @param {Number} percent Процентная ставка
 * @param {Number} contribution Начальный взнос
 * @param {Number} amount Общая стоимость
 * @param {String} date Срок кредита (дата окончания кредита)
 * @returns 
 */
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  const errorMessage = checkIsInvalidParams({percent, contribution, amount, date});
  if (errorMessage) {
    return errorMessage;
  }

  const loanBody = amount - contribution;
  const loanTerm = getMonths(date);
  percent = percent / 100 / 12;

  const payment = loanBody * (percent + (percent / (((1 + percent)**loanTerm) - 1)));


  totalAmount = (payment * loanTerm).toFixed(2);
  console.log(totalAmount);
  return Number(totalAmount);
}

function checkIsInvalidParams(paramsObj = {}) {
  for (const [key, value] of Object.entries(paramsObj)) {
    let result = Number(value);
    if (key === 'date') {
      result = getMonths(value);
    }

    if (Number.isNaN(result)) {
      return `Параметр "${paramsDict[key]}" содержит неправильное значение "${value}"`;
    }
  }
  return false;
}

function getMonths(dateStr) {
  const date = new Date(dateStr);
  const currentDate = new Date();

  const delta = date - currentDate;
  if (delta >= 0) {
    return Math.ceil(delta / (1000 * 60 * 60 * 24 * 31));
  }
  return 0;
}
