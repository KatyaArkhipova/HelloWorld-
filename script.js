//Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 people.sort((a, b) => a.age - b.age);
 
 console.log(people);

//Задание 2

function isPositive(val) {
    return val > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFn) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (ruleFn(element)) {
            result.push(element);
        }
    }
    
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale)); 

//Задание 3

const timerId = setInterval(() => {
    const now = new Date();
    console.log(`${now.toString()} —-------------- 3 секунды прошло`);
}, 3000); 


setTimeout(() => {
    clearInterval(timerId);
    console.log('30 секунд прошло');
}, 30000); 

//Задание 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

//Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { 
            cb(); 
        }
    }, 1000); 
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));
