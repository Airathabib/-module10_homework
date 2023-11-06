// Задание 1

let num = +prompt("Введите число");
if (isNaN(num) || typeof (num) !== 'number') {
  console.log('Ошибка, введено НЕ ЧИСЛО')
}
else if (num % 2 === 0) {
  console.log("Число четное")
} else {
  console.log("Число нечетное")
}

// Задание 2

let x;

x = 42;

if (typeof x == 'number') {
  console.log("Число")
}
else if (typeof x == 'string') {
  console.log("Строка")
}
else if (typeof x === 'boolean') {
  console.log("Логический тип x")
} else {
  console.log("Тип x не определен")
}

// 3 Задание

let str = 'I love Javascrip';
str = str.split('').reverse().join('');
console.log(str);

// Задание 4

let randomNumber;

randomNumber = Math.ceil(Math.random() * 100)
console.log(randomNumber);

//  Задание 5

const arr = [1, 2, 0, 42, 73, 'string', null];
console.log(arr.length)
for (i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// Задание 6

let array = ["жираф", 2, "утка", "крокодил", "слон", 4, "утка", 73];

array = array.length !== new Set(array).size
console.log(array)

// Задание 7

const randomArr = [42, 31, 5, 78, 73, null, true, 55, 19, 52, undefined, 0];
let zeroNumber = 0,
  oddNumder = 0,
  evenNumber = 0,
  regularNumber = 0;

for (i = 0; i < randomArr.length; i++) {
  if (typeof randomArr[i] === 'number' || !isNaN(randomArr[i])) {
    regularNumber += 1;
    if (randomArr[i] === 0) {
      zeroNumber += 1
    }
    else if (randomArr[i] % 2 === 0) {
      evenNumber += 1;
    }
    else {
      oddNumder += 1;
    }
  }
}
console.log(`В массиве randomArr: ${regularNumber} цифр, ${zeroNumber} нулей, ${evenNumber} четных цифр, ${oddNumder} нечетных цифр.`);


// Задание 8

const manInfo = new Map([
  ['name', 'Sergey'],
  ['surname', 'Ivanov'],
  ['age', 30]
])
manInfo.forEach((value, key) => {
  console.log(`${key} = ${value}`)
})