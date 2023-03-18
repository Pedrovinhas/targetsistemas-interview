

const checkIfIsAFibonnaciNumber = (inputNumber: number, startNumber = 0, secondNumber = 1):boolean => {
    if (secondNumber < inputNumber) {
        return checkIfIsAFibonnaciNumber(inputNumber, startNumber + secondNumber, startNumber)
    }

    if(secondNumber === inputNumber) {
        return true
    }

    return false


}

console.log(checkIfIsAFibonnaciNumber(14))