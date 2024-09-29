//Задание 1
const array = [1, 5, 4, 10, 0, 3];

for (const element of array) {
    if (element === 10) {
        console.log(element);
        break;
    }
    console.log(element);
}

//Задание 2

const newarray = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    if (newarray[i] === 4) {
        console.log("Значение 4 находится на позиции " + i);
        break;
    }
}

//Задание 3
const numbers = [1, 3, 5, 10, 20];

const joinedNumbers = numbers.join(' ');

console.log(joinedNumbers);



//Задание 4
const rows = 3;
const cols = 3;
const matrix = [];

for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
        row.push(1);
    }
    matrix.push(row);
}

console.log(matrix);

//Задание 5

const array1 = [1, 1, 1];

array1.push(2, 2, 2);

console.log(array1);

//Задание 6
const array2 = [9, 8, 7, 'a', 6, 5];
array2.sort((a, b) => a - b);
array3 = array2.filter(item => typeof item === 'number');

console.log(array3);

//Задание 7
const number = [9, 8, 7, 6, 5];

let userGuess = prompt('Попробуйте угадать число');
userGuess = parseInt(userGuess);

if (number.includes(userGuess)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//Задание 8
const originalString = 'abcdef';

const reversedString = originalString.split('').reverse().join('');

console.log(reversedString);

//Задание 9
const multiDimensionalArray = [[1, 2, 3], [4, 5, 6]];

const flattenedArray = [].concat(...multiDimensionalArray);

console.log(flattenedArray);

//Задание 10
const number1 = [...Array(10).keys()].map(i => i + 1);

for (let i = 0; i < number1.length - 1; i++) {
    const currentNumber = numbers[i];
    const nextNumber = number1[i + 1];
    const sum = currentNumber + nextNumber;
    console.log(`Сумма текущего и следующего элементов: ${sum}`);
}

//Задание 11
function squares(arr) {
    return arr.map(num => num * num);
}

const number2 = [1, 2, 3, 4, 5];
const squaresOfNumbers = squares(number2);
console.log(squaresOfNumbers);

//Задание 12
function wordLengths(words) {
    return words.map(word => word.length);
}
const sentences = ["Привет", "Как дела?", "Отлично!", "Рад тебя видеть"];
const lengths = wordLengths(sentences);
console.log(lengths);

//Задание 13
function negativeValues(arr) {
    return arr.filter(num => num < 0);
}
const number4 = [-1, 2, -3, 4, -5];
const negativeNumbers = negativeValues(number4);
console.log(negativeNumbers);

//Задание 14
const number5 = [];
for (let i = 0; i < 10; i++) {
    number5.push(Math.floor(Math.random() * 10));
}

const evenNumbers = number5.filter(num => num % 2 === 0);

console.log("Исходный массив:", number5);
console.log("Массив с чётными числами:", evenNumbers);

//Задание 15
const number6 = [];
for (let i = 0; i < 6; i++) {
    number6.push(Math.floor(Math.random() * 10) + 1);
}
const average = number6.reduce((accumulator, currentValue) => accumulator + currentValue) / number6.length;

console.log(`Среднее арифметическое: ${average}`);