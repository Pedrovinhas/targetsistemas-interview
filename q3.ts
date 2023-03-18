// a)

// Número + 2
// Resposta -> 9

for(let k = 1; k <= 9; k = k + 2) {
    console.log(k)
}

// b)

// Número * 2
// Resposta -> 128

function numberMultiplyByTwo(numberMultiplied: number): number {
    return numberMultiplied * 2
}

console.log(numberMultiplyByTwo(64))

// c)

// Potência quadrada do número
// Resposta -> 49

function squarePower(squareNumber: number):number {
    return Math.pow(squareNumber, 2)
}

console.log(squarePower(7))

// d)

// Progressão Aritmética: termo anterior somado com uma razão que é 8 
// Resposta -> 100

function arithmeticProgression(lastNumber: number, r:number): number {
    return lastNumber + r
}

console.log(arithmeticProgression(64, 36))

// e)

// 7º termo da Sequência de Fibonacci
// Resposta -> 7

function fibonacciSequence(term: number): number {
    let n1 = 0
    let n2 = 1
    let nextTerm = 1

    for(let i = 0; i < term; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;  
    }

    return n1
}

console.log(fibonacciSequence(7))                   

// f)

// Números naturais com a letra D
// Ex.: Dois, Dez, Dezesseis, Dezessete, Dezoito, Dezenove ... Duzentos