// --------------------- task2


// let a = 7;
// let b = 9;
// let result = 7 * 9;
// console.log(result);
// let div = document.querySelector('.out');
// ------
// let a = 7;
// let b = 9;
// let result = a / b;
// div.innerHTML = result;


// let e = 3;
// let f = 5;
// let result2 = e + f;
// div.innerHTML = result2;

// let e1 = '3';
// let f1 = 5;
// let result3 = e1 + f1;
// div.innerHTML = result3;
// // -----------------string
// let e2 = 3;
// let f2 = 0;
// let result4 = e2 / f2;
// div.innerHTML = result4;
// // ----------infinity
// let e3 = 3;
// let f3 = 'hello';
// let result5 = e3 + f3;
// div.innerHTML = result5;
// // ---------string
// let e4 = 3;
// let f5 = 'hello';
// let result6 = e3 * f3;
// div.innerHTML = result6;
// ---------not a number

// let push = document.querySelector('.btn').onclick = function () {
//   console.log(document.querySelector('.input').value);
//   document.querySelector('.input').value = "";
// }
// let push = document.querySelector('.btn');
// let input = document.querySelector('.input');

// push.addEventListener('click', (i) => {
//   i = input.value;

//   // console.log(i);
//   div.innerHTML = i;
//   input.value = '';

// })

// let push = document.querySelector('.btn');
// let out = document.querySelector('.out');
// let input = document.querySelector('.input');
// let input2 = document.querySelector('.input2');

// push.addEventListener('click', function (e) {
//   e = input.value;
//   input.value = '';
//   out.innerHTML = e * 10;

// })

// push.addEventListener('click', () => {
//   out.innerHTML = +input.value + 10;
//   input.value = '';
// })

// push.addEventListener('click', (value1, value2) => {
//   value1 = input.value;
//   value2 = input2.value;
//   out.innerHTML = 'hello' + ' ' + value1 + ' ' + value2;
// })

// push.onclick = function (a, b) {
//   a = +input.value;
//   b = +input2.value;
//   input.value = input2.value = '';
//   console.log(a + b);
//   out.innerHTML = a + b;

// }
// push.addEventListener('click', () => {
//   input.value = 'hello world';
//   input2.value = 'sobaka sutulaia';
// })

// out.style.border = '2px solid green';



// push.addEventListener('click', (a, b) => {
//   a = +input.value;
//   b = +input2.value;
//   input.value = input2.value = '';
//   result = a + b
//   out.innerHTML = result;
// })

// push.addEventListener('click', function () {
//   t = +input.value;
//   g = +input2.value;

//   t = parseInt(t);
//   g = parseInt(g);

//   console.log(t + g);
//   out.innerHTML = t + g;
// })

// push.addEventListener('click', () => {
//   t = input.value;
//   g = input2.value;

//   t = parseFloat(t);
//   g = parseFloat(g);
//   console.log(t + ' ' + g)

// })
// -----------------------------------------------------------------------------------------------------
// let push = document.querySelector('.btn');
// let out = document.querySelector('.out');
// let input = document.querySelector('.input');
// let input2 = document.querySelector('.input2');
// -----------------------------------------------------------------------------------------------------

// task 1
// const btn1 = document.querySelector('.btn1');
// const btn2 = document.querySelector('.btn2');
// const div = document.querySelector('div');
// const input = document.querySelector('.input');

// btn1.addEventListener('click', () => {
//   let num = +input.value;

//   if (num <= 18 && num > -1) {
//     div.innerHTML = 'to yong';
//   }
//   else if (num > 18 && num <= 90) {
//     div.innerHTML = 'you welcome';
//   }
//   else if (num > 90) {
//     div.innerHTML = 'sorry you to old';
//   }
//   else {
//     div.innerHTML = 'not correct input';
//   }

//   switch (num) {
//     case 18:
//       console.log("немножко");
//       break;
//     case 19:
//       console.log("поехали");
//       break;
//     case 20:
//       console.log("позновато");
//       break;
//     default:
//       console.log("втираеш куюто дичь");
//       break;

//   }
// })


