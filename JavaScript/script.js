
let push = document.querySelector('.push');
let input = document.querySelector('.input');
// let div = document.querySelector('.div');
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
    "five": "hi"
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

let out = function (param, block) {
    let div = document.querySelector(block);
    let text = "";
    for (let key in param) {
        text += param[key] + " " + '<br>';
    }
    div.innerHTML = text;
}
push.onclick = function () {
    out(a, 'div')
};
