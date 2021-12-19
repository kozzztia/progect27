// ----------------------------------------unit6


// let div = document.querySelector('.div');
// let input = document.querySelector('.input');
// let input1 = document.querySelector('.input1');
// let push = document.querySelector('.push');
// let box = document.querySelector('.box');


// push.addEventListener('click', () => {

// for (let i = 0; i < input.value; i++) {
//   for (let k = 0; k < i; k++) {
//     div.innerHTML += '* '
//   }
//   div.innerHTML += '<br>';
// }

// div.innerHTML = '';
// for (let i = 1; i <= 10; i++) {
//   div.innerHTML += `${input.value}*${i}= ${input.value * i}<br>`;
// }

// for (let i = 1; i <= input.value; i++) {
//   for (let k = 1; k <= input.value; k++) {
//     div.innerHTML += `${i}*${k}= ${k * i}<br>`;
//   }
//   div.innerHTML += '<br>';
// })



// ---------------------------------task1;
// for (let i = 0; i < input.value; i++) {
//   for (let k = 0; k < input.value; k++) {
//     div.innerHTML += '*'
//   }
//   div.innerHTML += '_' + '<br>';
// }
// ---------------------------------task2;
// for (i = 1; i <= input.value; i++) {
//   div.innerHTML += i + '<br>';
//   for (k = 1; k <= 3; k++) {
//     div.innerHTML += '*_';
//   }
//   div.innerHTML += '<br>';
// }
// for (i = 1; i <= input.value; i++) {
//   div.innerHTML += i + '<br>';
//   for (k = 1; k <= input.value; k++) {
//     div.innerHTML += '*_';
//     if (k == input.value) {
//       div.innerHTML += '<br>';
//     }
//   }
// }
// -------------------------------------task3

// for (k = 1; k <= 4 * input.value; k++) {
//   div.innerHTML += '*_';
//   if (k % 4 == 0) {
//     div.innerHTML += '<br>'
//   }
// }

// ---------------------------------------task4

// for (i = 1; i <= input.value; i++) {
//   div.innerHTML += `${i}_`;
//   for (k = 1; k <= 5; k++) {
//     div.textContent += k + ' ';
//   }
// }

// ------------------------------------------task5
// for (i = 1; i <= input.value; i++) {
//   for (k = 1; k <= input.value; k++) {
//     for (j = 1; j >= 0; j--) {
//       div.innerHTML += j;
//     }
//     if (k % input.value == 0) {
//       div.innerHTML += '<br>';
//     }
//   }
// }

// -----------------------------------------task6

// for (i = 0; i <= input.value; i++) {
//   for (k = 0; k < 6; k++) {
//     if (k == 1 || k == 3) {
//       div.innerHTML += 0;
//     }
//     else if (k == 0 || k == 4) {
//       div.innerHTML += 1;
//     }
//     else {
//       div.innerHTML += 'x';
//     }
//   }
//   div.innerHTML += '<br>';
// }

// ----------------------------------------task7

// for (i = 0; i <= input.value; i++) {
//   for (k = 0; k <= i; k++) {
//     div.innerHTML += '*';
//   }
//   div.innerHTML += '<br>';
// }

// ----------------------------------------task8

// for (i = input.value; i >= 0; i--) {
//   for (k = 0; k <= i; k++) {
//     div.innerHTML += '*';
//   }
//   div.innerHTML += '<br>';
// }

// ----------------------------------------task9

// for (i = 0; i <= input.value; i++) {
//   for (j = 0; j <= i; j++) {
//     div.innerHTML += `${i}*`
//   }
//   div.innerHTML += '<br>';
// }

// ----------------------------------------task10
// for (i = 0; i <= input.value; i++) {
//   for (k = 1; k <= 10; k++) {
//     if (k % 10 == 0) {
//       div.innerHTML += `${i + 1}0`;
//     }
//     else {
//       div.innerHTML += `${i}${k} `;
//     }
//   }
//   div.innerHTML += '<br>'
// }

// ------------------------------------------task11
// for (i = input.value; i <= 9; i++) {
//   for (k = 1; k <= 9; k++) {
//     div.innerHTML += `${i} * ${k} = ${i * k} <br>`;
//   }
//   div.innerHTML += '<hr>';
// }

// ----------------------------------------------task12

