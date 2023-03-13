// import './module.js';

/*
Область видимости — важная концепция, определяющая доступность переменных.

1. Блочная область видимости
Блок кода в JavaScript определяет область видимости переменных, объявленных с помощью ключевых слов const и let
создают:  if, for, while, {}

2. Область видимости функции
Функции в JavaScript создают область видимости для всех переменных,
независимо от того, с помощью какого ключевого слова они объявлены (var, const или let).

3. Глобальная область видимости
Глобальная область видимости является самой внешней областью.
Она доступна для любой внутренней или локальной области видимости.
В браузере глобальной является область видимости, создаваемая при загрузке JavaScript-файла, указанного в атрибуте src тега script

4. Область видимости модуля

5. Области видимости могут быть вложенными

6. Лексическая - Лексическая область видимости означает,
что доступность переменных определяется статически положением данных переменных внутри области видимости вложенной функции

7. Изоляция переменных

 */

// // Block scope
//
// const example = "some string"
//
// if (example) {
//     let example = "some string 2"
//     console.log(example)
//     example = "some string 2"
//     console.log(example)
// }
//
// console.log(example)

// var exampleVar2 = "some var string"
//
// {
//     var exampleVar2 = "some var string2"
// }
//
// console.log("After block: ", exampleVar2)

// function scope

// let a = "some var string"
//
// function foo() {
//     let a = "some var string2"
//     let b = "call me"
//     console.log(a)
// }
//
// foo()
//
// console.log(a)

//
// // console.log("After function: ", exampleVarMessage)
// console.log("After function: ", exampleVar)
//
//
// // Global scope
// var globalVar = "Hello from global variable";

// // Module scope
// console.log(exampleVariable)

// // Inner scope

// function foo() {
//     const message = "Dummy text"
//
//     if (true) {
//         const innerMessage = "It`s me"
//         console.log(message)
//     }
//
//     console.log(innerMessage)
// }
// foo()

// // Lexical scope
//
// function foo() {
//     // область видимости функции outer()
//     let v = 'Я из области видимости функции outer()!'
//
//     function bar() {
//         // область видимости функции inner()
//         console.log(v) // 'Я из области видимости функции outer()!'
//     }
//
//     return bar
// }
//
// const f = foo()
// f()

// // Isolation
// function foo() {
//     let count = 1
//     console.log(count) // 1
// }
//
// function bar() {
//     let count = 2
//     console.log(count) // 2
// }
//
// foo()
// bar()
