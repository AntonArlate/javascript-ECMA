// А ещё VSC предлагает преобразовать в асинхронную функцию.
// при этом присваиваем переменной результат запроса fetch через await
// и его уже проверяем на код результата генерируя ошибку
// как понимаю хотя в этом случае не будет использован return, ключевое слово async заставит функцию в случае успеха вернуть status=ok
function saveUserData(userData) {
    // Используется метод fetch для отправки POST-запроса на URL-адрес /users
    // и сохранения данных о пользователе на удаленном сервере.
    // Второй аргумент fetch - объект настроек, включая метод запроса, заголовки и тело запроса.
    return fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // Тело запроса содержит данные пользователя, в виде JSON-строки
        body: JSON.stringify(userData)
    })
        // Обработка ответа от сервера с помощью метода then.
        // Мы проверяем, успешен ли запрос (ответ имеет статус 200) или нет и принимаем соответствующие действия.
        .then(response => {
            if (!response.ok) {
                // Если ответ сервера не успешен (не имеет статус 200), создаем и выбрасываем ошибку.
                throw new Error('Error saving user data');
            }
        });
}


// ПРИМЕР

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    // Заменой await здесь служит .then который заставит программу дождаться выполнения функции
    // Если всё хорошо и без ошибок то выполнится .then
    .then(() => {
        console.log('User data saved successfully');
    })
    // В ином случае перехватываем ошибку и обрабатываем её
    .catch(error => {
        console.log(error.message);
    });