// for (let i = 0; i < input.value / 2; i++) {
//   for (let k = 0; k < input.value; k++) {
//     div.innerHTML += '*';
//   }
//   div.innerHTML += '<br>'
// }
// -----------------------------------------------task13
// push.addEventListener('click', () => {
//   div.innerHTML = "";
// for (let i = 0; i < 3; i++) {
//   if (i == 0) {
//     div.innerHTML += '&emsp;' + '&emsp;';
//   }
//   else if (i == 1) {
//     div.innerHTML += '&emsp;';
//   }
//   for (let j = 0; j < 5; j++) {
//     div.innerHTML += '*';
//   }
//   div.innerHTML += "<br>";
// }
// -----------------------------------------------task14

// for (let i = 2; i <= input.value; i++) {
//   for (let k = 1; k <= i; k++) {
//     div.innerHTML += "*";
//   }
//   div.innerHTML += '<br>'
// }
// for (let z = input.value; z > 2; z--) {
//   for (let y = z; y > 1; y--) {
//     div.innerHTML += "*";
//   }
//   div.innerHTML += '<br>'
// }
// div.style.textAlign = 'center'
// value = '';
// for (i = 1; i <= 10; i++) {
//   for (j = 1; j <= 10; j++) {
//     if (i == 10 && j >= 10 - 2) {
//       value += ' &emsp; ';
//     }
//     else if (i == 1 && j >= 10 - 2) {
//       value += ' &emsp; ';
//     }
//     else {
//       if (j > 1 && j < 10) {
//         value += ' +';
//       }
//       else {
//         value += ' * ';
//       }
//     }
//   }
//   value += '<br>';
// }
// div.innerHTML = value;






// })
// let one = function () {
//   console.log('1')
// }
// push.onclick = one;

// console.log(1 + one())
// console.log(one())

// let two = function (a = 2, b = 2) {
//   return a * b;
// }

// console.log(two() * two());
// let c = two(2, 4);
// let d = two(2, 5);

// div.innerHTML = c + d;

// ---------------------------------------------------------------------rundom
// function random(min, max) {
//   return min + Math.floor(Math.random() * (max - min))
// }
// push.addEventListener('click', () => {
//   div.innerHTML = '';
//   let text = '';
//   for (i = 0; i <= input.value; i++) {
//     text += random(1, input.value) + ' ';
//   }
//   div.innerHTML += text;
// })
// ========================================================================unit7


// --------------------------------task1

// function t1() {
//   let a1 = input.value;
//   div.innerHTML += a1;
// }
// push.addEventListener('click', t1)

// ----------------------------------task2

// function t2() {
//   let a2 = +input.value;
//   return a2;
// }
// push.addEventListener('click', () => {
//   div.innerHTML += t2() + t2();
// })
// ----------------------------------task3
// function t3(a, b) {
//   return a * b;
// }
// push.addEventListener('click', () => {
//   let c = t3(3, 4);
//   let d = t3(4, 4);
//   div.innerHTML = c + ' ' + d;
// })
// ------------------------------------task4

// function t4() {
//   year = +input.value;
//   if (year <= 1900 || year >= 2021) {
//     return 'false';
//   }
//   else {
//     return 2021 - year;
//   }
// }
// push.addEventListener('click', () => {
//   div.innerHTML = t4() + ' years old';
//   input.value = "";
// })


// ---------------------------------------task5
// function task5(name) {
//   // name = input.value;
//   return name;
// }
// push.addEventListener('click', () => {
//   div.innerHTML = 'hello ' + task5('kostia');
// })
// ---------------------------------------task6

// function task6(min, max) {
//   min = +input.value;
//   max = +input1.value;
//   return min + Math.floor(Math.random() * (max - min));
// }
// push.onclick = function () {
//   div.innerHTML = task6();
// }

// -----------------------------------------task7

// function task7(min, max) {
//   return min + Math.random() * (max - min);
// }
// push.onclick = function () {
//   div.style.backgroundColor = `rgba(${task7(0, 255)},${task7(0, 255)},${task7(0, 255)},${task7(0, 1)})`;
//   console.log(div.style.backgroundColor);
// }

// ---------------------------------------task8 trim() clear space around

// function task8() {
//   let value = input.value;
//   let valueN = input.value.trim();
//   input.value = valueN;
//   console.log(valueN.length)
//   return valueN
// }
// push.onclick = () => {
//   div.innerHTML = task8();
// };
// ------------------v2
// function task8() {
//   return input.value.trim();
// }
// push.onclick = () => {
//   div.innerHTML = task8();
// };

