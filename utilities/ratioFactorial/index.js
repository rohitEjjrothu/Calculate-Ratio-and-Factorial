import factorialFunction from '../factorial/index'
import ratioFunction from '../ratio/index'

const ratioAndFactorial = (num1, num2, num3) => {
  const factorial = factorialFunction(num3)
  const ratio = ratioFunction(num1, num2)

  return {factorial, ratio}
}

module.export = ratioAndFactorial
