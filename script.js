//Задание 1
const string = 'js';
const uppercaseString = string.toUpperCase();
console.log(uppercaseString);

//Задание 2

function filterByPrefix(arr, prefix) {
    return arr.filter(str => str.toLowerCase().startsWith(prefix.toLowerCase()));
}

const strings = ['Hello', 'world', 'Goodbye', 'jump', 'start'];
const prefix = 'st';
const filteredStrings = filterByPrefix(strings, prefix);
console.log(filteredStrings);

//Задание 3

const floorValue = Math.floor(32.58884);
console.log(floorValue);


const ceilValue = Math.ceil(32.58884);
console.log(ceilValue); 


const roundValue = Math.round(32.58884);
console.log(roundValue);

//Задание 4

const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);
console.log('Минимальное значение:', minValue);

const maxValue = Math.max(...numbers);
console.log('Максимальное значение:', maxValue);

//Задание 5

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}
getRandomNumber();

//Задание 6

function createRandomArray(limit) {
    const range = limit - 1; 
    const arraySize = Math.floor(limit / 2); 
    const randomArray = [];

    for (let i = 0; i < arraySize; i++) {
        randomArray.push(Math.floor(Math.random() * range));
    }

    return randomArray;
}
const limit = 10;
const randomArray = createRandomArray(limit);
console.log(randomArray); 

//Задание 7
function getRandomNumberInRange(min, max) {
    const range = max - min + 1;
    const randomNumber = Math.floor(Math.random() * range) + min;
    return randomNumber;
}

const min = 1;
const max = 10;
const randomNumber = getRandomNumberInRange(min, max);
console.log(randomNumber);

//Задание 8

const today = new Date();

console.log(`${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`);

//Задание 9

const currentDate = new Date();

const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log("Текущая дата: " + currentDate.toLocaleDateString());
console.log("Дата через 73 дня: " + futureDate.toLocaleDateString());

//Задание 10

function formatDate(date) {
    const dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    const dayName = dayNames[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedDate = `Дата: ${day} ${month} ${year} — это ${dayName}.\nВремя: ${hours}:${minutes}:${seconds}`;
    return formattedDate;
}

const date = new Date();
const formattedDate = formatDate(date);
console.log(formattedDate);