// ---------------section 3 ---------------------------
// const btn1 = document.querySelector('.btn1');
// // const btn2 = document.querySelector('.btn2');
// const div = document.querySelector('.div');
// const input1 = document.querySelector('.input1');
// const input2 = document.querySelector('.input2');
// task 1----------------------------------------
// let f1 = function () {
//   i = input.value;
//   div.innerHTML = i == 4;
// }
// btn1.addEventListener('click', f1);
// task 2----------------------------------
// let f2 = function () {
//   a = input1.value;
//   b = input2.value;
//   if (a < b) {
//     div.innerHTML = a + ' меньше ' + b;
//   }
//   else if (a > b) {
//     div.innerHTML = b + ' больше ' + a;
//   }
//   else {
//     div.innerHTML = a + ' ровно ' + b;
//   }
// }
// btn1.addEventListener('click', f2);
// task 3-------------------------------------------

// let f3 = function () {
//   let a = document.querySelector('.input1').value;
//   let b = document.querySelector('.input2').value;
//   if (a < b) {
//     div.innerHTML = b;
//   }
//   else {
//     div.innerHTML = a;
//   }
// }
// btn1.addEventListener('click', f3)

// --------------------------------------------task4

// btn1.addEventListener('click', () => {
//   let a = document.querySelector('.input1').value;
//   if (a < 18) {
//     div.innerHTML = '1';
//   }
//   else if (a >= 18) {
//     div.innerHTML = '0';
//   }
// })

// -------------------------------------------task5

// btn1.addEventListener('click', () => {
//   let input5 = document.querySelector('.input1');
//   if (input5.value < 0) {
//     div.innerHTML = 'm';
//   }
//   else if (input5.value == 0) {
//     div.innerHTML = '0';
//   }
//   else {
//     div.innerHTML = '1';
//   }
// })

// -----------------------------------------task 6

// // let input6 = document.querySelector('.input1');
// let f6 = function () {
//   num = document.querySelector('.input1').value;
//   // if (num % 2 == 0) {
//   //   div.innerHTML = 'even'
//   // }
//   // else {
//   //   div.innerHTML = 'odd'
//   // }
//   (num % 2 == 0) ? div.innerHTML = 'even' : div.innerHTML = 'odd'; //bonus  сокращенно
// }

// btn1.addEventListener('click', f6)

// ----------------------------------------task7

// let f7 = () => {
//   a = document.querySelector('.input1').value;
//   b = document.querySelector('.input2').value;
//   // div.innerHTML = a ** b
//   div.innerHTML = Math.pow(a, b); //--бонус через math.pow( first , second)
// }
// btn1.addEventListener('click', f7)

// ---------------------------------------task8
// let f8 = () => {
//   num = +document.querySelector('.select').value;
//   switch (num) {
//     case 1:
//       div.innerHTML = 'one';
//       break;
//     case 2:
//       div.innerHTML = 'two';
//       break;
//     case 3:
//       div.innerHTML = 'three';
//       break;
//     default:
//       div.innerHTML = 'error';
//       break;
//   }
// }
// btn1.addEventListener('click', f8)

// ---------------------------------------task9

// let f9 = () => {
//   num = document.querySelector('.input1').value;

//   if (num >= 1 && num <= 32) {
//     div.innerHTML = 'first'
//   }
//   else if (num >= 33 && num <= 43) {
//     div.innerHTML = 'second'
//   }
//   else if (num >= 44 && num <= 64) {
//     div.innerHTML = 'third'
//   }
//   else {
//     div.innerHTML = "are you shore?"
//   }
// }
// btn1.addEventListener('click', f9)

// -------------------------------------task10

// let f10 = () => {
//   num = document.querySelector('.select').value;
//   div.innerHTML = 'value = ' + num;
// }
// btn1.addEventListener('click', f10)


// --------------------------------------task11

// num = document.querySelector('.select')

// input = document.querySelector('.select');
// input.onchange = () => {
//   num = input.value;
//   div.innerHTML = 'value = ' + num;
// }


// --------------------------------------task12

// btn1.addEventListener('click', () => {
//   input1 = +document.querySelector('.input1').value;
//   div.innerHTML = typeof (input1);
// })

//  -------------------------------------task13

// btn1.addEventListener('click', () => {
//   input1 = document.querySelector('.input1').value;
//   div.innerHTML = typeof (input1);
// })


// --------------------------------------task14

