// ----------------------------------------unit6


let div = document.querySelector('.div');
let input = document.querySelector('.input');
let push = document.querySelector('.push');


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

// push.addEventListener('click', () => {
//   div.innerHTML = "";

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

// for (i = 1; i <= input.value; i++) {
//   for (k = input.value; k >= i; k--) {
//     div.innerHTML += "*";
//   }
//   div.innerHTML += '<br>';
// }
// div.style.textAlign = 'left';


//   input.value = "";
// })
function one() {


}


push.addEventListener('click', one)