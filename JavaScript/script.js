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
function task7(min, max) {
    return min + Math.random() * (max - min);
}
push.onclick = function () {
    for (let i = 0; i < input.value; i++) {
        let num = document.createElement('p');
        num.innerHTML = 'push me!!!';
        num.style.cursor = 'pointer';
        body.append(num);
        num.onclick = function () {
            num.style.backgroundColor = `rgba(${task7(0, 255)},${task7(0, 255)},${task7(0, 255)},${task7(0, 1)})`;
            div.appendChild(this);
        }
    }
}