// ------------------------------------task9

// function task9() {
//   num = +input.value;
//   text = "";
//   if (num % 2 === 0) {
//     text = true;
//   }
//   else if (num % 2 != 0) {
//     text = false;
//   }
//   else {
//     text = 'ERROR'
//   }
//   div.innerHTML = text;
//   input.value = ""
//   return
// }
// push.onclick = () => {
//   task9();
// }

// ------------------------------------task10

// function task10() {
//   num1 = input.value;
//   num2 = input1.value;
//   text = "";
//   if (num1 > num2) {
//     text = num1;
//   }
//   else if (num1 < num2) {
//     text = num2;
//   }
//   else if (num1 == num2) {
//     text = num1 || num2;
//   } else {
//     text = 'incorect numbers, try with something alse'
//   }
//   div.textContent = text;
// }

// push.onclick = task10;

// =================================================================== innerHTML / textContent

// // console.log(box.innerHTML)
// // console.log(box.textContent)

// div.innerHTML += box.innerHTML;
// div.innerHTML += box.innerText;
// div.innerHTML += box.textContent;


// //
// let span = document.querySelector('span');
// span.addEventListener('mouseover', function () {
//     console.log('go')
//     span.classList.add('blockActive');
// })
// span.addEventListener('mouseout', function () {
//     console.log('stop')
//     span.classList.remove('blockActive');
// })
// ----------------------------------------------------------------------unit8 while , do while

// let fun = () => {
//     for (let i = 0; i < input.value; i++) {
//         div.innerHTML += i + " ";
//     }
//     div.innerHTML += '<br>';
// }
// push.onclick = fun;
// let fun1 = () => {
//     text = "";
//     div.innerHTML = "";
//     let k = 0;
//     while (k < input.value) {
//         text += ' k = ' + k;
//         k++;
//     }
//     div.innerHTML += text;
// }
// push.onclick = fun1;

// let fun = () => {
//     let sum = 0;
//     let p = 0;
//     while (p <= input.value) {
//         p++;
//         sum = sum + p;

//     }
//     div.innerHTML = 'sum = ' + sum;
// }
// push.onclick = fun;

// let fun = () => {
//     let flag = input.value;
//     let sum = '';
//     let p = 0;
//     let p1 = 0;
//     // -----------------
//     while (p < input.value) {
//         p++;
//         while (p1 < input.value) {
//             p1++;
//             if (p1 < flag) {
//                 sum += 'o ';
//             } else {
//                 sum += '* ';
//             }
//         }
//         sum += '<br>';
//         flag--;
//     }
//     div.innerHTML = sum;
// }
// push.onclick = fun;

// ----------------------------------task1

// push.onclick = () => {
//     num = +input.value;
//     text = "";
//     i = 0;
//     while (i < num) {
//         i++
//         text += i + " ";
//     }
//     div.innerHTML = text;
// }
// -------------------------------task2

// push.onclick = () => {
//     let num = +input.value;
//     let text = ' ';
//     let i = 0;
//     while (i < num) {
//         i = i + 2;
//         text += `${i} `
//     }
//     div.innerHTML = text;
// }

// ---------------------------------task3
// push.onclick = () => {
//     let num = +input.value;
//     let text = "";
//     let i = num;
//     while (i > 7) {
//         i--;
//         text += `${i} `;
//     }
//     div.innerHTML = text;
// }

// ---------------------------------task4

// push.addEventListener('click', function () {
//     let num = +input.value;
//     let text = '';
//     let i = num;
//     if (i < 35) {
//         text += 'error';
//     }
//     while (i > 35) {
//         i--;
//         text += `${i}_`;
//     }
//     div.innerHTML = text;
// })

// ----------------------------------task 5

// push.onclick = () => {
//     let num = +input.value;
//     let text = '';
//     let i = 0;
//     while (i < num) {
//         i++;
//         if (i % 2 == 0) {
//             text += `${i}_**`;
//         } else { text += `${i}_*`; }
//     }
//     div.innerHTML = text;
// }

// ------------------------------task 6

// push.onclick = () => {
//     let num = +input.value;
//     let i = 0;
//     let text = "";
//     while (i < num) {
//         i++;
//         let k = 0;
//         while (k < num) {
//             k++;
//             text += '* '
//         }
//         text += '<br>'
//     }
//     div.innerHTML = text;

// }

// ----------------------------task 7

