/*
Повсюду в интернете показывают примеры работ используя var. Вы с Артуром запрещаете var. Какова причина?

var - Объявление переменной всегда обрабатывается до выполнения кода,
где бы она ни находилась. Область видимости переменной, объявленной через var, это её текущий контекст выполнения.
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/var

let - позволяет объявить локальную переменную с областью видимости, ограниченной текущим блоком кода.

Областью видимости переменных, объявленных ключевым словом let, является блок, в котором они объявлены, и все его подблоки.
В этом работа директива let схожа с работой директивы var.
Основная разница заключается в том, что областью видимости переменной, объявленной директивой var, является вся функция, в которой она объявлена

Error


switch (x) {
    case 0:
        let foo;
        break;

    case 1:
        let foo; // Выброс SyntaxError из-за повторного объявления переменной
        break;
}



https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let

const - создаёт константу, чья область действия может быть как глобальной, так и локальной внутри блока, в котором она объявлена.
Глобальные константы не становятся свойствами объекта window
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const

 */
// var example

// var variable you can find in window object

// var global = "example"
//
// console.log("before", a); // a = undefined
//
// var a = "global";
//
// console.log("after", a);
//
// if (true) {
//     console.log("block before", a); // a = global
//      // re-wright a !!!!
//     var a = "block";
//
//     console.log("block after", a); //  a = block
// }
//
// console.log(a); // a = block

// let example

// console.log("before", a)

// let a = "global";
//
// console.log("after", a) // a = global
//
// {
//     // console.log("block before", a)
//
//     let a = "block"
//
//     console.log("block after", a)
// }
//
// a = "block2"
//
// console.log("global", a);
//
// const example

// console.log("before", a)
//
// const a = "global";
//
// console.log("after", a)
//
// {
//     console.log("block before", a)
//
//     const a = "block"
//
//     console.log("block after", a)
// }

