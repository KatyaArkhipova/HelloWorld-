//Задание 1
function minimum(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}
console.log(minimum(8, 4));
console.log(minimum(6, 6));

//Задание 2
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}
console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(5)); 

//Задание 3
function squareAndLog(num) {
    const squaredNum = num * num;
    console.log(squaredNum);
}
squareAndLog(5); 

function squareNumber(num) {
    return num * num;
}
const result = squareNumber(5);
console.log(result);

//Задание 4
let age = Number(prompt('Сколько тебе лет?'));

if (age < 0) {
    alert('Вы ввели неправильное значение');
} else if (age < 13) {
    alert('Привет, друг!');
} else {
    alert('Добро пожаловать!');
}

//Задание 5
function validateAndMultiply(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}
console.log(validateAndMultiply(2, 3));
console.log(validateAndMultiply('a', 3));
console.log(validateAndMultiply(null, 3));

//Задание 6
function handleUserInput() {
    let inputValue = Number(prompt('Введите число'));
    
    if (isNaN(inputValue)) {
        return 'Переданный параметр не является числом';
    } else {
        let cubedValue = inputValue ** 3;
        return `${inputValue} в кубе равняется ${cubedValue}`;
    }
}
console.log(handleUserInput());

//Задание 7

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getArea = function() {
    return Math.PI * this.radius * this.radius;
};

Circle.prototype.getPerimeter = function() {
    return 2 * Math.PI * this.radius;
};

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getArea()); 
console.log(circle2.getArea()); 

console.log(circle1.getPerimeter());
console.log(circle2.getPerimeter());

