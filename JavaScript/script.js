
let push = document.querySelector('.push');
let inputText = document.querySelector('.inputText');
// let inputNumber = document.querySelector('.inputNumber');
let div = document.querySelector('.div');
let body = document.querySelector('body');

// -------------------------------------------------------------------------------unit 13  асоциантивные массивы

// const a = {
//     'a': 5,
//     'b': 'hi',
//     'c': true,
//     'd': 5.5,
//     y43: 1999,
// };


// a.yyy = 2 ** 2;
// // push.onclick = () => {
// //     console.log(a)
// //     div.innerHTML = a.c;
// //     div.innerHTML += a.a;
// // }


// push.onclick = () => {
//     let text = '';
//     for (let key in a)

//         text += a[key] + ' ';

//     div.innerHTML = text;
// }

// -----------------------------------------------------------------task1

// let a1 = {
//     "one": 15,
//     "two": 16,
//     "five": 20
// };

// push.onclick = () => {
//     div.innerHTML = a1.two;
//     input.value = a1.five;
// }

// ---------------------------------------------------------------------task2

let a = {
    "one": "hello",
    "two": "mahai",
    "three": "hello",
    "four": "hello",
    "five": "aloha",
    "six": "ola",
};


// push.onclick = (e) => input.value = a.five;

// ---------------------------------------------------------task3

// push.onclick = (text) => {
//     text = '';
//     let t = a.five;
//     text = t;

//     return div.innerHTML = text;
// }

// ---------------------------------------------------------task4

// push.onclick = (text) => {
//     text = "";
//     for (let key in a) {
//         text += a[key] + " " + '<br>';
//     }
//     div.innerHTML = text;

// }

// push.onclick = () => {
//     let text = "";
//     for (let key in a) text += a[key] + " " + '<br>';
//     return div.innerHTML = text;
// }

// push.onclick = () => {
//     let text = "";
//     for (let key in a) {
//         text += a[key] + " " + '<br>';
//         div.innerHTML = text;
//     }
// }
// -------------------------------------------------task5

// let out = function (param, block) {
//     let div = document.querySelector(block);
//     let text = "";
//     for (let key in param) {
//         text += param[key] + " " + '<br>';
//     }
//     div.innerHTML = text;
// }
// push.onclick = function () {
//     out(a, 'div')
// };

// ---------------------------------------------------task6

// push.onclick = function () {
//     let text = inputText.value;
//     number = inputNumber.value;
//     let textOut = '';

//     a[number] = text;
//     for (let key in a) {
//         textOut += a[key] + " " + '<br>';
//     }
//     div.innerHTML = textOut;
//     // return a
// }

// --------------------------------------------------task7

// push.onclick = () => {

//     let text = '';
//     for (let key in a) {
//         if (key === inputText.value) {
//             console.log(a[key]);
//             text += key;
//         } else {

//         }
//     }
//     div.innerHTML = text;
// }

// -----------------------------------------------------task8      Object.keys(array).length   длинна асоциативного масива!!!!!!

// push.onclick = () => {
//     let text = "";
//     let p = 0;
//     for (let key in a) {
//         if (key === inputText.value) {
//             console.log(key);
//             text += a[key];
//         } else {
//             p++;
//             if (p == Object.keys(a).length) {
//                 x = prompt('введите значение')
//                 a[inputText.value] = x;
//             }
//         }
//     }
//     div.innerHTML = text;
//     inputText.innteHTML = '';
//     console.log(a)
//     return a;
// }

// -----------------------------------------------------task 9


// push.onclick = () => {
//     let text = '';
//     let p = 0;

//     for (let key in a) {
//         if (a[key] === inputText.value) {
//             text += key + ' ';
//         } else {
//             p++;
//             if (p === Object.keys(a).length) {
//                 text = 'none';
//             }
//         }
//     }
//     div.innerHTML = text;
// }


// -----------------------------------------------------task10


// let test = function (array, type) {
//     let text = '';
//     let p = 0;
//     type = inputText.value;
//     for (let key in array) {
//         if (array[key] === type) {
//             text = true;
//             break;
//         } else {
//             p++;
//             if (p === Object.keys(array).length) {
//                 text = false;
//             }
//         }
//     }
//     div.innerHTML = text;
// }

// push.onclick = function () {

//     test(a, inputText.value)
// }