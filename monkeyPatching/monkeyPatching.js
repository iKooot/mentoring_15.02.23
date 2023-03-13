// Monkey patching
// в программировании возможность подмены методов и значений атрибутов классов программы во время её выполнения (runtime)

// // // сохраняем оригинальную функцию в переменную
// const originalIsNaN = Number.isNaN;
// //
// // создаем новую функцию, которая будет выводить случайное сообщение в консоль
// Number.isNaN = function(value) {
//     const message = ['Число не определено', 'Невозможно преобразовать в число', 'Введено не число'][Math.floor(Math.random() * 3)];
//     console.log(message);
//
//     // вызываем оригинальную функцию и возвращаем ее результат
//     return originalIsNaN(value);
// }
//
// // теперь при вызове функции Number.isNaN() в консоль будет выводиться случайное сообщение
// console.log(Number.isNaN('abc')); // "Невозможно преобразовать в число" и "true"
// console.log(Number.isNaN('123')); // "true"
// console.log(Number.isNaN(NaN)); // "Число не определено" и "true"

// //prompt
// const originalPrompt = window.prompt;
//
// // создаем новую функцию, которая будет выводить случайное сообщение в консоль
// window.prompt = function(value, defaultValue = '', extraParam) {
//     console.log(`Prompt param: ${extraParam}`);
//
//     // вызываем оригинальную функцию и возвращаем ее результат
//     return originalPrompt(value, defaultValue);
// }
//
// prompt('Hello', 1, 'some')
