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