// push.onclick = () => {
//     let num = +input.value;
//     let text = "";
//     let p = 0;
//     if (input.value <= 0) {
//         text += "error"
//     } else {
//         while (p <= num) {
//             text += `${p} `;
//             p++;
//         }
//     }
//     div.innerHTML = text;
// }

// ------------------------task8

// push.onclick = () => {
//     let text = "";
//     let num = + input.value;
//     let num1 = + input1.value;
//     let a;
//     let b;
//     if (num < num1) {
//         a = num;
//         b = num1;
//     } else if (num > num1) {
//         b = num;
//         a = num1;
//     } else if (num > num1) {
//         b = num;
//         a = num1;
//     } else {
//         text += "incorrect question";
//     }
//     while (a <= b) {
//         text += `${a} `;
//         a++;
//     }
//     div.innerHTML = text;
// }

// ----------------------------task9

// push.onclick = function () {
//     let num = +input.value;
//     let num1 = +input1.value;
//     if (num < num1) {
//         fun9(num, num1)
//     } else if (num > num1) {
//         fun9(num1, num)
//     } else {
//         console.log('error');
//     }
// }
// fun9 = function (a, b) {
//     let text = "";
//     while (a <= b) {
//         text += `${a} `;
//         a++;
//     }
//     div.innerHTML = text;
// }

// -----------------------------task10

// push.onclick = () => {
//     let text = "";
//     let num = 1950;
//     let num1 = 2000;

//     while (num <= num1) {
//         text += `${num}  <br>`;
//         num = num + 2;
//     }
//     div.innerHTML = text;
// }

// ----------------------------task11

// push.addEventListener('click', () => {
//     let element = document.querySelectorAll('.element')
//     let text = "";
//     let i = 0;

//     while (i < element.length) {
//         text += `${element[i].innerHTML} `;
//         i++
//     }
//     div.innerHTML = text;
// })

// ----------------------------task12--------------------------------------------------------------------------------------random
// function task7(min, max) {
//     return min + Math.random() * (max - min);
// }
// push.addEventListener('click', () => {
//     let element = document.querySelectorAll('.element')
//     let i = 0;

//     while (i < element.length) {
//         element[i].style.backgroundColor = `rgba(${task7(0, 255)},${task7(0, 255)},${task7(0, 255)},${task7(0, 1)})`;
//         i++
//     }
// })

// ---------------------------------------------task13

// push.addEventListener('click', () => {
//     let element = document.querySelectorAll('.element');
//     let i = 0;

//     while (i < element.length) {
//         element[i].innerHTML = `${i} `;
//         i++;
//     }
// })

// -----------------------------------------------task14

// push.onclick = () => {
//     let check = document.querySelectorAll('.input');
//     let i = 0;
//     let text = '';

//     while (i < check.length) {
//         if (check[i].checked) {
//             text += `${check[i].value} `;
//         }
//         i++;
//     }
//     div.innerHTML = text;
// }
// --------------------------------------------------task15
// push.onclick = () => {
//     let text = '';
//     let i = 0;
//     let r = input.value;

//     while (i <= input.value) {
//         text += `${i} ${r} `
//         i++;
//         r--
//     }
//     div.innerHTML = text;
// }

// ---------------------------------------------------------------------------------------unit 9 DOM

// const div = document.querySelector('.div');
// const push = document.querySelector('.push');

// div.style.width = '400px';
// div.style.backgroundColor = 'red';
// div.style.border = '1px solid green';

// console.log(div.style)

// div.onclick = () => {
//     div.classList.add('blockActive');
// }
// push.onclick = () => {
//     div.classList.remove('blockActive');
// }
// push.onclick = function () {
//     this.classList.toggle('blockActive');
// }

// let one = div.getAttribute('data');

// div.innerHTML = one + one;
// let div = document.querySelector('.div')
// let input = document.querySelector('.input');
// let push = document.querySelectorAll('.push')

// for (let i = 0; i < push.length; i++) {
//     push[i].onclick = function () {
//         let inputNum = +input.value;
//         let multiply = +this.getAttribute('data-num');
//         div.innerHTML = inputNum * multiply;
//     }
// }
// ----------------------------------------------------------task1

let push = document.querySelector('.push');
let input = document.querySelector('.input');
let div = document.querySelector('.div');
let body = document.querySelector('body');

// push.onclick = function () {
//     let num = +input.value;
//     div.style.height = `${num / 2}px`;
//     div.style.width = `${num}px`;