// f11 = () => {
//   // div.innerHTML = input1.value + select.value + input2.value;
//   num1 = +document.querySelector('.input1').value;
//   num2 = +document.querySelector('.input2').value;
//   selector = document.querySelector('.select').value;
//   // if (selector == '+') {
//   //   div.innerHTML = num1 + num2;
//   // }
//   // else if (selector == '-') {
//   //   div.innerHTML = num1 - num2;
//   // }
//   // else if (selector == '*') {
//   //   div.innerHTML = num1 * num2;
//   // }
//   // else if (selector == '/') {
//   //   div.innerHTML = num1 / num2;
//   // }
//   // else if (selector == '%') {
//   //   div.innerHTML = num1 % num2;
//   // }
//   // else if (selector == '%') {
//   //   div.innerHTML = num1 ** num2;
//   // }
//   // else {
//   //   div.innerHTML = 'something wrong'
//   // }
//   switch (selector) {
//     case '+':
//       div.innerHTML = num1 + num2;
//       break;
//     case '-':
//       div.innerHTML = num1 - num2;
//       break;
//     case '*':
//       div.innerHTML = num1 * num2;
//       break;
//     case '/':
//       div.innerHTML = num1 / num2;
//       break;
//     case '%':
//       div.innerHTML = num1 % num2;
//       break;
//     case '**':
//       div.innerHTML = num1 ** num2;
//       break;
//     default:
//       div.innerHTML = 'Error';
//       break;
//   }
// }
// btn1.addEventListener('click', f11)


// ---------------------------------------task15


// f15 = () => {
//   input1 = document.querySelector('.select1');
//   input2 = document.querySelector('.select2');
//   operator = document.querySelector('.select');
//   num1 = +input1.value;
//   num2 = +input2.value;
//   operation = operator.value;
//   // switch (operation) {
//   //   case '&&':
//   //     div.innerHTML = num1 && num2
//   //     break;
//   //   case '||':
//   //     div.innerHTML = num1 || num2
//   //     break;
//   //   default:
//   //     div.innerHTML = 'error operation';
//   //     break;
//   // }

//   if (operator == '&&') {
//     div.innerHTML = num1 && num2;
//   }
//   else {
//     div.innerHTML = num1 || num2;
//   }
// }

// btn1.addEventListener('click', f15);


// --------------------------------------------------------------unit4
// -----------------------------task1
// div = document.querySelector('.div');
// btn = document.querySelector('.btn');
// input = document.querySelector('.input1');
// inputBtn = document.querySelector('.inputBtn');
// p = document.querySelector('.p')
// n = 'task № ';
// check = document.querySelector('.check');

// btn.addEventListener('click', () => {
//   div.innerHTML = 'task1';
// })
// ------------------------------task2

// inputBtn.addEventListener('click', () => {
//   div.innerHTML = 'task 2';
// })

// ------------------------------task3
// p.addEventListener('click', () => {
//   p.innerHTML = n + 3;
// })

// -------------------------------task4


// btn.addEventListener('click', () => {
//   text = check.value;
//   if (check.checked == true) {
//     div.innerHTML = n + text;
//   }
//   else {
//     div.innerHTML = false;
//   }
// })

// --------------------------------task6

// btn.addEventListener('click', () => {
//   let hide = document.querySelector('.hide');
//   num = hide.value;
//   p.textContent = num;
// })

// -------------------------------task7

// btn.addEventListener('click', () => {
//   pass = document.querySelector('.pass').value;
//   num = pass.length;
//   if (num <= 6) {
//     console.log(pass.length);
//     div.textContent = "0";
//   }
//   else if (num > 6) {
//     console.log(pass.length);
//     div.textContent = "1";
//   }
//   console.log(pass.length);
// })

// ------------------------------------task8



// btn.addEventListener('click', () => {
//   div.innerHTML = '<input type="text"class="input1">';
//   div.innerHTML += '<button class="btn1">go</button>';

//   btn1 = document.querySelector('.btn1').addEventListener('click', () => {
//     div.innerHTML = document.querySelector('.input1').value;;
//   })
// })

// --------------------------------------task9

// btn.addEventListener('click', () => {
//   radio = document.querySelector('.radio');
//   text = radio.value;
//   if (radio.checked == true) {
//     p.innerHTML = text;
//   }
//   else {
//     p.innerHTML = 0;
//   }
// })

// -----------------------------------------task10

// btn.addEventListener('click', () => {
//   color = document.querySelector('.color').value;
//   div.style.backgroundColor = color;
// })

// -----------------------------------------task11

