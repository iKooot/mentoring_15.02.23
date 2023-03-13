/*
1. Почему нельзя для переменных присваивать NaN ?

Глобальное свойство NaN является значением, представляющим не-число (Not-A-Number).

Атрибуты свойства NaN
Записываемое	нет
Перечисляемое	нет
Настраиваемое	нет

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN

Boolean('', 0, false, undefined, NaN, null) = false
 */

// console.log(window);

// console.log('Initial', window.NaN);
// window.NaN = false
// console.log('After re-wright', window.NaN);
// console.log('To bool', Boolean(NaN))

// let number1;
// let number2;

// do {
//     number1 = +prompt("Enter number 1");
//     number2 = +prompt("Enter number 2");
//     console.log('do while')
// } while ( isNaN(number1) || isNaN(number2) || number1 === null || number2 === null || number1 === "" || number2 === "")

// do {
//     number1 = +prompt("Enter number 1");
//     number2 = +prompt("Enter number 2");
//
//     if (isNaN(number1) || isNaN(number2)) {
//         alert("Enter valid number")
//     } else {
//         console.log(`Result = ${ number1 + number2 }`)
//     }
// } while ( !number1 || !number2 )
