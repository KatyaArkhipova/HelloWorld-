//Игра "Угадай число."

function startGame1() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guess = null;
    let attempts = 0;

    while (guess !== randomNumber) {
        guess = prompt("Введите ваше число (или напишите 'exit' для выхода):");

        if (guess?.toLowerCase() === 'exit') {
            alert("Игра завершена. Спасибо за игру!");
            return;
        }
        
        attempts++;

        const numericGuess = parseInt(guess, 10);

        if (isNaN(numericGuess)) {
            alert("Пожалуйста, введите действительное число или 'exit' для выхода.");
            continue;
        }
        if (numericGuess < 1 || numericGuess > 100) {
            alert("Пожалуйста, введите число в диапазоне от 1 до 100.");
        } else if (numericGuess < randomNumber) {
            alert("Слишком мало! Попробуйте еще раз.");
        } else if (numericGuess > randomNumber) {
            alert("Слишком много! Попробуйте еще раз.");
        } else {
            alert(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`);
        }
    }
}

//Игра "Простая арифметика".

function generateProblem() {
    const operations = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 10) + 1; 
    const num2 = Math.floor(Math.random() * 10) + 1; 
    const operation = operations[Math.floor(Math.random() * operations.length)];
    return {
        problem: `${num1} ${operation} ${num2}`,
        answer: eval(`${num1} ${operation} ${num2}`)
    };
}


function startGame2() {
    const { problem, answer } = generateProblem();
    const userAnswer = parseFloat(prompt(`Решите задачу: ${problem}`));

    
    if (userAnswer === answer) {
        alert('Верно! Молодец!');
    } else {
        alert(`Ошибка! Правильный ответ: ${answer}`);
    }
}

//Игра "Переверни текст".

function reverseText(text) {
    return text.split('').reverse().join('');
}

function startGame3() {
   const userInput = prompt("Введите текст, который хотите перевернуть:");
   
   if (userInput !== null) { 
        const reversedText = reverseText(userInput);
     alert(`Перевернутый текст: ${reversedText}`);
    }
}

//Игра "Викторина".

const quiz = [
    {
        question: "Какой цвет неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startQuiz() {
let score = 0;

for (let i = 0; i < quiz.length; i++) {
    const question = quiz[i];
    const userAnswer = prompt(question.question + "\n" + question.options.join("\n") + "\nВведите номер ответа (1, 2 или 3):");
    
    if (userAnswer === question.correctAnswer) {
        score++; 
    }
}

alert(`Вы набрали ${score} правильных ответов из ${quiz.length}`);

}

//Игра "Камень, ножницы,бумага".

function startGame4() {

    const choices = ['камень', 'ножницы', 'бумага'];

    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    let userChoice = prompt('Выберите: камень, ножницы или бумага');
    while (userChoice != 'камень' && userChoice != 'ножницы' && userChoice != 'бумага') {
        userChoice = prompt('Неверный выбор. Пожалуйста, выберите снова: камень, ножницы или бумага');
    }

    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        alert('Ничья!');
    } else if ((userChoice === 'камень' && computerChoice === 'ножницы') ||
               (userChoice === 'ножницы' && computerChoice === 'бумага') ||
               (userChoice === 'бумага' && computerChoice === 'камень')) {
        alert('Вы выиграли!');
    } else {
        alert('Вы проиграли...');
    }

    alert(`Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${computerChoice}`);
}
