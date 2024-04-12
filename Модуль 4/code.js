function summ(a, n) {
    let result = 0; // Инициализация переменной для хранения суммы
    let denominator = 1; // Инициализация переменной для хранения знаменателя

    // Цикл для вычисления каждого члена суммы
    for (let i = 1; i <= n; i++) {
        denominator *= a + i - 1; // Обновление знаменателя
        result += 1 / denominator; // Добавление очередного члена в сумму
    }

    return result; // Возвращение общей суммы
}

// Добавление обработчика события click для кнопки с идентификатором 'calculateButton'
document.getElementById('calculateButton').addEventListener('click', function() {
    // Получение значения из поля ввода 'inputA' и преобразование его в тип float
    const inputA = parseFloat(document.getElementById('inputA').value);
    // Получение значения из поля ввода 'inputN' и преобразование его в тип integer
    const inputN = parseInt(document.getElementById('inputN').value);
    // Получение контейнера для вывода результата по идентификатору 'result'
    const resultContainer = document.getElementById('result');

    // Проверка корректности введенных данных
    if (!isNaN(inputA) && !isNaN(inputN) && inputN > 0 && Number.isInteger(inputN) && inputA > 0) {
        // Если введенные данные корректны, вычисляем выражение и выводим результат
        const result = summ(inputA, inputN);
        resultContainer.textContent = 'Ответ = ' + result.toFixed(4); // Вывод результата с округлением до 4 знаков после запятой
    } else {
        // Если данные введены некорректно, выводим сообщение об ошибке
        resultContainer.textContent = 'Ошибка ввода. Пожалуйста, введите корректные значения (только положительные числа).';
    }
});
function clearInputs() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputN').value = '';
}