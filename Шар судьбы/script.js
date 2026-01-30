// Получаем ссылки на все необходимые элементы интерфейса
const answerBtn = document.getElementById('answer-btn'); // Кнопка "Узнать ответ"
const magicBall = document.querySelector('.magic-ball'); // Шар судьбы
const answerDisplay = document.getElementById('answer-display'); // Поле для отображения ответа

// Массив фраз-ответов, которые будут выпадать при нажатии кнопки
const answers = [
    "Да",
    "Нет",
    "Возможно",
    "Не думаю",
    "Скорее всего",
    "Попробуйте еще раз",
    "Это тайна",
    "Время покажет",
    "Все в ваших руках",
    "Нужно подумать",
    "Судьба решит за вас",
    "Ваше будущее неясно",
    "Все будет хорошо",
    "Не стоит надеяться",
    "Скоро все станет ясно"
];

// Добавляем обработчик события на кнопку "Узнать ответ"
answerBtn.addEventListener('click', () => {
    // Сначала скрываем предыдущий ответ, если он был
    answerDisplay.style.display = 'none';
    
    // Добавляем класс "thinking" для анимации увеличения шара
    magicBall.classList.add('thinking');
    
    // Генерируем случайный ответ из массива
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    
    // Через 3 секунд (3000 миллисекунд) убираем класс "thinking" и показываем ответ
    setTimeout(() => {
        // Убираем класс "thinking", чтобы шар вернулся к исходному размеру
        magicBall.classList.remove('thinking');
        
        // Показываем ответ в поле
        answerDisplay.textContent = randomAnswer;
        answerDisplay.style.display = 'block';
    }, 3000);
});