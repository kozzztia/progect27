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

let push = document.querySelector('.btn');
let out = document.querySelector('.out');
let input = document.querySelector('.input');
let input2 = document.querySelector('.input2');

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

out.style.border = '2px solid green';



// push.addEventListener('click', (a, b) => {
//   a = +input.value;
//   b = +input2.value;
//   input.value = input2.value = '';
//   result = a + b
//   out.innerHTML = result;
// })

push.addEventListener('click', function () {
  t = +input.value;
  g = +input2.value;

  t = parseInt(t);
  g = parseInt(g);

  console.log(t + g);
  out.innerHTML = t + g;
})

// push.addEventListener('click', () => {
//   t = input.value;
//   g = input2.value;

//   t = parseFloat(t);
//   g = parseFloat(g);
//   console.log(t + ' ' + g)

// })