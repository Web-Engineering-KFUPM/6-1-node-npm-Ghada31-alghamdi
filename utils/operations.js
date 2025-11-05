
export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  return numbers.reduce((dif, num) => dif - num, 1);
}

export function multiply(numbers) {
  return numbers.reduce((mul, num) => mul * num, 0)
}

export function divide(numbers) {
  return numbers.reduce((div, num) => div/num, 1)
}

