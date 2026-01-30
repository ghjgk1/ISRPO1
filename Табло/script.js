// Получаем ссылки на все необходимые элементы интерфейса
const goalBtn = document.getElementById('goal-btn'); // Кнопка "Гол"
const checkBtn = document.getElementById('check-btn'); // Кнопка "Проверить результат"
const team1ScoreElement = document.getElementById('team1-score'); // Элемент для отображения счёта команды 1
const team2ScoreElement = document.getElementById('team2-score'); // Элемент для отображения счёта команды 2
const resultDisplay = document.getElementById('result-display'); // Элемент для отображения результата

// Переменные для хранения счёта команд
let team1Score = 0; // Счёт команды 1
let team2Score = 0; // Счёт команды 2

// Добавляем обработчик события на кнопку "Гол"
goalBtn.addEventListener('click', () => {
    // Генерируем случайное число 0 или 1 для определения, какой команде засчитать гол
    // Math.random() возвращает число от 0 до 1 (не включая 1)
    // Math.round() округляет до ближайшего целого (0 или 1)
    const randomTeam = Math.round(Math.random());
    
    // Если случайное число равно 0, гол засчитывается команде 1
    if (randomTeam === 0) {
        team1Score++; // Увеличиваем счёт команды 1 на 1
        team1ScoreElement.textContent = team1Score; // Обновляем отображение счёта
    } 
    // Если случайное число равно 1, гол засчитывается команде 2
    else {
        team2Score++; // Увеличиваем счёт команды 2 на 1
        team2ScoreElement.textContent = team2Score; // Обновляем отображение счёта
    }
});

// Добавляем обработчик события на кнопку "Проверить результат"
checkBtn.addEventListener('click', () => {
    // Сравниваем счёт команд и определяем результат матча
    
    // Если счёт команды 1 больше счёта команды 2
    if (team1Score > team2Score) {
        // Команда 1 победила
        resultDisplay.textContent = 'Победила Команда 1!';
    } 
    // Если счёт команды 2 больше счёта команды 1
    else if (team2Score > team1Score) {
        // Команда 2 победила
        resultDisplay.textContent = 'Победила Команда 2!';
    } 
    // Если счёт команд равен
    else {
        // Ничья
        resultDisplay.textContent = 'Ничья!';
    }
});