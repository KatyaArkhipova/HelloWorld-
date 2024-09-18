
//Задание №1
let a = 10;
alert(a);
a = 20;
alert(a)

//Задание №2
const releaseYear = 2007;
alert(`Год выпуска первого iPhone: ${releaseYear}`);

//Задание №3
let creatorName = "Брендон Эйч";
alert (`Имя создателя языка JS: ${creatorName}`);

//Задание №4
let b = 10;
let c = 2;

// Сумма
let sum = b + c;
alert(`Сумма: ${sum}`);

// Разность
let difference = b - c;
alert(`Разность: ${difference}`);

// Произведение
let product = b * c;
alert(`Произведение: ${product}`);

// Частное
let quotient = b / c;
alert(`Частное: ${quotient}`);

//Задание №5
let result = 2 ** 5;
alert(`Результат: ${result}`);

//Задание №6
let num1 = 9;
let num2 = 2;

let remainder = num1 % num2;

alert(`Остаток от деления ${num1} на ${num2}: ${remainder}`);

//Задание №7
let num = 1;
num += 5; 
num -= 3;
num *= 7;  
num /= 3;   
num++;      
num--;      
alert(num);

//Задание №8
let age = prompt('Сколько Вам лет?');
age = parseInt(age);
alert(`Ваш возраст: ${age}`);

//Задание №9
let user = {
    name: 'Василий Пупкин',
    age: 35,
    isAdmin: true
};
console.log(user);

//Задание №10
let userName = prompt('Как Вас зовут?');
alert(`Привет, ${userName}!`);