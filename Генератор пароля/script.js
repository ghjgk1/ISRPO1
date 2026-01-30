// Получаем ссылки на все необходимые элементы интерфейса
const genBtn = document.querySelector('#gen_btn');           // Кнопка "Сгенерировать"
const genPass = document.querySelector('#gen_pass');         // Поле для отображения пароля
const genRange = document.querySelector('#range');           // Ползунок длины пароля
const lengthValue = document.querySelector('#length-value'); // Элемент для отображения текущей длины

// Получаем ссылки на переключатели для выбора типов символов
const genUpper = document.querySelector('#upper');   // Переключатель для заглавных букв
const genLower = document.querySelector('#lower');   // Переключатель для строчных букв
const genNumber = document.querySelector('#number'); // Переключатель для цифр
const genSpecial = document.querySelector('#special'); // Переключатель для специальных символов

// Обновляем отображаемое значение длины пароля при изменении ползунка
genRange.addEventListener('input', () => {
    lengthValue.textContent = genRange.value;
});

// Добавляем обработчик события на кнопку "Сгенерировать"
genBtn.addEventListener('click', () => {
    // Обнуляем переменные для хранения символов и сгенерированного пароля
    let chars = '';      // Строка, содержащая все доступные символы для генерации
    let password = '';   // Строка для хранения сгенерированного пароля

    // Проверяем, какие типы символов выбрал пользователь и добавляем их в строку chars
    
    // Если выбран переключатель "Заглавные буквы", добавляем их в набор символов
    if (genUpper.checked) {
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    
    // Если выбран переключатель "Строчные буквы", добавляем их в набор символов
    if (genLower.checked) {
        chars += 'abcdefghijklmnopqrstuvwxyz';
    }
    
    // Если выбран переключатель "Цифры", добавляем их в набор символов
    if (genNumber.checked) {
        chars += '0123456789';
    }
    
    // Если выбран переключатель "Специальные символы", добавляем их в набор символов
    if (genSpecial.checked) {
        chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }

    // Проверяем, выбран ли хотя бы один тип символов
    if (chars === '') {
        // Выводим сообщение об ошибке
        genPass.textContent = 'Не выбрано ни одно условие';
        // Прерываем выполнение функции
        return;
    }

    // Генерируем пароль с помощью цикла
    for (let i = 0; i < genRange.value; i++) {
        // Генерируем случайное число от 0 до длины строки chars
        const randomIndex = Math.floor(Math.random() * chars.length);
        
        // Берем символ из строки chars по случайному индексу
        const randomChar = chars.charAt(randomIndex);
        
        // Добавляем случайный символ к паролю
        password += randomChar;
    }

    // Выводим сгенерированный пароль в поле отображения
    genPass.textContent = password;
});