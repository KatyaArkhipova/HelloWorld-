
//HW-4

//Задание №1

for (let i = 1; i <= 2; i++) {
    console.log('Привет');
}

//Задание №2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


//Задание №3

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание №4

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
  };
  
  for (const key in obj) {
    const value = obj[key];
    console.log(`${key} — зарплата ${value} долларов.`);
  }

  //Задание №5

  function main() {
    let n = 1000;
    let num = 0;

    while (n >= 50) {
        n /= 2;
        num++;
    }

    console.log(`Результат: ${n}`);
    console.log(`Количество итераций: ${num}`);
    }

    main();

  //Задание №6

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const firstFridayNumber = today.getDay() % 7;
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  for (let day = firstFridayNumber; day <= totalDaysInMonth; day++) {
      if ((day % 7 === firstFridayNumber) || (day === 1)) {
          const date = new Date(currentYear, currentMonth, day);
          console.log(`Сегодня пятница, ${date.getDate()} число. Необходимо подготовить отчет.`);
      }
  }
