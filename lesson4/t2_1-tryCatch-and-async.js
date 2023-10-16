/* 
Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки 
*/

/*
данный метод реализован первым. Так как синтаксис try/catch мне привычней чем .then. 

кроме того здесь есть пример использования async
*/

async function saveUserData(userData) {
    try {
        // Используется метод fetch для отправки POST-запроса на URL-адрес /users
        // и сохранения данных о пользователе на удаленном сервере.
        // Второй аргумент fetch - объект настроек, включая метод запроса, заголовки и тело запроса.
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Error saving user data');
        }
    } catch (error) {
        throw error;
    }
}


// ПРИМЕР

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

try {
    // при помощи ключевого слова await ждём результата от async функции
    await saveUserData(user);
    console.log('User data saved successfully');
} catch (error) {
    console.log(error.message);
}