//     console.log(div.style.height + div.style.width);
// }
// --------------------------------------------------------task2
// push.onclick = function () {
//     div.classList.add('blockActive');
// }
// ---------------------------------------------------------task3

// div.onclick = function () {
//     div.classList.remove('blockActive');
// }
// ---------------------------------------------------------task4

// push.onclick = function () {
//     div.classList.toggle('blockActive');
// }
// ----------------------------------------------------------task5

// push.onclick = function () {
//     if (input.className == 'input') {
//         div.innerHTML = true;
//     } else {
//         div.innerHTML = false;
//     }
// }

// -------------------------------------------------------task6

// push.onclick = function () {
//     let numP = document.querySelectorAll('.p')
//     div.innerHTML = numP.length;
// }

// --------------------------------------------------------task7

// push.onclick = function () {
//     let numP = document.querySelectorAll('.p');
//     for (i = 0; i < numP.length; i++) {
//         numP[i].classList.add('blockActive')
//     }
// }
// ---------------------------------------------------------task8

// push.onclick = function () {
//     let numP = document.querySelectorAll('.p');
//     i = 0;
//     while (i < numP.length) {
//         numP[i].classList.toggle('blockActive');
//         i++;
//     }
// }

// -------------------------------------------------------task9

// push.onclick = function () {
//     let el = document.querySelectorAll('.p');
//     for (let i = 0; i < el.length; i++) {
//         el[i].onclick = function () {
//             this.classList.toggle('blockActive');
//         }
//     }
// }

// -----------------------------------------------------task10


// push.onclick = function () {
//     let el = document.querySelectorAll('.p');
//     for (let i = 0; i < el.length; i++) {
//         el[i].onclick = function () {
//             this.classList.add('blockActive')
//         }
//     }
// }

// ----------------------------------------------------task11
// function task7(min, max) {
//     return min + Math.random() * (max - min);
// }
// push.onclick = function () {
//     for (let i = 0; i < input.value; i++) {
//         let num = document.createElement('p');
//         num.innerHTML = `object № - ${i}`;
//         num.style.backgroundColor = `rgba(${task7(0, 255)},${task7(0, 255)},${task7(0, 255)},${task7(0, 1)})`;
//         div.appendChild(num);
//     }
// }

// --------------------------------------------------task12
// function task7(min, max) {
//     return min + Math.random() * (max - min);
// }
// push.onclick = function () {
//     for (let i = 0; i < input.value; i++) {
//         let num = document.createElement('p');
//         num.innerHTML = 'push me!!!';
//         num.style.cursor = 'pointer';
//         body.append(num);
//         num.onclick = function () {
//             this.style.backgroundColor = `rgba(${task7(0, 255)},${task7(0, 255)},${task7(0, 255)},${task7(0, 1)})`;
//             this.style.fontSize = `${task7(10, 30)}px`;
//             this.style.width = `${task7(80, 300)}px`;
//             div.appendChild(this);
//         }
//     }
// }
// ---------------------------------------------------task14

// push.onclick = function () {
//     for (let i = 0; i < input.value; i++) {
//         let num = document.createElement('p');
//         num.innerHTML = 'push me!!!';
//         num.style.cursor = 'pointer';
//         div.prepend(num);
//     }
// }
// --------------------------------------------------------task15
// push.onclick = function () {
//     for (let i = 0; i < input.value; i++) {
//         let num = document.createElement('div');
//         num.innerHTML = 'push me!!!';
//         num.style.cursor = 'pointer';
//         div.before(num);
//     }
// }
// ----------------------------------------------------------------16

// push.onclick = function () {
//     for (let i = 0; i < input.value; i++) {
//         let num = document.createElement('div');
//         num.innerHTML = "hello" + i;
//         num.classList.add('border');
//         div.after(num);
//     }
// }

// --------------------------------------------------------------------17

// push.onclick = function (text) {
//     text = input.value;
//     let element = document.createElement('div');
//     element.classList.add('border');
//     element.textContent = text;
//     div.replaceWith(element);
// }

// --------------------------------------------------------------------task18

// push.onclick = () => {
//     let p = document.querySelector('.p');
//     input.value = p.getAttribute('data-num');
//     div.innerHTML += `attr = ${p.getAttribute('data-num')}`
// }

// ------------------------------------------------------------------task19

