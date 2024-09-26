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


