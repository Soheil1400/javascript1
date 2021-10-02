// max and min
function maxNumber(a, b) {
    if (a > b) {
        console.log("a is max")
    } else console.log("b is max")
}

maxNumber(3, 5)

function minNumber(a, b) {
    if (a > b) {
        console.log("b is min")
    } else console.log("a is min")
}

minNumber(3, 5)

function maxNumber2(a, b) {
    return a > b ? a : b
}

console.log(maxNumber2(40, 67))

function minNumber2(a, b) {
    return a < b ? a : b
}

console.log(minNumber2(40, 67))

// check type is string
function type(string) {
    return typeof (string) === "string"
}

console.log(type("6"))

//FizzBuzz Problem
function fizzbuzz(number) {
    if (number % 15 === 0) {
        return "fizzbuzz :)"
    } else if (number % 3 === 0) {
        return "fizz"
    } else if (number % 5 === 0) {
        return "buzz"
    } else return NaN
}
console.log(fizzbuzz(27))
console.log(fizzbuzz(30))
console.log(fizzbuzz(10))
console.log(fizzbuzz(4))
//**2
function tavan2(n) {
    let i = 2;
    while (i < n) {
        i = i * 2;
    }
    return i
}

console.log(tavan2(63))

//kamel Boodan ya nabodan
function Perfection(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum = sum + i;
        }
    }if (sum === number){
        return "YES"
    }else return "NO"
}

console.log(Perfection(6))
console.log(Perfection(27))

//prime number
function isPrime(x) {
    let i = 2;
    while (i < x) {
        if (x % i === 0) {
            return false
        }
        i++
    }
    return true
}


function findPrime(num1, num2) {
    for (let i = num1; i < num2; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}

findPrime(10, 21)

//password Jan Sakht
function isHard(n) {
    let strNum = n.toString();
    let m = strNum.length;
    for (let i = 0; i < m; i++) {
        if (!isPrime(Number(strNum.substring(0, m - i)))) {
            return false
        }
    }return true
}

function HardPass(n) {
    for (let i = 10 ** (n - 1); i < 10 ** n; i++) {
        if (isHard(i)) {
            console.log(i)
        }
    }
}

HardPass(3)