// push.onclick = (i) => {
//     let text = "";
//     let p = document.querySelectorAll('.p');
//     for (i = 0; i < p.length; i++) {
//         text += p[i].getAttribute('data-num') + " ";
//     }
//     div.innerHTML += `<h2>${text}<h2>`
// }

// ------------------------------------------------------------------task 20

// push.onclick = function (i) {
//     let p = document.querySelectorAll('.p');
//     let text = input.value;
//     for (i = 0; i < p.length; i++) {
//         p[i].setAttribute('data-' + text, `${i}`);
//         p[i].setAttribute('title', `${text + i}`);
//     }
// }

// ------------------------------------------------------------------------- unit 10 array


// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 1, 3, 4, 5];

// for (let i = 0; i < a.length; i++)  console.log(a[i]);

// push.onclick = () => { for (let i = 0; i < a.length; i++)  console.log(a[i]) }

// let t = a[0];
// a[0] = a[8];
// a[8] = t;
// for (let i = 0; i < a.length; i++)  console.log(a[i]);

//-------------------------------------------------------------------------------------посик большего числа
// push.onclick = (i) => {
//     let t = 0;
//     for (i = 0; i < a.length; i++) if (i > t) t = a[i];
//     console.log(t);
// }

// ------------------------------------------------------------------------------------выполнение мат+\- операции
// push.onclick = (i) => {
//     let t = 0;
//     for (i = 0; i < a.length; i++) t = t + a[i];
//     div.innerHTML = t;
// }
// --------------------------------------------------------------------------------------task1

// const array = ['a', a, 22, -22, 2.2, true];

// push.onclick = (i) => {
//     for (i = 0; i < array.length; i++) console.log(array[i]);
// }
// console.log(array);

// -----------------------------------------------------------------------------------------task2

// const array = ['a', 22, -22, 2.2, true];
// div.innerHTML = array;
// ----------------------------------------------------------------------------------------task3 if (Number.isInteger(array[i])) testing for a number
// const array = ['a', a, 22, -22, 2.2, true, 2, 5, 11, 6, 6, 7, 8];

// console.log(array.length);

// div.innerHTML = array[0] + ' ' + array[5];

// push.onclick = function (i) {
//     let sum = 0;
//     for (i = 0; i < array.length; i++)
//         if (Number.isInteger(array[i])) {
//             sum = sum + array[i]
//         } else { console.log(array[i]); continue; }
//     div.innerHTML = 'sum=' + sum;
// }
// const mass = ['Kostia', 'scorpion', 19, 11]
// push.addEventListener('click', () => {
//     let sum = ""
//     for (i = 0; i < mass.length; i++)
//         if (Number.isInteger(mass[i])) {
//             sum += mass[i] + ":";
//         } else {
//             sum += mass[i] + " ";
//         }
//     div.innerHTML = sum + "87";
// })

// const array = []

// array[7] = 'vietnam';
// array[6] = 'turkey';
// array[5] = 'italy';

// console.log(array.length);
// div.innerHTML = array[array.length - 1];

// array = [2, 3, 4, 5, 6, 7];

// push.onclick = function () {
//     let p = document.querySelectorAll('.p');
//     let textP = ""
//     for (j = 0; j < p.length; j++) textP += p[j].getAttribute('data');

//     // -----------------------
//     let text = "";
//     let r = array[0];
//     array[0] = array[5];
//     array[5] = r;
//     for (let i = 0; i < array.length; i++) text += array[i] + " ";

//     div.innerHTML = text + '<br>';
//     div.innerHTML += textP;
// }

// ----------------------------------------task12

// ar12 = ['test', 'west', 'list', 'class', 'best'];

// push.onclick = (i) => {
//     i = ar12[0];
//     ar12[0] = ar12[ar12.length - 1];
//     ar12[ar12.length - 1] = i;

//     div.innerHTML = ar12[ar12.length - 1] + " " + ar12[0];
// }

// -----------------------------------------task13

// ar13 = ['test', 'west', 'list', 'class', 'best'];
// let text = "";

// push.onclick = (i) => {
//     for (let i = 0; i < ar13.length; i++) {
//         text += i + " " + ar13[i] + ", ";
//     }
//     div.textContent = text;
// }

// -------------------------------------------task 14

// ar14 = [1, 2, 3, 'hello', 66];

// push.onclick = (i) => {
//     let text = "";
//     for (i = ar14.length - 1; i >= 0.; i--) {
//         text += ar14[i] + ' ';
//     }
//     div.innerHTML = text;
// }