// btn.addEventListener('click', () => {
//   color = document.querySelector('.color').value;
//   document.querySelector('.color1').value = color;
// })

// -------------------------------------------task12

// btn.addEventListener('click', () => {
//   data = document.querySelector('.data').value;
//   p.textContent = data;
//   div.innerHTML = '<h1> ' + data + '</ph1>';
// })

// -------------------------------------------task13
// let range = document.querySelector('.range');
// range.addEventListener('change', () => {
//   num = +range.value;
//   switch (num) {
//     case 10:
//       div.innerHTML = range.value;
//       div.style.backgroundColor = 'white';
//       break;
//     case 20:
//       div.innerHTML = range.value;
//       div.style.backgroundColor = 'red';
//       break;
//     case 40:
//       div.innerHTML = range.value;
//       div.style.backgroundColor = 'green';
//       break;
//     case 60:
//       div.innerHTML = range.value;
//       div.style.backgroundColor = 'pink';
//       break;
//     case 80:
//       div.innerHTML = range.value;
//       div.style.backgroundColor = 'yellow';
//       break;
//     case 100:
//       div.innerHTML = range.value;
//       div.style.backgroundColor = 'gray';
//       break;
//     default:
//       break;
//   }
// })

// ----------------------------------task14

// btn.addEventListener('click', () => {
//   text = document.querySelector('.textarea');
//   div.innerHTML = text.value;
//   text.value = '';
// })

// ----------------------------------task15

// btn.addEventListener('click', () => {
//   text = document.querySelector('.textarea');
//   document.querySelector('.textarea1').value = text.value;

// })

// ------------------------------------task16

// btn.addEventListener('click', () => {
//   select = +document.querySelector('.select').value;


//   switch (select) {
//     case 1:
//       div.innerHTML = select;
//       div.style.backgroundColor = 'white';
//       break;
//     case 2:
//       div.innerHTML = select;
//       div.style.backgroundColor = 'red';
//       break;
//     case 3:
//       div.innerHTML = select;
//       div.style.backgroundColor = 'green';
//       break;
//     case 4:
//       div.innerHTML = select;
//       div.style.backgroundColor = 'pink';
//       break;
//     case 5:
//       div.innerHTML = select;
//       div.style.backgroundColor = 'yellow';
//       break;
//     default:
//       break;
//   }
// })

// --------------------------------------task17

// document.querySelector('.select').addEventListener('change', () => {
//   div.textContent = document.querySelector('.select').value;
// })
// ---------------------------------------task18

// document.querySelector('.select').addEventListener('change', () => {
//   document.querySelector('.input').value =
//     document.querySelector('.select').value;
// })

// -----------------------------------------task19

// btn.addEventListener('click', () => {
//   text = document.querySelector('.text').value;
//   password = document.querySelector('.password').value;
//   div.innerHTML = '<h1>' + text + " - " + password + '</h1>';
// })

// ----------------------------------------task20

// btn.addEventListener('click', () => {
//   text = document.querySelector('.text').value;
//   password = document.querySelector('.password').value;

//   div.innerHTML = '<h1>' + text + " - " + password + '</h1>';
// })




// btn = document.querySelector('.btn');
// div = document.querySelector('.div');
// btn.addEventListener('click', () => {

//   let input = document.querySelector('input').value;
// let arr = input.split('');
//   let arr = input;
//   let x = [];
//   let y = [];
//   let other = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == '(') {
//       x.push(arr[i]);
//     }
//     else if (arr[i] == ')') {
//       y.push(arr[i]);
//     }
//     else {
//       other.push(arr[i]);
//     }
//   }
//   div.innerHTML =
//     x.length + '- знака  ( ' + ' и ' + y.length + '- знака - ) ,' + other.length + ' - остальных знаков';

// })
// ---------------------------------------------------------unit 5
let div = document.querySelector('.div');
let push = document.querySelector('.btn');
let input = document.querySelector('.input');
let input1 = document.querySelector('.input1');


// -----------------------------------task 1
// push.addEventListener('click', () => {
//   for (var i = 1; i <= 50; i++) {
//     div.innerHTML += i + " "
//   }
// })

// ------------------------------------task 2
// let fun = function () {
//   for (var i = 2; i <= 122; i = i + 2) {
//     div.innerHTML += i + " ";
//   }
// }
// push.addEventListener('click', fun)
//
// -----------------------------------task3

