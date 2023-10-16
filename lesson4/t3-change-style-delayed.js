/*
Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"
*/

function changeStyleDelayed(elementId, delay) {
    setTimeout(function () {
        const element = document.getElementById(elementId);
        if (element) {
            // тут можно бы было опперировать классами
            element.style.backgroundColor = 'red';
            element.style.color = 'white';
        }
    }, delay);
}