// --------------------------------------------task15

// ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

// push.onclick = (i) => {
//     let text = "";
//     for (i = 0; i < ar15.length; i++) {
//         if (ar15[i] < 0) text += ar15[i] + ' ';
//         else continue;
//     }
//     div.innerHTML = text;
// }

// --------------------------------------------task 16;

// ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// ar16_odd = [];
// ar16_even = [];

// push.onclick = (i) => {
//     let p = 0;
//     let z = 0;
//     for (i = 0; i < ar16.length; i++) {
//         if (ar16[i] % 2 === 0) {
//             ar16_odd[p] = ar16[i];
//             p++;
//         } else {
//             ar16_even[z] = ar16[i];
//             z++;
//         }
//     }
//     document.querySelector('h1').innerHTML = ar16_odd;
//     document.querySelector('h2').innerHTML = ar16_even;
// }

// ------------------------------------------task17

// let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

// push.onclick = (i) => {
//     let bigNum = 0;
//     for (i = 0; i < ar17.length; i++) if (ar17[i] > 3) bigNum++;
//     div.innerHTML = bigNum;
// }

// ----------------------------------------------task18

// let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];

// push.onclick = (p) => {
//     p = 0;
//     z = 0;
//     for (i = 0; i < ar18.length; i++) if (p < ar18[i]) p = ar18[i]
//     div.innerHTML = p;
// }

// --------------------------------------------task19 -----------------------------------------------------index of bogest number

// ar19 = [15, 313, 666, 78, 241, 4, 45, 424, 67]

// push.onclick = (i) => {
//     let index = 0;
//     let big = 0;

//     for (i = 0; i < ar19.length; i++) if (big < ar19[i]) {
//         big = ar19[i];
//         index = i;
//     }
//     console.log(index);
// }

// -------------------------------------------task20

// ar20 = [4, 5, 6, 7, 8, 9, 10];

// push.onclick = (sum, i) => {
//     sum = 0;
//     for (i = 0; i < ar20.length; i++) sum = sum + ar20[i];
//     input.value = sum;
// }

// --------------------------------------------------------------------------------------unit 11 array nethods

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const b = ['a', 'b', 'c', 'd', 'e'];

// // console.log(a.length)
// a.push(10, 11, 12);

// // console.log(a.length)

// // console.log(a)
// console.log(a)
// console.log(a.pop());
// delete a[2];
// a.splice(2, 2, 'hi', 'hello');
// console.log(a)


// console.log(a)



// --------------------------------------------task1


// let array1 = [33, 'best', 66, 'best', 22, 33, 55, 55];

// const clear = (data) => {
//     return data.trim();
// }
// const find = (num) => {
//     num = input.value;
//     input.value = "";
//     if (num == "") {
//         input.setAttribute("placeholder", "you need insert a number or string");
//         return input.value = "";
//     }
//     return array.push(clear(num));
// }

// const show = (elem) => {
//     div.innerHTML = elem + '<br>' + elem.length;

// }
// push.onclick = (elem) => {
//     find();
//     show();
// }

// ---------------------------------------------task2
// const popIt = () => {
//     return array.pop();
// }
// push.onclick = () => {
//     popIt()
//     show();
// }

// ----------------------------------------------task3

// const shiftIt = (elem) => {
//     return elem.shift();
// }
// push.onclick = () => {
//     shiftIt(array2);
//     show(array2);
// }

// ---------------------------------------------------task4


// const pushIt = (elem) => {
//     return elem.push(+input.value);
// }
// push.onclick = (array2) => {
//     pushIt(array);
//     show(array);
// }

// -----------------------------------------------------task5

// const unshiftIt = (elem) => {
//     return elem.unshift(input.value)
// }
// push.onclick = () => {
//     unshiftIt(array1);
//     show(array1);
// }

// ---------------------------------------------------------task6
// let plus = (elem) => {
//     let num = +input.value;
//     return elem[elem.length] = num;
// }

// push.onclick = () => {
//     plus(array);
//     show(array);
//     input.value = "";
// }

// -----------------------------------------------------task7
// a = ['china', 'india', 'brazil', 'japan', 'egypt'];

// push.onclick = (i) => {
//     let b = [];
//     let p = 0;

//     for (i = 0; i < a.length - 1; i++) {
//         b[p] = a[i];
//         p++;
//     }
//     a = b;
//     div.innerHTML = a;
//     return a
// }

