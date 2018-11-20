export function sum(num1, num2) { return num1 + num2; }
export function sub(num1, num2) { return num1 - num2; }
export function mul(num1, num2) { return num1 * num2; }
export function div(num1, num2) {
  return (num2 === 0) ? 'Não é possivel divisão por zero!' : num1 / num2;
}
