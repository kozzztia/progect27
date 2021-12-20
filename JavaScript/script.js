
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

// let a = {
//     "one": "hello",
//     "two": "mahai",
//     "three": "hello",
//     "four": "hello",
//     "five": "aloha",
//     "six": "ola",
// };
let a = {
    "one": 1,
    "two": 2,
    "three": 4,
    "four": 99,
    "five": 123,
    "six": 12,
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

// --------------------------------------------------------task11

// push.onclick = () => {
//     let text = '';

//     for (let key in a) {
//         if (key === inputText.value) {
//             delete a[key];
//         } else {
//             text += key + '=' + a[key] + '<br>';
//         }

//     }
//     console.log(a);
//     div.innerHTML = text;
//     return a
// }

// --------------------------------------------------------task12

// push.onclick = () => {
//     let text = '';

//     for (let key in a) {
//         if (a[key] === inputText.value) {
//             delete a[key];
//         } else {
//             text += key + '=' + a[key] + '<br>';
//         }

//     }
//         console.log(a);
//     div.innerHTML = text;
//     return a
// }
//

// -------------------------------------------------------------task13


// push.onclick = () => {
//     let sum = 0;

//     for (let key in a) {
//         sum = sum + a[key];
//     }
//     div.innerHTML = `sum of all elements = ${sum}`;
// }

// -------------------------------------------------------------task14


let arr1 = {
    0: '1null', 1: '1one', 2: '1two', 3: '1three', 4: '1four'
}
let arr2 = {
    0: '2null', 1: '2one', 2: '2two', 3: '2three', 4: '2four'
}
let arr3 = {
    0: '3null', 1: '3one', 2: '3two', 3: '3three', 4: '3four'
}
let arr4 = {
    0: '4null', 1: '4one', 2: '4two', 3: '4three', 4: '4four'
}
let arr5 = {
    0: '5null', 1: '5one', 2: '5two', 3: '5three', 4: '5four'
}

let arr = {
    arr1,
    arr2,
    arr3,
    arr4,
    arr5,
}

// push.onclick = () => {

//     let p = +inputText.value;
//     for (let key in arr) {
//         console.log(arr[key][p]);
//     }
// }

// ---------------------------------------------------------task 15

// push.onclick = () => {
//     let text = "";
//     p = 0;
//     for (let key in arr) {
//         text += arr[key] + ' ';
//         p++;
//         text += '<br>'
//     }
//     console.log(text);
// }