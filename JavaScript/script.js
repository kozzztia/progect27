
let push = document.querySelector('.push');
let input = document.querySelector('.input');
let div = document.querySelector('.div');
let body = document.querySelector('body');

// -------------------------------------------------------------------------------unit 11  многомерный массивы


let a = [1, 2, 3, 4, 5, 6];

let b = [
    [1, -2, 3, 4, 5, 6, 4, 4, -5, -6, 7, 'war'],
    [7, 8, 9, 10, 'war', 11, -12],
    [13, 'war', 14, -15, 16, 17, 18],
    [19, -20, 21, -22, -23, 'war', 24],
    [25, 26, -27, 28, 29, 30],
    [31, -32, 'war', 33, -34, 35, -36],
];
// for (let i = 0; i < b.length; i++) {
//     // console.log(b[i]);
//     for (let k = 0; k < b[i].length; k++) {
//         console.log(b[i][k]);
//     }
//     console.log('_')
// }


// div.innerHTML = d;
// let k = 0;


// push.onclick = function () {
//     if (k + 1 < 11) {
//         d[k] = 1;
//         d[k + 1] = k;
//         k++;
//     }
//     div.innerHTML = d;
// }

// ---------------------------------------------------------------------------------tasks

// push.onclick = (i) => {
//     p = 0;
//     p2 = 0;
//     p3 = 0;
//     let test = [];
//     let test2 = [];
//     let test3 = [];
//     for (i = 0; i < b.length; i++) {
//         for (k = 0; k < b[i].length; k++) {
//             if (b[i][k] % 2 == 0 && b[i][k] % 3 === 0) {
//                 test[p] = b[i][k];
//                 p++;
//             }
//             else if (b[i][k] % 2 == 0) {
//                 test2[p2] = b[i][k];
//                 p2++;
//             } else if (b[i][k] % 3 === 0) {
//                 test3[p3] = b[i][k];
//                 p3++;
//             }
//         }
//     }
//     console.log(test);
//     console.log(test2);
//     console.log(test3);
// }

// push.onclick = (i) => {
//     let p = 0;
//     let p1 = 0;
//     let test = [];
//     let test1 = [];
//     for (i = 0; i < b.length; i++) {
//         for (k = 0; k < b[i].length; k++) {
//             if (b[i][k] % 2 != 0) test[p] = b[i][k], p++;
//             else test1[p1] = b[i][k], p1++;
//         }
//     }
//     div.innerHTML = `odd = ${test} <br> even = ${test1}`;
// }


// push.onclick = (i) => {
//     let p = 0;
//     let p1 = 0;
//     let test = '';
//     let test1 = '';
//     for (i = 0; i < b.length; i++) {
//         for (k = 0; k < b[i].length; k++) {
//             if (b[i][k] % 2 != 0) test += `${+b[i][k]}  `, p++;
//             else test1 += `${+b[i][k]}  `, p1++;
//         }
//     }
//     div.innerHTML = `${test} <br> ${test1}`;
// }

// push.onclick = (i) => {
//     let p = 0;
//     let test = [];
//     for (i = 0; i < b.length; i++) {
//         for (r = 0; r < b[i].length; r++) {
//             if (b[i][r] < 0) test[p] = b[i][r], p++;
//         }
//     }
//     div.innerHTML = `${test} `;
// }

push.onclick = (i, p) => {
    p = 0;
    let test = [];
    for (i = 0; i < b.length; i++) {
        for (r = 0; r < b[i].length; r++) {
            if (Number.isInteger(b[i][r]));
            else test[p] = b[i][r], p++;
        }
    }
    console.log(test.length)
    div.innerHTML = test;
}
// --------------------------------------------------t11