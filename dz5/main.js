function convertTemperature(value, toFahrenheit) {
    if (toFahrenheit) {
        // Перевод из Цельсия в Фаренгейт
        return (value * 9 / 5) + 32;
    } else {
        // Перевод из Фаренгейта в Цельсий
        return (value - 32) * 5 / 9;
    }
}

// Тестируем функцию:
console.log(convertTemperature(25, true));   // 77 (25°C в Фаренгейты)
console.log(convertTemperature(77, false));  // 25 (77°F в Цельсии)









function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Ошибка: деление на ноль!";
            }
            return a / b;
        default:
            return "Неизвестная операция";
    }
}

// Тестируем функцию:
console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "/")); // 2
console.log(calculate(10, 0, "/")); // 


















// Функция расчетов (из задачи 1.3)
function calculate(a, b, operation) {
    switch (operation) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": 
            if (b === 0) return "Ошибка: деление на ноль!";
            return a / b;
        default: return "Ошибка";
    }
}

// Находим элементы на странице
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDiv = document.getElementById("result");
const buttons = document.querySelectorAll(".operation-btn");

// Перебираем все кнопки операций и вешаем на них клик
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Получаем значения из инпутов и преобразуем их в числа через parseFloat
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = button.getAttribute("data-op");

        // Проверка, ввели ли числа
        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = "Введите оба числа!";
            return;
        }

        // Считаем результат
        const res = calculate(num1, num2, operation);

        // Выводим результат в div
        resultDiv.textContent = `Результат: ${res}`;
    });
});





