// push.addEventListener('click', () => {
//   for (i = 25; i >= 7; i--) {
//     div.innerHTML += i + ' ';
//   }
// })

// -------------------------------------task4

// let fun = function () {
//   for (let i = 77; i >= 35; i = i - 3) {
//     div.innerHTML += i + '_';
//   }
// }

// --------------------------------------task5

// let fun = function () {
//   for (let i = 1; i < 17; i++) {
//     if (i % 2 == 0) {
//       div.innerHTML += i + '_' + '**'
//     }
//     else {
//       div.innerHTML += i + '_' + '*' + ' '
//     }
//   }

// }
// let fun = () => {
//   for (i = 1; i < 122; i++) {
//     if (i % 2 == 0) {
//       div.innerHTML += i + ' ';
//     }
//   }
// }
// ------------------------------task 6
// let fun = () => {
//   for (x = 0; x < 3; x++) {
//     for (i = 0; i < 6; i++) {
//       div.innerHTML += '*';
//     }
//     div.innerHTML += '<br>';
//   }
// }
// ----------------------------------bonus
// let fun = () => {
//   div.innerHTML = '';
//   let br = input.value;
//   let stars = 7;
//   for (i = 1; i <= br * stars; i++) {
//     div.innerHTML += '*';
//     if (i % stars == 0) {
//       div.innerHTML += '<br>';
//     }
//     input.value = '';
//   }
// }
// --------------------------------------task7
// let fun = () => {
//   div.innerHTML = '';
//   let num = input.value;
//   for (i = num; i >= 0; i--) {
//     div.innerHTML += i + ' ';
//   }
//   input.value = '';
// }

// ---------------------------------------task18
// let fun = () => {
//   num = input.value;
//   num1 = input1.value;
//   div.innerHTML = '';
//   br = 0;
//   for (i = num; i <= num1; i++) {
//     div.innerHTML += i + ' ';
//     if (i % 6 == 0) {
//       div.innerHTML += '<br>'
//       br++;
//     }
//   }
//   console.log('number = ' + br)
// }

// ---------------------------------------task9

// fun = () => {
//   let num = input.value;
//   let num1 = input1.value;
//   div.innerHTML = '';
//   if (num < num1) {
//     for (let i = num; i <= num1; i++) {
//       div.innerHTML += i + ' ';
//     }
//   }
//   else {
//     for (let i = num; i >= num1; i--) {
//       div.innerHTML += i + ' ';
//     }
//   }
//   input1.value = input.value = '';
// }

// ---------------------------------task10

// let fun = () => {
//   num = input.value;
//   num1 = input1.value;
//   for (i = num; i <= num1; i++) {
//     if (i % 2 == 0) {
//       div.innerHTML += i + ' ';
//     }
//   }
// }

// ----------------------------------task 11



// let fun = () => {
//   let element = document.querySelectorAll('.element');
//   for (i = 0; i < element.length; i++) {
//     div.innerHTML += element[i].textContent + ' ';
//     element[i].innerHTML += ' element №' + i;
//   }
// }



// -----------------------------------task 12
// const fun = () => {
//   element = document.querySelectorAll('.element');
//   for (i = 0; i < element.length; i++) {
//     element[i].style.backgroundColor = 'skyblue';
//     element[i].style.fontSize = '20px';
//     element[i].style.border = '1px solid black';
//     element[i].style.color = 'red';
//   }
// }

// -----------------------------------task13
// let fun = () => {
//   let arrInput = document.querySelectorAll('.input');
//   let x = 1;
//   for (i = 0; i < arrInput.length; i++) {
//     arrInput[i].value = x;
//     x++;
//   }
//   div.textContent = arrInput.length;
// }


// ---------------------------------------task 14
// let fun = () => {
//   let input = document.querySelectorAll('.input');
//   for (i = 0; i < input.length; i++) {
//     if (input[i].checked) {
//       div.textContent += input[i].value + ' ';
//       input[i].checked = false; //whery interesting
//     }
//   }
// }
// -------------------------------------------task15
// let fun = function () {
//   div.innerHTML = '';
//   let arr = '10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10';
//   let arrCorrect = arr.split(' ');
//   for (i = 0; i < arrCorrect.length; i++) {
//     div.innerHTML += arrCorrect[i] + '  ';
//   }

// }
// -------------------------------------------------------------------unit 6

push.addEventListener('click', fun)