// -----------------------------------------------------task8
// let a = [33, 'best', 66, 'best'];

// push.onclick = (i) => {
//     let b = []
//     let p = 0;
//     for (i = 0; i < a.length - 1; i++) {
//         p++;
//         b[i] = a[p];
//     }
//     a = b;
//     div.innerHTML = a
//     return a
// }

// ----------------------------------------------------task9
// let a = [33, 'best', 66, 'best'];

// push.onclick = function () {
//     let b = [];
//     b[0] = +input.value;
//     let p = 0;
//     for (let i = 0; i < a.length; i++) {
//         p++;
//         b[p] = a[i];
//     }
//     a = b;
//     div.innerHTML = a;
//     input.value = "";
//     return a;
// }

// ------------------------------------------------task10

// a = [3, 14, 15, 92, 6];

// push.onclick = function () {
//     let b = [];
//     let p = a.length - 1;
//     for (i = 0; i < a.length; i++) {
//         b[p] = +a[i];
//         p--;
//     }
//     a = b
//     div.innerHTML = a;
//     return a
// }

// ------------------------------------------------task11

// a = [2, 3, 4, 5, 6, 7];

// push.onclick = function () {
//     let num = +input.value;
//     let result = a.indexOf(num);
//     console.log(num, result);
// }

// ----------------------------------------------------task12

// let a = [6, 62, 6, 60, 70, 1, 5]

// push.onclick = function (num) {
//     div.innerHTML = ' ';
//     num = +input.value;
//     for (let i = 0; i < a.length; i++) {
//         a[i] == num ? div.innerHTML += i + ' , ' : console.log(-1)
//         // if (a[i] == num) {
//         //     div.innerHTML = i;
//         //     break;
//         // }
//         // else {
//         //     div.innerHTML = -1
//         // }
//     }
// }

// -----------------------------------------------------task13

// let a = [6, 0, 22, 1, 4, 76]

// push.onclick = function () {
//     let b = [];
//     let p = a.length - 1;

//     for (i = 0; i < a.length; i++) {
//         b[p] = a[i];
//         p--;
//     }
//     a = b;
//     div.innerHTML = a;
//     return a
// }

// --------------------------------------------------------task14
// onclick = function (num) {
//     num = +input.value;
//     let a = [];
//     for (i = 0; i < num; i++) {
//         a[i] = i + 1;
//     }
//     div.innerHTML = a
// -------------------------------------------------------task15

// let a = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

// push.onclick = function () {
//     let num = +input.value;
//     p = 0;
//     for (i = 0; i < a.length; i++) {
//         if (a[i] != num) {
//             p++;
//             if (p === a.length) {
//                 a[a.length] = num;
//             }
//         }
//     }
//     input.value = '';
//     div.innerHTML = a
//     return a
// }

// ---------------------------------------------------------task16

// let a = [];
// let b = [5, 6, 7, 8, 9];
// let c = [23, 24, 56, 87];


// push.onclick = function () {
//     a = b.concat(c)
//     console.log(a)
// }

// ---------------------------------------------------task17


// let a = ['a', 'b', 'c', 'd'];
// let b = [1, 2, 3, 4, 5, 'war'];
// let c = [];

// push.onclick = function () {
//     let p = 0;
//     let sum = a.length + b.length;
//     for (let i = 0; i < sum; i++) {
//         c[i] = a[i];
//         if (i >= a.length) {
//             c[i] = b[p];
//             p++;
//         }
//     }
//     div.innerHTML = c
//     return c
// }

// -----------------------------------------------------task18

// let a = ['b', 'c', '45', 'e', 'z', 'y'];

// push.onclick = function () {
//     let num = input.value;
//     div.innerHTML = a.includes(num);
// }

// --------------------------------------------------------task19

// let a = ['Your', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every', 'chjsbjcbscjasckjasckjnascjnajcnasjkcn'];

// push.onclick = function (i) {
//     let p = 0;
//     for (i = 0; i < a.length; i++) {
//         if (a[i].length > p) {
//             p = a[i].length;
//             index = i;
//         }
//     }
//     div.innerHTML = a[index] + ' ' + p + '-букв';
// }

// -------------------------------------------------------task20

let a = [4, 5, 6, 7, 8, 9, 10]

push.onclick = () => {
    let x = a.join('');
    console.log(x)
}