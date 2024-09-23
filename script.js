
//HW-3

//Задание №1

let correctPassword = 'пароль';
let enteredPassword = prompt('Введите пароль');
if (enteredPassword === correctPassword) {
    alert('Пароль введён верно');
} else {
    alert('Пароль введён неправильно');
}

//Задание №2

let c = 2;
if ((c > 0) && (c < 10)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Проверка с разными значениями
//c=0
c = 0;
if ((c > 0) && (c < 10)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//c=10
 c = 10;
if ((c > 0) && (c < 10)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//c=-3
 c = -3;
if ((c > 0) && (c < 10)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//c=2
 c = 2;
if ((c > 0) && (c < 10)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание №3

let a = 200;
let b = 50;

// Проверка условий
if ((a > 100) || (b > 100)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

a = 20;
b = 50;
if ((a > 100) || (b > 100)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//неверно

a = 200;
b = 50;
if ((a > 100) || (b > 100)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//верно

//Задание №4

let d = '2';
let e = '3';

d = Number(d);
e = Number(e);
let result = d + e;
alert(result); 

//Задание №5

let monthNumber = 12;

switch (monthNumber) {
    case 1:
    case 2:
    case 3:
        console.log('Зима');
        break;
    case 4:
    case 5:
    case 6:
        console.log('Весна');
        break;
    case 7:
    case 8:
    case 9:
        console.log('Лето');
        break;
    case 10:
    case 11:
    case 12:
        console.log('Осень');
        break;
    default:
        console.log('Неправильный номер месяца');
        break;
}
