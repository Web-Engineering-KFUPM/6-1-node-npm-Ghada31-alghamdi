
export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0)
}

export function subtract(numbers) {
  return numbers.slice(1).reduce((dif, num) => dif - num, numbers[0])
}

export function multiply(numbers) {
  return numbers.reduce((mul, num) => mul * num, 1)
}

export function divide(numbers) {
  return numbers.slice(1).reduce((div, num) => div/num, numbers[0])
}

